window.onscroll = function() {
    let navbar = document.querySelector('nav');
    let myButton = document.querySelector('.btnGreen');
    let hover = document.querySelectorAll('nav div .btn');
  
    if (window.pageYOffset > 390) {
      navbar.classList.add('scrolled');
      myButton.classList.add('scrolled');
      hover.forEach(hover => hover.classList.add('scrolled'));
    } else {
      navbar.classList.remove('scrolled');
      myButton.classList.remove('scrolled');
      hover.forEach(hover => hover.classList.remove('scrolled'));
    }
  };