const playBtn = document.getElementById('play');
const resetBtn = document.getElementById('reset');
const stepCount = document.getElementById('step-count');
const instruments = document.body.querySelectorAll('#app-wrapper > section');
const tempo = document.getElementById('tempo');

const drumKit = new Tone.Sampler({
  urls: {
    e0: 'kick.wav',
    e1: 'snare.wav',
    e2: 'hat.wav',
    e3: 'claps.wav',
    e4: 'tom.wav',
    e5: 'shakers.wav',
    e6: 'crash2.wav',
    e7: 'fx2.wav'
  },
  baseUrl: 'https://assets.codepen.io/1290466/',
}).toDestination();

drumKit.volume.value = -12;
const stepNumber = 32;
const gain = new Tone.Gain(3);
gain.toDestination();

// const tracks = ['Kick', 'Snare', 'Hat', 'Claps', 'Snare 2', 'Claps 2', 'Fx2'];
const notes = ['e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7'];
let index = 0;

Tone.Transport.bpm.value = this.value || 90;
Tone.Transport.scheduleRepeat(repeat, '16n');
  
tempo.onchange = function() {
  Tone.Transport.bpm.value = this.value || 90;
};

playBtn.onclick = () => {
  if (playBtn.textContent === "Play") {
    Tone.Transport.start();
    Tone.context.resume();
    playBtn.textContent = 'Pause';
  } else {
    Tone.Transport.stop();
    playBtn.textContent = 'Play';
  };
};

resetBtn.onclick = () => {
  Tone.Transport.stop();
  playBtn.textContent = 'Play';

  for (let i = 0; i < instruments.length; i++) {
    instrument = instruments[i];
    for (let y = 0; y < stepNumber; y++) {
      checkbox = instrument.querySelector(`input:nth-child(${y + 1})`);
      checkbox.checked = false;
      checkbox.className = '';
    }
  }
  
  const measure = stepNumber / 4;
  index = 0;
  stepCount.innerHTML = `Measure: 0 / ${measure}`;
};

function repeat(time) {
  let step = index % stepNumber;
  const measure = stepNumber / 4;
  stepCount.innerHTML = `Measure: ${Math.ceil((step + 1) / 4)} / ${measure}`;
  let note;

  for (let i = 0; i < instruments.length; i++) {
    note = notes[i];
    instrument = instruments[i];
    checkbox = instrument.querySelector(`input:nth-child(${step + 1})`);
    checkbox.classList.toggle('active');
 
    if (checkbox.checked) drumKit.triggerAttackRelease(note, '2n', time);
  }

  index++;
}

