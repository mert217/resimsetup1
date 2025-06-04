
const validUsername = "kullanici";
const validPassword = "sifre123";

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === validUsername && password === validPassword) {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("gallery-container").classList.remove("hidden");

    const images = document.querySelectorAll(".image-card img");
    images.forEach(img => {
      img.style.filter = "none";
    });
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
  }
}

function logout() {
  document.getElementById("login-container").classList.remove("hidden");
  document.getElementById("gallery-container").classList.add("hidden");

  const images = document.querySelectorAll(".image-card img");
  images.forEach(img => {
    img.style.filter = "blur(5px)";
  });
}

function downloadImage(url) {
  const link = document.createElement("a");
  link.href = url;
  link.download = url.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
