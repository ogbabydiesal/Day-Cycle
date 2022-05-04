/*
platform music
*/

//initiate some things
var isPlaying = false;
let threshold = .3;
let dryMix, wetMix = .33;
const dry = new Tone.Multiply(.22).toDestination();
const wet = new Tone.Multiply(.22).toDestination();

const reverbSmall = new Tone.Reverb({decay: .3, wet: .2}).connect(dry);
const reverbBig = new Tone.Reverb({decay: 4, wet: .55}).connect(wet);
//create a random number generator and a random number for a timer in seconds
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const lines = ["<p style='color:red;'>usermane420:</p> sick track bb",
"<p style='color:blue;'>spookyrobot666:</p> grow your followers by 10k",
"<p style='color:red;'>ogbabydiesal:</p> 🦾🥰👼💙💙💙😫",
"<p style='color:blue;'>wyldfr34k:</p> yooooo, what software did u use?",
"<p style='color:green;'>platform_bot88:</p> save big with pro unlimited",
"<p style='color:green;'>platform_bot69:</p> join sound club for exclusive access to the hottest dj tips and tricks",
"<p style='color:red;'>brainstorm:</p> 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"
];

function randomText(){
  if (isPlaying == true){
    let timer = getRandomInt(2000);
    setTimeout(function(){
      randomText();
      let ranText = getRandomInt(7);
      document.getElementById("console").innerHTML = lines[ranText];
    }, timer);
  }
}

//create a sound file player and connect it to our speaker output
const player = new Tone.Player("./sounds/kick.mp3");
const player2 = new Tone.Player("./sounds/hihat.mp3");
const player3 = new Tone.Player("./sounds/clap.mp3");
const player4 = new Tone.Player("./sounds/shaker.wav");
const player5 = new Tone.Player("./sounds/cowbell.mp3");
const player6 = new Tone.Player("./sounds/silence.wav");

function drumPattern() {
  if (isPlaying == false) {
    isPlaying = true;
    Tone.loaded().then(() => {
    player.fan(reverbSmall, reverbBig);
    player2.fan(reverbSmall, reverbBig);
    player3.fan(reverbSmall, reverbBig);
    player4.fan(reverbSmall, reverbBig);
    player5.fan(reverbSmall, reverbBig);});
    player6.fan(reverbSmall, reverbBig);
    player6.loop = true;
    player6.start();
    Tone.Transport.scheduleRepeat((time) => {
    	// use the callback time to schedule events
      if(Math.random() < .4 * threshold) {
        try{
          player.start();
        }
        catch(error){};
      }

    }, "4n");
    Tone.Transport.scheduleRepeat((time) => {
    	// use the callback time to schedule events
      if(Math.random() < threshold) {
        try{player2.start();}
        catch(error){};
      }

    }, "8n");
    Tone.Transport.scheduleRepeat((time) => {
    	// use the callback time to schedule events
      if(Math.random() < .2 * threshold) {
        try {
          player3.start();

        }
        catch(error){};
      }

    }, "16n");
    Tone.Transport.scheduleRepeat((time) => {
    	// use the callback time to schedule events
      if(Math.random() < .5 * threshold) {
        try {
          player4.start();
        }
        catch(error){};
      }

    }, "16n");
    Tone.Transport.scheduleRepeat((time) => {
    	// use the callback time to schedule events
      if(Math.random() < .2 * threshold) {
        try {
          player5.start();
        }
        catch(error){};
      }

    }, "16n");
    // transport must be started before it starts invoking events
    Tone.Transport.start();
    randomText();
    document.querySelector('#button').innerHTML = 'log out';
  }
  else {
    isPlaying = false;
    Tone.Transport.stop();
    document.querySelector('#button').innerHTML = 'log on';
  }

}

function mousemove(event){
    console.log(80 + (20 * (event.clientX/screen.width)));
    Tone.Transport.bpm.value = 60 + (100 * (event.clientX/screen.width));
    threshold = 1 - (event.clientY/screen.height);
}

function calcMix(){
  wetMix = window.innerWidth / screen.width;
  dryMix = 1 - (window.innerWidth / screen.width);
  dry.rampTo(dryMix, 1);
  wet.rampto(wetMix + 1, 1)

}

function reportWindowSize(){
  calcMix();
}

window.addEventListener('mousemove', mousemove);
window.onresize = reportWindowSize;
