const apiKey = "46602774-73009111a9ea67097128b05c0"; // Replace with your actual API key
const cities = [
  "Tokyo",
  "Paris",
  "London",
  "Berlin",
  "Rome",
  "Washington",
  "Beijing",
  "Moscow",
  "New Delhi",
  "Ottawa",
  "Canberra",
  "Brasilia",
  "Mexico City",
  "Buenos Aires",
  "Cairo",
  "Bangkok",
  "Madrid",
  "Lisbon",
  "Seoul",
  "Jakarta",
];

const imageContainer = document.getElementById("image-container");

// Function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to fetch images for each city
const fetchCityPhotos = (city) => {
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    city
  )}&image_type=photo&per_page=5`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const images = data.hits;
      if (images.length > 0) {
        shuffleArray(images);

        const cityHeader = document.createElement("h2");
        cityHeader.textContent = city;
        imageContainer.appendChild(cityHeader);

        images.forEach((image) => {
          const imgElement = document.createElement("img");
          imgElement.src = image.webformatURL;
          imgElement.alt = image.tags;
          imgElement.style.width = "300px";
          imgElement.style.margin = "10px";
          imgElement.classList.add("clickable-image"); // Add a class to each image
          imageContainer.appendChild(imgElement);

          // Add click event to enlarge image
          imgElement.addEventListener("click", (event) => {
            event.stopPropagation();
            // Remove any previous enlarged image
            document
              .querySelectorAll(".enlarged")
              .forEach((img) => img.classList.remove("enlarged"));

            const rect = imgElement.getBoundingClientRect();
            imgElement.style.top = `${rect.top + window.scrollY}px`;
            imgElement.style.left = `${rect.left}px`;
            imgElement.classList.add("enlarged");
          });
        });
      }
    })
    .catch((error) => console.error("Error fetching images:", error));
};

// Close enlarged image when clicking outside
document.addEventListener("click", function (event) {
  if (!event.target.matches("img.clickable-image")) {
    document
      .querySelectorAll(".enlarged")
      .forEach((img) => img.classList.remove("enlarged"));
  }
});

// Loop through the cities and fetch their photos
cities.forEach((city) => {
  fetchCityPhotos(city);
});
