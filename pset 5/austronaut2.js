function checkLifeSpan(hoursUsed) {

    if (typeof hoursUsed !== 'number' || isNaN(hoursUsed)) {
        return "please enter valid number";
    }

    const maxLifeSpan = 1000;


    if (hoursUsed < 800) {
        return "suit in working condition";
    } else if (hoursUsed >= 800 && hoursUsed < maxLifeSpan) {
        return "suit needs replacement soon";
    } else {
        return "suit no longer safe to use";
    }
}