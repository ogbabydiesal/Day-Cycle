//time of day
let today = new Date();
let time = today.getHours()
let cycleSeed = 0;
let cycle = 0;
//initiate some things
var isPlaying = false;
let flag = false;
let flagTwo = false;
let ranSample = 0;
let counter = 0;
let playHead = 0;

const vol = new Tone.Volume(-20).toDestination();

const reverb = new Tone.Reverb({decay: 2, wet: .4}).connect(vol);
const fDel = new Tone.FeedbackDelay(".143", 0.6).connect(reverb);

mainPlayer = new Tone.Player().toDestination();
let voiceCount = 12;
let polyCounter = 0;
let players = [];
for (let x = 0; x < voiceCount; x++) {
  players.push(new Tone.Player().connect(fDel));
}

function polyPlayer(numSamples) {
  polyCounter = (polyCounter + 1) % voiceCount;
  players[polyCounter].buffer = samples.get(getRandomInt(numSamples));
  players[polyCounter].start();
}
const silentPlayer = new Tone.Player("./sounds/silence.m4a");

const samples = new Tone.ToneAudioBuffers({
  0 : "sounds/env/1.m4a",
  1 : "sounds/gtr/beginning/1.m4a",
	2 : "sounds/gtr/beginning/2.m4a",
	3 : "sounds/gtr/beginning/3.m4a",
	4 : "sounds/gtr/beginning/4.m4a",
  5 : "sounds/gtr/beginning/5.m4a",
  6 : "sounds/gtr/beginning/6.m4a",
  7 : "sounds/gtr/beginning/7.m4a",
	8 : "sounds/gtr/beginning/8.m4a",
	9 : "sounds/gtr/beginning/9.m4a",
	10 : "sounds/gtr/beginning/10.m4a",
  11 : "sounds/gtr/beginning/11.m4a",
  12 : "sounds/gtr/beginning/12.m4a",
  13 : "sounds/gtr/beginning/13.m4a",
	14 : "sounds/gtr/beginning/14.m4a",
	15 : "sounds/gtr/beginning/15.m4a",
	16 : "sounds/gtr/beginning/16.m4a",
  17 : "sounds/gtr/beginning/17.m4a",
  18 : "sounds/gtr/beginning/18.m4a",
  19 : "sounds/gtr/beginning/19.m4a",
	20 : "sounds/gtr/beginning/20.m4a",
	21 : "sounds/gtr/beginning/21.m4a",
	22 : "sounds/gtr/beginning/22.m4a",
  23 : "sounds/gtr/beginning/23.m4a",
  24 : "sounds/gtr/beginning/24.m4a",
  25 : "sounds/gtr/beginning/25.m4a",
	26 : "sounds/gtr/middle/1.m4a",
	27 : "sounds/gtr/middle/2.m4a",
	28 : "sounds/gtr/middle/3.m4a",
  29 : "sounds/gtr/middle/4.m4a",
  30 : "sounds/gtr/middle/5.m4a",
  31 : "sounds/gtr/middle/6.m4a",
	32 : "sounds/gtr/middle/7.m4a",
	33 : "sounds/gtr/middle/8.m4a",
	34 : "sounds/gtr/middle/9.m4a",
  35 : "sounds/gtr/middle/10.m4a",
  36 : "sounds/gtr/middle/11.m4a",
  37 : "sounds/gtr/middle/12.m4a",
	38 : "sounds/gtr/middle/13.m4a",
	39 : "sounds/gtr/middle/14.m4a",
	40 : "sounds/gtr/middle/15.m4a",
  41 : "sounds/gtr/middle/16.m4a",
  42 : "sounds/gtr/middle/17.m4a",
  43 : "sounds/gtr/middle/18.m4a",
	44 : "sounds/gtr/middle/19.m4a",
	45 : "sounds/gtr/middle/20.m4a",
	46 : "sounds/gtr/middle/21.m4a",
  47 : "sounds/gtr/middle/22.m4a",
  48 : "sounds/gtr/middle/23.m4a",
  49 : "sounds/gtr/middle/24.m4a",
	50 : "sounds/gtr/middle/25.m4a",
	51 : "sounds/gtr/middle/26.m4a",
	52 : "sounds/gtr/middle/27.m4a",
  53 : "sounds/gtr/middle/28.m4a",
  54 : "sounds/gtr/middle/29.m4a",
  55 : "sounds/gtr/middle/30.m4a",
	56 : "sounds/gtr/middle/31.m4a",
	57 : "sounds/gtr/middle/32.m4a",
	58 : "sounds/gtr/middle/33.m4a",
  59 : "sounds/gtr/middle/34.m4a",
  60 : "sounds/gtr/end/1.m4a",
  61 : "sounds/gtr/end/2.m4a",
  62 : "sounds/gtr/end/3.m4a",
  63 : "sounds/gtr/end/4.m4a",
  64 : "sounds/gtr/end/5.m4a",
  65 : "sounds/gtr/end/6.m4a",
  66 : "sounds/gtr/end/7.m4a",
  67 : "sounds/gtr/end/8.m4a",
  68 : "sounds/gtr/end/9.m4a",
  69 : "sounds/gtr/end/10.m4a",
  70 : "sounds/gtr/end/11.m4a",
  71 : "sounds/gtr/end/12.m4a",
  72 : "sounds/gtr/end/13.m4a",
  73 : "sounds/gtr/end/14.m4a",
  74 : "sounds/gtr/end/15.m4a",
  75 : "sounds/gtr/end/16.m4a",
  76 : "sounds/gtr/end/17.m4a",
  77 : "sounds/gtr/end/18.m4a",
  78 : "sounds/gtr/end/19.m4a",
  79 : "sounds/gtr/end/20.m4a",
  80 : "sounds/gtr/end/21.m4a",
  81 : "sounds/gtr/end/22.m4a",
  82 : "sounds/gtr/end/23.m4a",
  83 : "sounds/gtr/end/24.m4a",
  84 : "sounds/gtr/end/25.m4a",
}, () => {
  document.querySelector(".button").innerHTML = "play";
  silentPlayer.connect(reverb);
  silentPlayer.loop = true;
  silentPlayer.start();
  document.querySelector('.daycycle').innerHTML = '<p>afternoon</p>';
  //8pm until midnight
  if (time < 24 && time > 19) {
    document.querySelector('.daycycle').innerHTML = '<p>evening</p>';
    cycleSeed = 2;
  }
  //11am until 7pm
  if (time > 11 && time <= 19) {
    document.querySelector('.daycycle').innerHTML = '<p>afternoon</p>';
    cycleSeed = 1;
  }
  //
  if (time <= 11) {
    document.querySelector('.daycycle').innerHTML = '<p>morning</p>';
    cycleSeed = 0;
  }

});

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

let x = 0;
let isDrawing = false;
function increment(evt) {
  let canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  canvas.addEventListener('mousedown', e => {
    x = e.offsetX;
    counter = x;
    isDrawing = true;
  });
  canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
      x = e.offsetX;
      counter = x;
    }
    canvas.addEventListener('mouseup', e => {
      isDrawing = false;
    });
  });
  ctx.fillStyle = "black";
  if(isPlaying) {
    counter = counter + .14;
    if (window.innerWidth > 600) {
      canvas.width = 290;
      canvas.height = 28;
    }
    else {
      canvas.width = 100;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(counter, 0, 1, canvas.height)
    if (counter > 25 && Math.floor(counter) % 1 == 0 && cycle == 0) {
      if (Math.random() > .9) {
        try {
            polyPlayer(25)
        if (Math.random() > .85) {
          try{
            polyPlayer(25)
          }
          catch(error){}
        }
      }
        catch(error){}
      }
    }
    if (counter > 25 && Math.floor(counter) % 1 == 0 && cycle == 1) {
      if (Math.random() > .9) {
        try{
          player.buffer = samples.get(getRandomInt(34) + 25);
          player.start();
          if(Math.random() > .85) {
            try {
              player2.buffer = samples.get(getRandomInt(34) + 25);
              player2.start(); 
            }
            catch(error){}
          }
        }
        catch(error){}
      }
    }
    if (counter > 25 && Math.floor(counter) % 1 == 0 && cycle == 2) {
      if (Math.random() > .8) {
        try{
          player.buffer = samples.get(getRandomInt(25)+59);
          if (Math.random() > .85) {
            try {player2.buffer = samples.get(getRandomInt(25)+59);}
            catch(error){}
          }
          player.start();
          player2.start();
        }
        catch(error){}
      }
    }
    if (counter >= 290) {
      Tone.Transport.stop();
      document.querySelector(".button").innerHTML = "play";
      isPlaying = false;
    }
    if (Math.floor(counter) < 290) {
      cycle = (cycleSeed + 2) % 3;

    }
    if (Math.floor(counter) < 180) {
      cycle = (cycleSeed + 1) % 3;

    }
    if (Math.floor(counter) < 90) {
      cycle = (cycleSeed + 0) % 3;
    }
    
  }
  setTimeout(increment, 100);
}

function init() {
  if (!isPlaying) {
    if (counter >= 290) {
      counter = 0;
    }
    isPlaying = true;
    document.querySelector(".button").innerHTML = "pause";
    Tone.start();
    Tone.Transport.start();
    const timer = setTimeout(increment, 100);
    mainPlayer.buffer = samples.get("0");
    
    mainPlayer.loop = true;
    mainPlayer.sync().start(0);
  }
  else {
    Tone.Transport.pause();
    document.querySelector(".button").innerHTML = "play";
    isPlaying = false;
  }
}