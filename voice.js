export function speak(text) {
    const synth = window.speechSynthesis
    const utter = new SpeechSynthesisUtterance()
    utter.text = text
    if (synth.speaking){
      synth.cancel();
    }
    synth.speak(utter)
}
