const dataImages = [
  {
    id: 1,
    category: "animal",
    img: "../../assets/images/gallery/GettyImages-1168158954.jpg",
  },
  {
    id: 2,
    category: "human",
    img: "../../assets/images/gallery/GettyImages-1180040818.jpg",
  },
  {
    id: 3,
    category: "nature",
    img: "../../assets/images/gallery/GettyImages-477753502.jpg",
  },
  {
    id: 4,
    category: "animal",
    img: "../../assets/images/gallery/GettyImages-1376502062.jpg",
  },
  {
    id: 5,
    category: "human",
    img: "../../assets/images/gallery/GettyImages-1407770588.jpg",
  },
  {
    id: 6,
    category: "animal",
    img: "../../assets/images/gallery/GettyImages-1457159142.jpg",
  },
  {
    id: 7,
    category: "nature",
    img: "../../assets/images/gallery/GettyImages-484420255.jpg",
  },
  {
    id: 8,
    category: "human",
    img: "../../assets/images/gallery/GettyImages-1447355604.jpg",
  },
  {
    id: 9,
    category: "animal",
    img: "../../assets/images/gallery/GettyImages-1058990992.jpg",
  },
  {
    id: 10,
    category: "nature",
    img: "../../assets/images/gallery/GettyImages-843388846.jpg",
  },
  {
    id: 11,
    category: "nature",
    img: "../../assets/images/gallery/GettyImages-1024004678.jpg",
  },
  {
    id: 12,
    category: "art",
    img: "../../assets/images/gallery/GettyImages-1465230244.jpg",
  },
];

const albumContainer = document.getElementById("album");

function renderImages(category) {
  albumContainer.innerHTML = "";

  const filteredImages = dataImages.filter(
    (image) => image.category.toLowerCase() === category.toLowerCase()
  );

  filteredImages.forEach((data) => {
    const div = document.createElement("div");
    // div.classList.add("col-md-3");

    const img = document.createElement("img");
    img.src = data.img;
    img.classList.add("img-fluid");

    div.appendChild(img);
    albumContainer.appendChild(div);
  });
}

const categoryButtons = document.querySelectorAll(".category-button");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove "active" class from all category buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));

    const category = button.getAttribute("data-category");
    renderImages(category);

    // Add "active" class to the clicked category button
    button.classList.add("active");
  });
});

// Call renderImages with the "animal" category on page load
renderImages("animal");
