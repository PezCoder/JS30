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
      };
    }
  }

  bindClickListenerOnKeys();

}());
