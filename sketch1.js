const urlString = window.location.href;
const url = new URL(urlString);
let nameP = url.searchParams.get('nome');
const scuse = ['Comprare il lievito', 'Andare in b1', 'Portare fuori il gatto', 'Fare jogging', 'Rincorrere i piccioni', 'Andare a stampare', 'Calcetto tra amici'];
var scusatype;
var a;

function preload(){
  logo = loadImage("logo.png")
}

function setup(){

  c = createCanvas(windowWidth/2,windowHeight)
  c.position(0,0)
  imageMode(CENTER)
  rectMode(CENTER)
  background(230)
  fill(255)
  strokeWeight(10)
  rect(width/2,height/2, 400,600)

  textSize(22)
  fill(0)
  textAlign(CENTER)
  text("AUTOCERTIFICAZIONE di " + nameP, width/2,100 )


//WEBCAM
  capture = createCapture(VIDEO)
  capture.hide()

//BOTOTNE SCUSA
  scusa = createButton('DAMMI UNA SCUSA')
  scusa.position (windowWidth/2 + 20 , 250)
  scusa.mousePressed(scriviscusa)

//LOGO
  image(logo,width/2,620,40,40)
}

function draw(){

    image(capture,width/2,220, 200,200)
    if (keyIsDown(65) && mouseX>225 && mouseX<225+340 && mouseY> 435 && mouseY<435+140) {
    strokeWeight(5);
    stroke('blue');
    line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }


function scriviscusa(){
  let scusatype = random(scuse)
  if (a){
  scusatype=''
   }
   //SCRIVI SCUSA
   textSize(15)
   text('motivazione:', width/2,350)
   textFont('Impact')
   textSize(40)
   a = text(scusatype, width/2,400)

   //CREA ISTRUZIONI PER FIRMA
   istruz = createP("Firma nel box, tieni premuto 'A' per scrivere")
   istruz.position(windowWidth/2 +10 ,280)
   firmabutton = createButton("HO FIRMATO")
   firmabutton.position(windowWidth/2 + 20 ,350)
   firmabutton.mousePressed(creabottonestampa)

   fill(255)
   stroke(0)
   strokeWeight(1)
   rect(width/2,500, 350,150)
  }

  function creabottonestampa(){
     stampabutton = createButton("STAMPA")
    stampabutton.style('background', 'yellow');
     stampabutton.position(windowWidth/2 + 20 ,420)
     stampabutton.mousePressed(scaricafile)
  }

  function scaricafile(){
   saveCanvas(c, nameP + ' Autocertificazione' , 'jpg');
  }
