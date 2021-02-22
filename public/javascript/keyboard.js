const synth = new Tone.PolySynth(Tone.Synth).toDestination();
synth.volume.value = 0;
const keys = document.querySelectorAll(".key")

keys.forEach(key => {
    key.addEventListener("click", (e)=> {
        synth.triggerAttackRelease(e.target.id, "4n");
    })
})

const keyboardMap = {
    "KeyQ": "c3",
    "Digit2": "c#3",
    "KeyW": "d3",
    "Digit3": "d#3",
    "KeyE": "e3",
    "KeyR": "f3",
    "Digit5": "f#3",
    "KeyT": "g3",
    "Digit6": "g#3",
    "KeyY": "a3",
    "Digit7": "a#3",
    "KeyU": "b3",
    "KeyZ": "c4",
    "KeyS": "c#4",
    "KeyX": "d4", 
    "KeyD":"d#4",
    "KeyC":"e4",
    "KeyV":"f4",
    "KeyG":"f#4",
    "KeyB":"g4",
    "KeyH":"g#4",
    "KeyN":"a4",
    "KeyJ":"a#4",
    "KeyM":"b4",
}

window.addEventListener("keydown", (e) => {
    if (!keyboardMap[e.code]){
        return
    }else{
        synth.triggerAttackRelease(keyboardMap[e.code], "4n")
        //on key press classlist toggle active
        const key = document.getElementById(`${keyboardMap[e.code]}`)
        key.classList.add("playing")
    }
})

keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition)
})

function removeTransition(e){
    if (e.propertyName !== "box-shadow") return
    this.classList.remove("playing");
}



// const now = Tone.now()
// // trigger the attack immediately
// synth.triggerAttackRelease("C4", "8n", now)
// synth.triggerAttackRelease("E4", "8n", now + 0.5)
// synth.triggerAttackRelease("G4", "8n", now + 1)
