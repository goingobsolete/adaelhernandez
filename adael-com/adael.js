let sliderBrushSizeX;
let sliderBrushSizeY;

let mfont =  Helvetica;

let inputBox;
let sliderTSize;


//Color Slider Variables
let sliderR;
let sliderG;
let sliderB;


let sliderRPosX = 1;
let sliderRPosY = 1;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    //create sliderR GUI
    sliderR = createSlider(0, 255);
    sliderR.position(sliderRPosX,sliderRPosY);

    //create sliderG GUI
    sliderG = createSlider(0,255);
    sliderG.position(sliderRPosX,sliderRPosY*2.5);
    
    //create sliderB GUI
    sliderB = createSlider(0,255);
    sliderB.position((sliderRPosX,sliderRPosY*2.5));

    

    sliderBrushSizeX = createSlider(0,100);
    sliderBrushSizeX.position(sliderRPosX,sliderRPosY*3.5);

    sliderBrushSizeY = createSlider(0,100);
    sliderBrushSizeY.position(sliderRPosX,sliderRPosY*4.5);

    //Text input box
    inputBox = createInput('Adael Hernandez');
    inputBox.position(sliderR.width+10,sliderRPosY);
    inputBox.attribute('placeholder', 'Enter Text Here');

    //Text size slider
    sliderTSize = createSlider(10,100);
    sliderTSize.position(sliderR.width+10,sliderRPosY*1.5);

}

function draw() {
    background(0);
    //create slider value variables
    let valR = sliderR.value();
    let valG = sliderG.value();
    let valB = sliderB.value();
    let brushWidth = slider.sliderBrushSizeX.value();
    let brushHeight = slider.sliderBrushSizeY.value();
    let userText = inputBox.value();
    let mTextSize = sliderTSize.value();


    //Text 
    push();
    text(mTextSize);
    textFont(mFont);
    textAlign(CENTER,CENTER);
    stroke(0);
    strokeWeight(3);
    fill(255);
    text(userText, width/2, height/2);
    pop();

    if(mouseIsPressed) {
        ellipse(mouseX,mouseY,brushWidth,brushHeight);
            if(frameCount > 1) {
                push();
                fill(valR, valG, valB);
                noStroke();
    
            }
    }



}