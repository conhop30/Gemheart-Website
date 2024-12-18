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
        keyword: "Queue",
        description: "This is the description for Keyword 1.",
        imageUrl: "../images/keywords/keyword-tooltip-queue.png"
    },
    {
        keyword: "Ranged",
        description: "This is the description for Keyword 1.",
        imageUrl: "../images/keywords/keyword-tooltip-ranged.png"
    },
    {
        keyword: "Reach",
        description: "This is the description for Keyword 1.",
        imageUrl: "../images/keywords/keyword-tooltip-reach.png"
    },
    {
        keyword: "Rooted",
        description: "This is the description for Keyword 1.",
        imageUrl: "../images/keywords/keyword-tooltip-rooted.png"
    },
    {
        keyword: "Small",
        description: "This is the description for Keyword 1.",
        imageUrl: "../images/keywords/keyword-tooltip-small.png"
    },
    {
        keyword: "Structure",
        description: "This is the description for Keyword 2.",
        imageUrl: "../images/keywords/keyword-tooltip-structure.png"
    },
    {
        keyword: "Swarm",
        description: "This is the description for Keyword 1.",
        imageUrl: "../images/keywords/keyword-tooltip-swarm.png"
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

    // Skip adding the label text since the image already contains it
    keywordList.appendChild(keywordItem);
});

});

