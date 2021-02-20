const synth = new Tone.PolySynth(Tone.Synth).toDestination();
synth.volume.value = 0;
const keys = document.querySelectorAll(".key")

keys.forEach(key => {
    key.addEventListener("click", (e)=> {
        synth.triggerAttackRelease(e.target.id, "8n");
    })
})

const keyboardMap = {
    "KeyQ":"c3" ,
    "KeyW":"c#3",
    "KeyE":"d3" ,
    "KeyR":"d#3",
    "KeyT":"e3" ,
    "KeyY":"f3" ,
    "KeyU":"f#3",
    "KeyI":"g3" ,
    "KeyO":"g#3",
    "KeyP":"a3" ,
    "BracketLeft":"a#3",
    "BracketRight":"b3" ,
    "KeyA":"c4" ,
    "KeyS":"c#4",
    "KeyD":"d4" ,
    "KeyF":"d#4",
    "KeyG":"e4" ,
    "KeyH":"f4" ,
    "KeyJ":"f#4",
    "KeyK":"g4" ,
    "KeyL":"g#4",
    "Semicolon":"a4" ,
    "Quote":"a#4",
    "Backslash":"b4" ,
}

window.addEventListener("keydown", (e) => {
    synth.triggerAttackRelease(keyboardMap[e.code], "8n")
})


// const now = Tone.now()
// // trigger the attack immediately
// synth.triggerAttackRelease("C4", "8n", now)
// synth.triggerAttackRelease("E4", "8n", now + 0.5)
// synth.triggerAttackRelease("G4", "8n", now + 1)
