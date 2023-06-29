Webcam.set({
    width : 250,
    height : 250,
    image_format : 'png',
    png_quality : 90
});

 camera = document.getElementById("camera");

Webcam.attach( '#camera ');

function preload()
{

}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    Webcam.set({
        width : 250,
        height : 450,
        image_format : 'png',
        png_quality : 90
    });
    
    cam = document.getElementById("cam");
    
    Webcam.attach( '#cam');
}



function draw()
{
    circle(30, 30, 20);
    circle(270, 30, 20);
    circle(30, 270, 20);
    circle(270, 270, 20);
    rect(35, 20, 230, 20);
    rect(35, 260, 230, 20);
    rect(20, 35, 20, 230);
    rect(260, 35, 20, 230);
    ellipse(150, 107, 20, 20);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

cam = document.getElementById("cam");

Webcam.attach( '#cam');
