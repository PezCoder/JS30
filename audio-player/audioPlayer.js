(function() {
  const audioEle = document.querySelector('.audio-wrapper'),
    playButton = audioEle.querySelector('i'),
    seekCircle = audioEle.querySelector('.seek-circle'),
    playedSeek = audioEle.querySelector('.played-seek');

  const audioFile = new Audio('./audio.mp4');

  playButton.onclick = function() {
    toggleControlButton();
    toggleMusicState();
  };

  audioFile.addEventListener('timeupdate', updateSeek);
  function updateSeek() {
    const completePercentage = this.currentTime/this.duration * 100;
    seekCircle.style.left = `${completePercentage}%`;
    playedSeek.style.width = `${completePercentage}%`;
  }

  function toggleMusicState() {
    if(audioFile.paused) {
      return audioFile.play();
    } else {
      return audioFile.pause();
    }
  }

  function toggleControlButton() {
    playButton.classList.toggle('fa-play');
    playButton.classList.toggle('fa-pause');
  }
}());
