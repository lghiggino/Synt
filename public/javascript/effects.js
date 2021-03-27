//distortion
const distortionControl = document.querySelector("#distortion-effect");
const distortion = new Tone.Distortion(0).toDestination();

distortionControl.addEventListener("change", (e) => {
    let distortionValue = Number(document.querySelector("#distortion-effect").value)
    // console.log(distortionValue);
    distortion["_distortion"] = distortionValue
    synth.connect(distortion);
})

//oscillator
const osc = new Tone.Oscillator().toDestination();
// start at "C4"
osc.frequency.value = "C4";
// ramp to "C2" over 2 seconds
osc.frequency.rampTo("C2", 2);
// start the oscillator for 2 seconds
//osc.start().stop("+3");