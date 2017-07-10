(function(){

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', handleMiddleSelect.bind(this, index));
  });

  document.addEventListener('keydown', event => {
    if(event.key === 'Shift') {
      isShiftKeyPressed = true;
    }
  });

  document.addEventListener('keyup', event => {
    if(event.key === 'Shift') {
      isShiftKeyPressed = false;
    }
  });

  let lastCheckedIndex,
    isShiftKeyPressed;

  function handleMiddleSelect(checkboxIndex, e) {
    if(e.target.checked) {
      if(isShiftKeyPressed && typeof lastCheckedIndex !== 'undefined') {
        checkFromTo(...[lastCheckedIndex, checkboxIndex].sort());
        resetAfterASecond();
      }

      lastCheckedIndex = checkboxIndex;
    }
  }

  function checkFromTo(lowerIndex, higherIndex) {
    for(let i = lowerIndex + 1; i < higherIndex; i++) {
      checkboxes[i].checked = true;
    }
  }

  function resetAfterASecond() {
    setTimeout(()=>{
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
    }, 1000);
  }

}());
