const dataCarousel = [
  {
    id: 1,
    category: "animal",
    img: "assets/images/carousel1.jpg",
  },
  {
    id: 2,
    category: "human",
    img: "assets/images/carousel2.jpg",
  },
  {
    id: 3,
    category: "nature",
    img: "assets/images/carousel3.jpg",
  },
];

const dataImages = [
  {
    id: 1,
    category: "animal",
    img: "assets/images/gallery/GettyImages-1168158954.jpg",
  },
  {
    id: 2,
    category: "human",
    img: "assets/images/gallery/GettyImages-1180040818.jpg",
  },
  {
    id: 3,
    category: "nature",
    img: "assets/images/gallery/GettyImages-477753502.jpg",
  },
  {
    id: 4,
    category: "animal",
    img: "assets/images/gallery/GettyImages-1376502062.jpg",
  },
  {
    id: 5,
    category: "human",
    img: "assets/images/gallery/GettyImages-1407770588.jpg",
  },
  {
    id: 6,
    category: "animal",
    img: "assets/images/gallery/GettyImages-1457159142.jpg",
  },
  {
    id: 7,
    category: "nature",
    img: "assets/images/gallery/GettyImages-484420255.jpg",
  },
  {
    id: 8,
    category: "human",
    img: "assets/images/gallery/GettyImages-1447355604.jpg",
  },
  {
    id: 9,
    category: "animal",
    img: "assets/images/gallery/GettyImages-1058990992.jpg",
  },
  {
    id: 10,
    category: "nature",
    img: "assets/images/gallery/GettyImages-843388846.jpg",
  },
  {
    id: 11,
    category: "nature",
    img: "assets/images/gallery/GettyImages-1024004678.jpg",
  },
  {
    id: 12,
    category: "art",
    img: "assets/images/gallery/GettyImages-1465230244.jpg",
  },

  {
    id: 13,
    category: "human",
    img: "assets/images/gallery/GettyImages-99307925.jpg",
  },

  {
    id: 14,
    category: "human",
    img: "assets/images/gallery/GettyImages-565783421.jpg",
  },

  {
    id: 15,
    category: "art",
    img: "assets/images/gallery/GettyImages-645277871.jpg",
  },

  {
    id: 17,
    category: "nature",
    img: "assets/images/gallery/GettyImages-1156218593.jpg",
  },

  {
    id: 18,
    category: "animal",
    img: "assets/images/gallery/GettyImages-1311620739.jpg",
  },

  {
    id: 19,
    category: "human",
    img: "assets/images/gallery/GettyImages-1325997469.jpg",
  },

  {
    id: 20,
    category: "nature",
    img: "assets/images/gallery/GettyImages-1379810322.jpg",
  },

  {
    id: 21,
    category: "human",
    img: "assets/images/gallery/GettyImages-1334959064.jpg",
  },
];

let imageContainer = document.getElementById("album");

dataImages.forEach(function (image) {
  let imageElement = document.createElement("div");
  imageElement.innerHTML = `
    <div>
      <img src="${image.img}" class="card-img-top" alt="...">
    </div>
  `;
  imageContainer.appendChild(imageElement);
});

let imageCarousel = document.getElementById("carousel");

dataCarousel.forEach(function (image, index) {
  let div = document.createElement("div");
  div.classList.add("carousel-item");

  if (index === 0) {
    div.classList.add("active");
  }

  div.innerHTML = `
    <img src="${image.img}" class="d-block w-100" alt="..."/>
  `;

  imageCarousel.appendChild(div);
});
