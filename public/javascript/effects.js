//distortion
const distortionControl = document.querySelector("#distortion-effect")
const distortion = new Tone.Distortion(0).toDestination();

distortionControl.addEventListener("change", (e) => {
    let distortionValue = Number(document.querySelector("#distortion-effect").value)
    console.log(distortionValue)
    distortion["_distortion"] = distortionValue
    synth.connect(distortion);
})

