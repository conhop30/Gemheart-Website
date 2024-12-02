// Card collection data
const cards = [
  { id: 1, title: "Card One", image: "../images/cards/card1.jpg", description: "This is Card One's detailed description.", source: "Feral" },
  { id: 2, title: "Card Two", image: "../images/cards/card2.jpg", description: "This is Card Two's detailed description.", source: "Order" },
  { id: 3, title: "Card Three", image: "../images/cards/card3.jpg", description: "This is Card Three's detailed description.", source: "Nature" },
  { id: 4, title: "Card Four", image: "../images/cards/card4.jpg", description: "This is Card Four's detailed description.", source: "Feral" },
  { id: 5, title: "Card Five", image: "../images/cards/card5.jpg", description: "This is Card Five's detailed description.", source: "Feral" },
  { id: 6, title: "Card Six", image: "../images/cards/card6.jpg", description: "This is Card Six's detailed description.", source: "Nature" },
  // More cards
];

// Function to render the card gallery
const renderGallery = (filteredCards) => {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // Clear current gallery content

  filteredCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-title", card.title);
    cardElement.setAttribute("data-description", card.description);
    cardElement.setAttribute("data-image", card.image);
    cardElement.setAttribute("data-source", card.source); // Store source for filtering
    cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.title}">
      <h2>${card.title}</h2>
    `;
    gallery.appendChild(cardElement);
  });

  // Reapply hover effects after rendering new cards
  setupHoverEffects();
};


// Pop-up functionality
const setupHoverEffects = () => {
  const cards = document.querySelectorAll(".card");
  const popup = document.getElementById("popup");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", (e) => {
      const title = card.getAttribute("data-title");
      const description = card.getAttribute("data-description");
      const image = card.getAttribute("data-image");

      popup.innerHTML = `
        <img src="${image}" alt="${title}">
        <h3>${title}</h3>
        <p>${description}</p>
      `;
      popup.style.display = "block"; // Ensure it's visible to calculate dimensions
      adjustPopupPosition(e.clientX, e.clientY, popup);
    });

    card.addEventListener("mousemove", (e) => {
      adjustPopupPosition(e.clientX, e.clientY, popup);
    });

    card.addEventListener("mouseleave", () => {
      popup.style.display = "none";
    });
  });

  // Function to adjust popup position based on screen edges
  const adjustPopupPosition = (mouseX, mouseY, popup) => {
    const padding = 10; // Padding to avoid popup being right at the edge
    const popupRect = popup.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = mouseY + padding;
    let left = mouseX + padding;

    // Adjust if the popup goes beyond the right edge
    if (left + popupRect.width > viewportWidth) {
      left = viewportWidth - popupRect.width - padding;
    }

    // Adjust if the popup goes beyond the bottom edge
    if (top + popupRect.height > viewportHeight) {
      top = viewportHeight - popupRect.height - padding;
    }

    // Adjust if the popup goes beyond the left edge
    if (left < padding) {
      left = padding;
    }

    // Adjust if the popup goes beyond the top edge
    if (top < padding) {
      top = padding;
    }

    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;
  };
};


// Search functionality
const setupSearch = () => {
  const searchBar = document.getElementById("searchBar");

  searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredCards = cards.filter(card => 
      card.title.toLowerCase().includes(query)
    );
    applyFilters(filteredCards);
  });
};

// Function to apply all filters (including search and source)
const applyFilters = (cardsToFilter) => {
  const sourceOrder = document.getElementById("sourceOrder").checked;
  const sourceNature = document.getElementById("sourceNature").checked;
  const sourceFeral = document.getElementById("sourceFeral").checked;

  // Filter by source if any checkbox is checked
  const filteredCards = cardsToFilter.filter(card => {
    // Check if the card's source matches any of the checked boxes
    const matchesSource = 
      (sourceOrder && card.source === "Order") || 
      (sourceNature && card.source === "Nature") || 
      (sourceFeral && card.source === "Feral");

    // If no checkbox is checked, we show all cards
    return (sourceOrder || sourceNature || sourceFeral) ? matchesSource : true;
  });

  renderGallery(filteredCards);
};

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  renderGallery(cards);
  setupHoverEffects();
  setupSearch();

  // Add event listeners for source filter checkboxes
  document.getElementById("sourceOrder").addEventListener("change", () => applyFilters(cards));
  document.getElementById("sourceNature").addEventListener("change", () => applyFilters(cards));
  document.getElementById("sourceFeral").addEventListener("change", () => applyFilters(cards));
});
