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
      const source = card.getAttribute("data-source");

      popup.innerHTML = `
        <img src="${image}" alt="${title}">
        <h3>${title}</h3>
        <p>${description}</p>
        <p>${source}</p>
      `;
      popup.style.top = `${e.clientY + 10}px`;
      popup.style.left = `${e.clientX + 10}px`;
      popup.classList.add("visible");
    });

    card.addEventListener("mousemove", (e) => {
      popup.style.top = `${e.clientY + 10}px`;
      popup.style.left = `${e.clientX + 10}px`;
    });

    card.addEventListener("mouseleave", () => {
      popup.classList.remove("visible");
    });
  });
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
