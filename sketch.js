var nome;
var y=50;
var capture;
var abbo;
var colorr = 'white'
var slider;


function setup() {
canvas = createCanvas(windowWidth,90)

// WEBCAM
  capture = createCapture(VIDEO)
  capture.hide()

//SPEECH TO TEXT
  speechRec = new p5.SpeechRec('IT', gotSpeech);

  createP("Problemi di AUTOCERTIFICAZIONE? Risolviamo subito! Come ti chiami?")
  rec = createButton('REC')
  rec.style('background', 'red');
  rec.position(1210, 110)
  rec.mousePressed(startrec)
  }

//INIZIA REGISTRAZIONE
function startrec(){
  let continuous = false;
  // If you want to try partial recognition (faster, less accurate)
  let interim = false;
  speechRec.start(continuous, interim);
  colorr='red'
  createP('(sto registrando...)')

}

  function gotSpeech() {

    console.log(speechRec);
    if (speechRec.resultValue) {
    nome = speechRec.resultString
    y = y+100
    saluto =  createP( 'Ben fatto ' + nome + '!',50,y);
    creabottone()
    colorr='white'
    }
    }

function creabottone(){
bottone = createButton('CREA LA TUA AUTOCERTIFICAZIONE')
bottone.position((windowWidth/2)-110,300)

bottone.mousePressed(Nuovapagina)
}


function Nuovapagina(){
  window.open('modulo.html?nome='+nome, '_self')
}

function draw(){

    fill(colorr)

    strokeWeight(15)
    rect(0,0,width,90)
    image(capture,mouseX-20,20,50,50)
    textAlign(CENTER)

}
