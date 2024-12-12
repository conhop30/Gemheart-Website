/*
ToC SCROLLING FUNCTIONALITY

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

*/

document.addEventListener('DOMContentLoaded', function() {
  const keywordList = document.getElementById('keyword-list');
  const keywords = [
      {
          keyword: "Keyword 1",
          description: "This is the description for Keyword 1.",
          imageUrl: "../images/commander1.jpg"
      },
      {
          keyword: "Keyword 2",
          description: "This is the description for Keyword 2.",
          imageUrl: "../images/commander3.jpg"
      }
  ];

  keywords.forEach(keyword => {
      const keywordItem = document.createElement('div');
      keywordItem.classList.add('keyword-item');

      const keywordImage = document.createElement('img');
      keywordImage.src = keyword.imageUrl;
      keywordImage.alt = keyword.keyword;
      keywordImage.setAttribute('data-description', keyword.description);
      keywordItem.appendChild(keywordImage);

      const keywordText = document.createElement('p');
      keywordText.textContent = keyword.keyword;
      keywordItem.appendChild(keywordText);

      keywordList.appendChild(keywordItem);
  });

  // Setup hover effects
  setupHoverEffects();
});

const setupHoverEffects = () => {
  const keywordItems = document.querySelectorAll('.keyword-item img');
  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.style.display = 'none';
  document.body.appendChild(popup);

  keywordItems.forEach(item => {
      item.addEventListener('mouseenter', (e) => {
          const description = item.getAttribute('data-description');
          popup.textContent = description;
          popup.style.display = 'block';
          adjustPopupPosition(e.clientX, e.clientY, popup);
      });

      item.addEventListener('mousemove', (e) => {
          adjustPopupPosition(e.clientX, e.clientY, popup);
      });

      item.addEventListener('mouseleave', () => {
          popup.style.display = 'none';
      });
  });

  const adjustPopupPosition = (mouseX, mouseY, popup) => {
      const padding = 10;
      const popupRect = popup.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = mouseY + padding;
      let left = mouseX + padding;

      if (left + popupRect.width > viewportWidth) {
          left = viewportWidth - popupRect.width - padding;
      }

      if (top + popupRect.height > viewportHeight) {
          top = viewportHeight - popupRect.height - padding;
      }

      if (left < padding) {
          left = padding;
      }

      if (top < padding) {
          top = padding;
      }

      popup.style.top = `${top}px`;
      popup.style.left = `${left}px`;
  };
};

