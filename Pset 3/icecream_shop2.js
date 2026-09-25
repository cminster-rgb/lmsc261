const coneSoldPerHour = 14;
for (let hour = 1; hour <= 12; hour ++){
    let conesSoldTotal = (coneSoldPerHour * hour)
    let conesleft= 168 - (conesSoldTotal)
    print(conesSoldTotal + "sold at hour" + hour);
    print(conesleft + "left")
}