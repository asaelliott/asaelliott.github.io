function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255)
  textSize(15)
  fill(200)
  text("Space = Clear",5,15)
  text("Up Arrow = Larger Brush Size",5,30)
  text("Down Arrow = Smaller Brush Size",5,45)
  text("0 = Eraser",5,60)
  text("1 = Black",5,75)
  text("2 = Red",5,90)
  text("3 = Orange",5,105)
  text("4 = Yellow",5,120)
  text("5 = Green",5,135)
  text("6 = Blue",5,150)
  text("7 = Purple",5,165)
  text("8 = Turquoise",5,180)
  text("9 = Pink",5,195)
}
let color = {
  r : 0,
  g : 0,
  b : 0,
  a : 100
};

//width
let w = 25
//height
let h = 25
function draw() {
  if (mouseIsPressed) {
    noStroke();
    fill(color.r, color.g, color.b, color.a);
    ellipse(mouseX, mouseY, w, h);
  }
}
//erases screen
function keyPressed() {
  if (keyCode === 32) {
    background(255, 255, 255)
      textSize(15)
    fill(200)
      text("Space = Clear",5,15)
      text("Up Arrow = Larger Brush Size",5,30)
      text("Down Arrow = Smaller Brush Size",5,45)
      text("0 = Eraser",5,60)
      text("1 = Black",5,75)
      text("2 = Red",5,90)
      text("3 = Orange",5,105)
      text("4 = Yellow",5,120)
      text("5 = Green",5,135)
      text("6 = Blue",5,150)
      text("7 = Purple",5,165)
      text("8 = Turquoise",5,180)
      text("9 = Pink",5,195)
  }
  //black
  else if (keyCode === 49){
    color.r = 0
    color.g = 0
    color.b = 0
    color.a = 100
    console.log("Black")
  }
  //red
  else if (keyCode === 50){
    color.r = 255
    color.g = 0
    color.b = 0
    color.a = 100
    console.log("Red")
  }
  //orange
  else if (keyCode === 51){
    color.r = 255
    color.g = 140
    color.b = 01
    color.a = 100
    console.log("Orange")
  }
  //yellow
  else if (keyCode === 52){
    color.g = 245
    color.b = 25
    color.a = 100
    console.log("Yellow")
  }
  //green
  else if (keyCode === 53){
    color.r = 14
    color.g = 235
    color.b = 14
    color.a = 100
    console.log("Green")
  }
  //blue
  else if (keyCode === 54){
    color.r = 07
    color.g = 0
    color.b = 255
    color.a = 100
    console.log("Blue")
  }
  //purple
  else if (keyCode === 55){
    color.r = 155
    color.g = 0
    color.b = 255
    color.a = 100
    console.log("Purple")
  }
  //turquoise
  else if (keyCode === 56){
    color.r = 25
    color.g = 245
    color.b = 245
    color.a = 100
    console.log("Turquoise")
  }
  //pink
  else if (keyCode === 57){
    color.r = 255
    color.g = 0
    color.b = 255
    color.a = 100
    console.log("Pink")
  }
  //eraser
  else if (keyCode === 48){
    color.r = 255
    color.g = 255
    color.b = 255
    color.a = 1000
    console.log("Eraser")
  }
  //makes pen bigger
  else if (keyCode === 38){
    w += 5
    h += 5
    console.log(w)
  }
  //makes pen smaller
  else if (keyCode === 40){
    w -= 5
    h -= 5
    console.log(w)
    if (w <= 5){
      w = 5
      h = 5
      console.log(w)
    }
  }
}
