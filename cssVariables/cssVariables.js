;(function() {
var inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('change', handleInputChange));

function handleInputChange() {
  var suffix = this.dataset.suffix || '',
    val = this.value,
    property = this.name;

  document.documentElement.style.setProperty(`--${property}`, val + suffix);
}

}());
