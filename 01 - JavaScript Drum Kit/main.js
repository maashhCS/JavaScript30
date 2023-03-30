'use strict';
function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function playSound(e){
const audio = document.querySelector(`audio[data-key="${e.key}"]`);
const key = document.querySelector(`.key[data-key="${e.key}"]`)
if(!audio) return; //stop the function from running if there is no audio
audio.volume = 0.1;
audio.currentTime = 0; //rewind to the start
audio.play();
key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);