// play audio when key hit
function playSound(e)
{
    // find corresponding audio file for given key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // if no audio file, return
    if (!audio) return;
    // select the given key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // mark the key as playing
    key.classList.add('playing');
    // rewind and play the audio
    audio.currentTime = 0;
    audio.play();
    // debugging purposes
    console.log(audio);
}
// return keys to normal state after played
function removeTransition(e)
{
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key')); // array of nodes with key class
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) // for each node
window.addEventListener("keydown", playSound)