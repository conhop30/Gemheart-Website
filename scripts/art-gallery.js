const images = [
    "../images/commander1.jpg",
    "../images/commander2.png",
    "../images/commander3.jpg",
    "../images/commander1.jpg",
    
];

function createImageElements(imageUrls) {
    const gallery = document.querySelector(".gallery");
    imageUrls.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        gallery.appendChild(img);
    });
}

createImageElements(images);