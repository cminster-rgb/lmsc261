user_name = input("Please enter your name: ")
print(f"Hello, {user_name}!")

skateboard_color = input("Enter your favorite color: ")
print(f"You chose: {skateboard_color}")

skateboard_colors = {
    "deck": "Neon Green",
    "wheels": "White",
    "trucks": "Matte Black",
    "griptape": "Checkerboard"

}
print(skateboard_colors)


user_inputs = []
counter = 0

while counter < 4:

    color = input(f"Enter skateboard color {counter + 1}: ")
    

    user_inputs.append(color)
    

    counter += 1


print("\nYour four skateboard colors are:")
print(user_inputs)


with open("ramps.json", "r", encoding="utf-8") as file:
  ramps_dict = json.load(file)

  for key, value in ramps_dict.items():
    print(f"{key}'s favorite ramp is {value}")