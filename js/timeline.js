
//initiate some things
var isPlaying = false;
let flag = false;
let flagTwo = false;
let ranSample = 0;
let counter = 0; //about state

const reverb = new Tone.Reverb({decay: 6, wet: .7}).toDestination();
const fDel = new Tone.FeedbackDelay(".143", 0.6).connect(reverb);

mainPlayer = new Tone.Player().toDestination();
player = new Tone.Player().connect(fDel);
player2 = new Tone.Player().connect(fDel);
player3 = new Tone.Player().connect(fDel);

const silentPlayer = new Tone.Player("./sounds/silence.wav");

const samples = new Tone.ToneAudioBuffers({
  0 : "sounds/env/1.m4a",
  1 : "sounds/gtr/1.m4a",
	2 : "sounds/gtr/2.m4a",
	3 : "sounds/gtr/3.m4a",
	4 : "sounds/gtr/4.m4a",
  5 : "sounds/gtr/5.m4a",
  6 : "sounds/gtr/6.m4a",
  7 : "sounds/gtr/7.m4a",
	8 : "sounds/gtr/8.m4a",
	9 : "sounds/gtr/9.m4a",
	10 : "sounds/gtr/10.m4a",
  11 : "sounds/gtr/12.m4a",
  12 : "sounds/gtr/13.m4a",
  13 : "sounds/gtr/14.m4a",
	14 : "sounds/gtr/15.m4a",
	15 : "sounds/gtr/16.m4a",
	16 : "sounds/gtr/17.m4a",
  17 : "sounds/gtr/18.m4a",
  18 : "sounds/gtr/19.m4a",
  19 : "sounds/gtr/20.m4a",
	20 : "sounds/gtr/21.m4a",
	21 : "sounds/gtr/22.m4a",
	22 : "sounds/gtr/23.m4a",
  23 : "sounds/gtr/24.m4a",
  24 : "sounds/gtr/25.m4a",
  25 : "sounds/gtr/26.m4a",
	26 : "sounds/gtr/27.m4a",
	27 : "sounds/gtr/28.m4a",
	28 : "sounds/gtr/29.m4a",
  29 : "sounds/gtr/30.m4a",
  30 : "sounds/gtr/31.m4a",
  31 : "sounds/gtr/32.m4a",
	32 : "sounds/gtr/33.m4a",
	33 : "sounds/gtr/34.m4a",
	34 : "sounds/gtr/35.m4a",
  35 : "sounds/gtr/36.m4a",
  36 : "sounds/gtr/37.m4a",
  37 : "sounds/gtr/38.m4a",
	38 : "sounds/gtr/39.m4a",
	39 : "sounds/gtr/40.m4a",
	40 : "sounds/gtr/41.m4a",
  41 : "sounds/gtr/42.m4a",
  42 : "sounds/gtr/43.m4a",
  43 : "sounds/gtr/44.m4a",
	44 : "sounds/gtr/12.m4a",
	45 : "sounds/gtr/45.m4a",
	46 : "sounds/gtr/46.m4a",
  47 : "sounds/gtr/47.m4a",
  48 : "sounds/gtr/48.m4a",
  49 : "sounds/gtr/49.m4a",
	50 : "sounds/gtr/50.m4a",
	51 : "sounds/gtr/51.m4a",
	52 : "sounds/gtr/52.m4a",
  53 : "sounds/gtr/53.m4a",
  54 : "sounds/gtr/54.m4a",
  55 : "sounds/gtr/55.m4a",
	56 : "sounds/gtr/56.m4a",
	57 : "sounds/gtr/57.m4a",
	58 : "sounds/gtr/58.m4a",
  59 : "sounds/gtr/59.m4a",
  60 : "sounds/gtr/60.m4a",
  61 : "sounds/gtr/61.m4a",
  62 : "sounds/gtr/62.m4a",
  63 : "sounds/gtr/63.m4a",
  64 : "sounds/gtr/64.m4a",
  65 : "sounds/gtr/65.m4a",
  66 : "sounds/gtr/66.m4a",
  67 : "sounds/gtr/67.m4a",
  68 : "sounds/gtr/68.m4a",
  69 : "sounds/gtr/69.m4a",
  70 : "sounds/gtr/70.m4a",
  71 : "sounds/gtr/71.m4a",
  72 : "sounds/gtr/72.m4a",
  73 : "sounds/gtr/73.m4a",
  74 : "sounds/gtr/74.m4a",
  75 : "sounds/gtr/75.m4a",
  76 : "sounds/gtr/76.m4a",
  77 : "sounds/gtr/77.m4a",
  78 : "sounds/gtr/78.m4a",
  79 : "sounds/gtr/79.m4a",
  80 : "sounds/gtr/80.m4a",
  81 : "sounds/gtr/81.m4a",
  82 : "sounds/gtr/82.m4a",
  83 : "sounds/gtr/83.m4a",
  84 : "sounds/gtr/84.m4a",
  85 : "sounds/gtr/85.m4a",
  86 : "sounds/gtr/86.m4a",
  87 : "sounds/gtr/87.m4a",
  88 : "sounds/gtr/88.m4a",
  89 : "sounds/gtr/89.m4a",
  90 : "sounds/gtr/90.m4a",
  91 : "sounds/gtr/91.m4a",
  92 : "sounds/gtr/92.m4a",
  93 : "sounds/gtr/93.m4a",

}, () => {
	//const player = new Tone.Player().toDestination();
  document.querySelector(".button").innerHTML = "play";
  silentPlayer.connect(reverb);
  silentPlayer.loop = true;
  silentPlayer.start();
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function increment() {
  counter = counter + 1;
  console.log(counter);
  if (counter > 250 && counter % 2 == 0) {
    if (Math.random() > .9) {
      try{player.buffer = samples.get(getRandomInt(93));
      player2.buffer = samples.get(getRandomInt(93));
      player3.buffer = samples.get(getRandomInt(93));
      player.start();
      player2.start();
      player3.start();}
      catch(error){}
    }
  }
  if (counter > 250 && counter % 1 == 0) {
    if (Math.random() > .95) {
      //console.log(Math.random());
      try{player.buffer = samples.get(getRandomInt(93));
      player2.buffer = samples.get(getRandomInt(93));
      player3.buffer = samples.get(getRandomInt(93));
      player.start();
      player2.start();
      player3.start();}
      catch(error){}
    }
  }
  setTimeout(increment, 100);
}

function init() {
  if (!isPlaying) {
    isPlaying = true;
    const timer = setTimeout(increment, 100);
    mainPlayer.buffer = samples.get("0");
    player.buffer = samples.get("2");
    player2.buffer = samples.get("5");
    player3.buffer = samples.get("1");
    mainPlayer.start();

  }
  if (isPlaying) {
    document.querySelector(".button").innerHTML = "play";
  }
}
