/* Effetto Fade Nav */

window.onscroll = function() {
    let navbar = document.querySelector('nav');
    let myButton = document.querySelector('.btnGreen');
    let hover = document.querySelectorAll('nav div .btn');
  
    if (window.pageYOffset > 390) { /* Anche se deprecato funziona */
      navbar.classList.add('scrolled');
      myButton.classList.add('scrolled');
      hover.forEach(hover => hover.classList.add('scrolled'));
    } else {
      navbar.classList.remove('scrolled');
      myButton.classList.remove('scrolled');
      hover.forEach(hover => hover.classList.remove('scrolled'));
    }
  };

/*   Effetto fade M */

  const fadeInDuration = 1000; 
  const fadeOutDuration = 1000; 
  const delayBetweenCycles = 2000;
  
  const textGroup = document.querySelector('g[aria-label]');
  const textElements = Array.from(textGroup.children);
  
  function fadeIn(element, duration) {
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = 1;
  }
  
  function fadeOut(element, duration) {
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = 0;
  }
  
  function fadeCycle() {

    const shuffledElements = textElements.sort(() => Math.random() - 0.5);
  
    shuffledElements.forEach((element, index) => {
      setTimeout(() => {
        fadeIn(element, fadeInDuration);
      }, index * fadeInDuration); 
    });
  
    setTimeout(() => {
      shuffledElements.forEach((element, index) => {
        setTimeout(() => {
          fadeOut(element, fadeOutDuration);
        }, index * fadeOutDuration);
      });
    }, fadeInDuration);
  
    setTimeout(fadeCycle, fadeInDuration + fadeOutDuration + delayBetweenCycles);
  }
  
  fadeCycle();
  