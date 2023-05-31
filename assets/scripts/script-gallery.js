const dataImages = [
  {
    id: 1,
    category: "animal",
    img: "../images/gallery/GettyImages-1168158954.jpg",
  },
  {
    id: 2,
    category: "human",
    img: "../images/gallery/GettyImages-1180040818.jpg",
  },
  {
    id: 3,
    category: "nature",
    img: "../images/gallery/GettyImages-477753502.jpg",
  },
  {
    id: 4,
    category: "animal",
    img: "../images/gallery/GettyImages-1376502062.jpg",
  },
  {
    id: 5,
    category: "human",
    img: "../images/gallery/GettyImages-1407770588.jpg",
  },
  {
    id: 6,
    category: "animal",
    img: "../images/gallery/GettyImages-1457159142.jpg",
  },
  {
    id: 7,
    category: "nature",
    img: "../images/gallery/GettyImages-484420255.jpg",
  },
  {
    id: 8,
    category: "human",
    img: "../images/gallery/GettyImages-1447355604.jpg",
  },
  {
    id: 9,
    category: "animal",
    img: "../images/gallery/GettyImages-1058990992.jpg",
  },
  {
    id: 10,
    category: "nature",
    img: "../images/gallery/GettyImages-843388846.jpg",
  },
  {
    id: 11,
    category: "nature",
    img: "../images/gallery/GettyImages-1024004678.jpg",
  },
  {
    id: 12,
    category: "art",
    img: "../images/gallery/GettyImages-1465230244.jpg",
  },

  {
    id: 13,
    category: "human",
    img: "../images/gallery/GettyImages-99307925.jpg",
  },

  {
    id: 14,
    category: "human",
    img: "../images/gallery/GettyImages-565783421.jpg",
  },

  {
    id: 15,
    category: "art",
    img: "../images/gallery/GettyImages-645277871.jpg",
  },

  {
    id: 17,
    category: "nature",
    img: "../images/gallery/GettyImages-1156218593.jpg",
  },

  {
    id: 18,
    category: "animal",
    img: "../images/gallery/GettyImages-1311620739.jpg",
  },

  {
    id: 19,
    category: "human",
    img: "../images/gallery/GettyImages-1325997469.jpg",
  },

  {
    id: 20,
    category: "art",
    img: "../images/gallery/GettyImages-1379810322.jpg",
  },

  {
    id: 21,
    category: "human",
    img: "../images/gallery/GettyImages-1334959064.jpg",
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
    categoryButtons.forEach((btn) => btn.classList.remove("active"));

    const category = button.getAttribute("data-category");
    renderImages(category);
    button.classList.add("active");
  });
});

renderImages("animal");

// Login-Logout

const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const loginBtnSubmit = document.getElementById("login-submit");
const containerBtnLogin = document.getElementById("buttonContainer");

function toggleLoginState() {
  console.log(loginButton);
  containerBtnLogin.innerHTML = `<button
  id="logoutButton"
  class="btn btn-outline-danger d-none d-lg-block btn-login"
>
  Logout
</button>`;
}
loginBtnSubmit.addEventListener("click", toggleLoginState);

function toggleLogoutState() {
  console.log(logoutButton);
  containerBtnLogin.innerHTML = `<button
  id="loginButton"
  class="btn btn-outline-success d-none d-lg-block btn-login"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
  data-bs-whatever="@fat"
>
  Login
</button>`;
}

logoutButton.addEventListener("click", toggleLogoutState);
