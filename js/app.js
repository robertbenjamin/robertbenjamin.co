(function() {
  document.querySelector('.links').addEventListener('mouseover', function(e) {
    if (!e.target.classList.contains('links')) window.baffle(e.target).start().reveal(3000);
  });
  document.querySelector('.email-paragraph a').addEventListener('mouseover', function(e) {
    window.baffle(e.target).start().reveal(1000);
  });
})();