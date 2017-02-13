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

  function makeActive(key) {
    const keyElement = document.getElementById(key);
    const keys = document.getElementById('keys');
    keys.classList.add('active');
    keyElement.classList.add('active');

    window.setTimeout(() => {
      keyElement.classList.remove('active')
      keys.classList.remove('active');
    }, 100);
  }

  function playSound(id) {
      const audioToPlay = `./sounds/${keySounds[id]}.wav`;
      const audio = new Audio(audioToPlay);
      audio.play();
  }

  function bindClickListenerOnKeys() {
    const keys = document.getElementsByClassName('key');
    for(let i=0; i<keys.length; i++) {
      let key = keys[i];
      key.onclick = function() {
        playSound(this.id);
        makeActive(this.id);
      };
    }
  }

  window.onkeyup = function(e) {
    var { key } = e;
    key = key.toLowerCase();

    if(keySounds.hasOwnProperty(key)) {
      playSound(key);
      makeActive(key);
    }
  };

  bindClickListenerOnKeys();

}());
