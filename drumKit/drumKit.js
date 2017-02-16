;(function() {
  const keySounds = {
    'a': 'clap',
    's': 'cowbell',
    'd': 'crash',
    'f': 'hihat',
    'g': 'kick',
    'h': 'openhat',
    'j': 'perc',
    'k': 'ride',
    'l': 'shaker',
    ';': 'snare',
  };
  const keys = document.getElementById('keys');

  function makeKeyActive(key) {
    const keyElement = document.getElementById(key);
    keys.classList.add('active');
    keyElement.classList.add('active');
  }

  function makeKeyInactive(e) {
    // `this` is the target dom element i.e key
    const keyElement = document.getElementById(this.id);
    keys.classList.remove('active');
    keyElement.classList.remove('active');
  }

  function playSound(id) {
      const audioToPlay = `./sounds/${keySounds[id]}.wav`;
      const audio = new Audio(audioToPlay);
      audio.play();
  }

  // when user clicks on the keys
  function bindClickListenerOnKeys() {
    const keys = document.getElementsByClassName('key');
    for(let i=0; i<keys.length; i++) {
      let key = keys[i];
      key.onclick = function() {
        playSound(this.id);
        makeKeyActive(this.id);
      };

      key.addEventListener('transitionend', makeKeyInactive);
    }
  }

  // when playing with the keyboard
  window.onkeyup = function(e) {
    var { key } = e;
    key = key.toLowerCase();

    if(keySounds.hasOwnProperty(key)) {
      playSound(key);
      makeKeyActive(key);
    }
  };

  bindClickListenerOnKeys();

}());
