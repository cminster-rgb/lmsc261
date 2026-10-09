 function pickRandomActivity(){
    const dailyActivities = [
	"Clean Solar Panel",
	"Video Chat with Houston",
	"Hydrate Space Food",
	"Take Earth Picture",
	"Learn Russian"
]
    const randomIndex = Math.floor(Math.random() * dailyActivities.length);
    return dailyActivities[randomIndex];

     return answers[randomIndex];
    
}
function showRandomAnswer() {
            const result = pickRandomActivity();
            document.getElementById("output").innerText = result;
        }

        print("Todays activity is: " + pickRandomActivity());