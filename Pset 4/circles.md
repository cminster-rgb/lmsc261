Pointallism

```
for(let i = 0; i < 200; i++){
    let xPos = Math.random() * w;
    let yPos = Math.random() * h;

    ctx.beginPath();
    ctx.arc(
        xPos, // x-position coordinate
        yPos, // y-position coordinate
        20, // radius of circle
        0, // starting angle
        Math.PI * 2, // ending angle
        false // clockwise or not 
    );
    ctx.fillStyle = "blue"; // color of circle
    ctx.fill(); // render the circle
}
```