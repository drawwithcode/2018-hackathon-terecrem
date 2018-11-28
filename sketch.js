var myImage;
var mySong;
var amp;
var nomi = ["Chandler Bing", "Rachel Green", "Ross Geller", "Monica Geller", "Joey Tribbiani", "Phoebe Buffay"]
var index = 0
var colorList = ['#48ace9', '#ea3931', '#f1c446']
var volhistory = []


function preload() {
  myImage = loadImage('assets/fr.jpg')
  mySong = loadSound('assets/friends.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  amp = new p5.Amplitude();
  amp.setInput(mySong)
}


function draw() {
  background('black');

  var volume = amp.getLevel();
  console.log(volume)


  if (mouseX > height / 2) {

    stroke('#f1c446')
    rectMode(CENTER)
        noFill()
        rect(360, 120, volume * 7000, volume * 7000);

        stroke('#f1c446')
        rectMode(CENTER)
            noFill()
            rect(960, 50, volume * 7000, volume * 7000);

            stroke('#f1c446')
            rectMode(CENTER)
                noFill()
                rect(1050, 600, volume * 7000, volume * 7000);

                stroke('#f1c446')
                rectMode(CENTER)
                    noFill()
                    rect(115, 550, volume * 7000, volume * 7000);

    image(myImage, 400, 150, 700, 500);

    noStroke()
    fill('#ea3931')
    textSize(32)
    textStyle('bold')
    textFont('Poppins')
    text(nomi[index], 605, 710)

    if (mySong.isPlaying() == false) {
      mySong.play();
    }
    fill(random(colorList))
    ellipse(130, 200, volume * 600, volume * 600);

    fill('#48ace9')
    ellipse(300, 400, volume * 700, volume * 700);

    fill(random(colorList))
    ellipse(1200, 300, volume * 500, volume * 500);

    fill(random(colorList))
    ellipse(1000, 70, volume * 700, volume * 700);

    fill('#48ace9')
    ellipse(900, 100, volume * 400, volume * 400);

    fill(random(colorList))
    ellipse(1400, 300, volume * 700, volume * 700);

    fill('#ea3931')
    ellipse(1250, 200, volume * 600, volume * 600);

    fill('#f1c446')
    ellipse(700, 80, volume * 700, volume * 700);

    fill(random(colorList))
    ellipse(250, 300, volume * 600, volume * 600);

    fill('#f1c446')
    ellipse(700, 80, volume * 700, volume * 700);

    fill(random(colorList))
    ellipse(430, 60, volume * 800, volume * 800);





    ///rettangolo
    stroke('#f1c446')
    noFill()
    rect(1145, 70, 190, 40);
    //testo
    noStroke()
    fill('#f1c446')
    textSize(11)
    textStyle('bold')
    textFont('Poppins')
    text('click to discover the characters', 1059, 75)

  } else {

    mySong.pause()
    //rettangolo
    stroke('#f1c446')
    noFill()
      rectMode(CENTER)
    rect(1140, 420, random(170,167) ,random(40,37));
    //testo
    noStroke()
    fill('#f1c446')
    textSize(14)
    textStyle('bold')
    textFont('Poppins')
    text('Go here to begin', random(1080,1077),random(430,427))
  }
// linea volume

  volhistory.push(volume);
  stroke('#f1c446');
  noFill();
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height, 0)
    vertex(i, y);
  }
  endShape();

  if (volhistory.length > width) {
    volhistory.splice(0, 1)
  }


}
// click per i personaggi
function mousePressed() {
  index = index + 1;

  if (index == 6) {
    index = 0;
  }

}
