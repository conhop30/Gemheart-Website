// Commanders data template
const commanders = [
    {
        name: "Commander One",
        description: "A versatile commander focused on control and adaptability.",
        playstyle: "Control",
        traits: "Strategic, Adaptable",
        image: "../images/commander1.jpg",
    },
    {
        name: "Commander Two",
        description: "An aggressive commander excelling in quick and decisive actions.",
        playstyle: "Aggression",
        traits: "Bold, Fearless",
        image: "../images/commander2.PNG",
    },
    {
        name: "Commander Three",
        description: "A defensive commander specializing in holding the line.",
        playstyle: "Defense",
        traits: "Resilient, Protective",
        image: "../images/commander3.jpg",
    },
    {
        name: "Commander Four",
        description: "A voracious commander who consumes everything.",
        playstyle: "Aggression",
        traits: "Constant, Corrosive",
        image: "../images/commander4.jpg",
        },
  ];
  
  // Populate tabs and content
  document.addEventListener("DOMContentLoaded", () => {
    const tabsContainer = document.getElementById("tabs");
    const contentContainer = document.getElementById("content");
  
// Function to update content based on active tab
const updateContent = (index) => {
    const commander = commanders[index];
    contentContainer.innerHTML = `
      <div class="text-content">
        <h2>${commander.name}</h2>
        <p><strong>Description:</strong> ${commander.description}</p>
        <p><strong>Playstyle:</strong> ${commander.playstyle}</p>
        <p><strong>Traits:</strong> ${commander.traits}</p>
      </div>
      <img src="${commander.image}" alt="${commander.name}" class="commander-image">
    `;
  
    // Update active tab
    document.querySelectorAll(".tabs li").forEach((tab, idx) => {
      tab.classList.toggle("active", idx === index);
    });
  };
  
  
    // Generate tabs dynamically
    commanders.forEach((commander, index) => {
      const tab = document.createElement("li");
      tab.textContent = commander.name;
      tab.addEventListener("click", () => updateContent(index));
      tabsContainer.appendChild(tab);
    });
  
    // Initialize with the first commander's information
    updateContent(0);
  });
  