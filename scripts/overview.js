window.addEventListener('scroll', function() {
    var toc = document.querySelector('.toc-container');
    var mainContent = document.querySelector('.content');

    var mainContentTop = mainContent.getBoundingClientRect().top;
    
    // If we are near the bottom of the page, stop the ToC from sticking past its section
    if (mainContentTop < 0) {
      toc.style.position = 'absolute';
      toc.style.top = (window.scrollY) + 'px';
    } else {
      toc.style.position = 'fixed';
      toc.style.top = '70px';
    }
  });