import requests


def format_and_print(data, min, max):
    art_data = data['data']

    for d in art_data:
        title = d.get('title', 'Unknown title')
        artist = d.get('artist_display', 'Unknown artist')
        date = d.get('date_display', '')

        # Extract the year from the date display
        try:
            year = int(date[:4])

            # Only print artwork within the requested year range
            if min <= year <= max:
                print(f"{title} is by {artist} which was displayed on {year}\n")

        except (ValueError, TypeError):
            # Skip artwork without a recognizable year
            continue


# Get user input
search_term = input("What would you like to search? ")
min_year = int(input("What's the minimum year you'd like to search? "))
max_year = int(input("What's the maximum year you'd like to search? "))

# API URL
url = "https://api.artic.edu/api/v1/artworks/search"

# Required headers
headers = {
    "AIC-User-Agent": "museum-crawler (your_email@berklee.edu)",
    "User-Agent": "museum-crawler (your_email@berklee.edu)",
}

# API parameters
params = {
    'q': search_term,
    'fields': "title,artist_display,date_display",
    'limit': 100
}

# Make API request
response = requests.get(url, params=params, headers=headers)

# Check response and format output
if response.status_code == 200:
    data = response.json()
    format_and_print(data, min_year, max_year)
else:
    print("Error retrieving artwork:", response.status_code)