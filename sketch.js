var flow = [];
var wordSize = 30;
var numberofflow = 80;


function setup () {
  createCanvas(800,600); 
  for (let i = 0; i < numberofflow; i++){
    flow[i] = new Flow();
  }
}


function draw() {
  background(0);

  for(let i = 0; i < flow.length; i++) {
   flow[i].render();
   flow[i].replay();
 }


}