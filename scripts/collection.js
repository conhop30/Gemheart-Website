// Card collection data
const cards = [
    { id: 1, title: "Card One", image: "../images/cards/card1.jpg", description: "This is Card One's detailed description." },
    { id: 2, title: "Card Two", image: "../images/cards/card2.jpg", description: "This is Card One's detailed description." },
    { id: 3, title: "Card Three", image: "../images/cards/card3.jpg", description: "This is Card One's detailed description." },
    { id: 4, title: "Card Three", image: "../images/cards/card3.jpg", description: "This is Card One's detailed description." },
    { id: 5, title: "Card Three", image: "../images/cards/card3.jpg", description: "This is Card One's detailed description." },
    { id: 6, title: "Card Three", image: "../images/cards/card3.jpg", description: "This is Card One's detailed description." },
    { id: 11, title: "Card Two", image: "../images/cards/card2.jpg", description: "This is Card One's detailed description." },
    { id: 7, title: "Card Three", image: "../images/cards/card3.jpg", description: "This is Card One's detailed description." },
    { id: 14, title: "Card One", image: "../images/cards/card1.jpg", description: "This is Card One's detailed description." },
    { id: 8, title: "Card Three", image: "../images/cards/card3.jpg", description: "This is Card One's detailed description." },
    { id: 9, title: "Card Three", image: "../images/cards/card3.jpg", description: "This is Card One's detailed description." },
    { id: 10, title: "Card Two", image: "../images/cards/card2.jpg", description: "This is Card One's detailed description." },
    { id: 11, title: "Card Two", image: "../images/cards/card2.jpg", description: "This is Card One's detailed description." },
    { id: 12, title: "Card Two", image: "../images/cards/card2.jpg", description: "This is Card One's detailed description." },
    { id: 13, title: "Card One", image: "../images/cards/card1.jpg", description: "This is Card One's detailed description." },
    { id: 14, title: "Card One", image: "../images/cards/card1.jpg", description: "This is Card One's detailed description." },
    { id: 4, title: "Card Three", image: "../images/cards/card3.jpg", description: "This is Card One's detailed description." },
    { id: 15, title: "Card One", image: "../images/cards/card1.jpg", description: "This is Card One's detailed description." },
    { id: 16, title: "Card One", image: "../images/cards/card1.jpg", description: "This is Card One's detailed description." },
    { id: 4, title: "Card Three", image: "../images/cards/card3.jpg", description: "This is Card One's detailed description." },
    { id: 12, title: "Card Two", image: "../images/cards/card2.jpg", description: "This is Card One's detailed description." },
    { id: 4, title: "Card Three", image: "../images/cards/card3.jpg", description: "This is Card One's detailed description." },
    { id: 17, title: "Card One", image: "../images/cards/card1.jpg", description: "This is Card One's detailed description." },
    { id: 18, title: "Card One", image: "../images/cards/card1.jpg", description: "This is Card One's detailed description." },
    { id: 12, title: "Card Two", image: "../images/cards/card2.jpg", description: "This is Card One's detailed description." },
  ];
  
// Function to render the card gallery
const renderGallery = () => {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; // Clear current gallery content
  
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.setAttribute("data-title", card.title);
      cardElement.setAttribute("data-description", card.description);
      cardElement.setAttribute("data-image", card.image);
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
  
        popup.innerHTML = `
          <img src="${image}" alt="${title}">
          <h3>${title}</h3>
          <p>${description}</p>
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
  
  // Initialize page
  document.addEventListener("DOMContentLoaded", () => {
    renderGallery();
    setupHoverEffects();
  });