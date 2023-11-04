function setup() {
    createCanvas(512,512);
    background(255);
}

var x0  =  -1;
var y0  =  -1;
var x1  =  -1;
var y1  =  -1;

function mousePressed() {
    x0  =  mouseX;
    y0  =  mouseY;
}

function mouseDragged() {
    x1  =  mouseX;
    y1  =  mouseY;
    background(255);
    noStroke();
    fill('red');
    ellipse(x0  -  3,  y0  -  3,  6);
    fill('green');
    ellipse(x1  -  3,  y1  -  3,  6);
}

function mouseReleased() {
    background(255);
    loadPixels();
    draw_line();
    updatePixels();
}

function set_pixel(x,  y,  c) {
    idx  =  (y  *  512  +  x)  *  4;
    pixels[idx]  =  c;
    pixels[idx  +  1]  =  c;
    pixels[idx  +  2]  =  c;
    pixels[idx  +  3]  =  255;
}

function draw_line() {
    dx  =  x1  -  x0;
    dy  =  y1  -  y0;

    dp  =  2  *  dy  -  dx;
    deq  =  2  *  dy;
    dinc  =  2  *  dy  -  2  *  dx;

    d  =  dp;
    y  =  y0;

    for (x  =  x0;  x  <=  x1;  x++) {
        if (d  <  0) {
            d  +=  deq;
        } else {
            d  +=  dinc;
            y++;
        }
        set_pixel(x,  y,  0);
    }
}
