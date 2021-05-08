// Membuat angka random untuk captcha
const angkaRandom = document.getElementById("angkaRandom");
function angkaUntukCaptcha(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Menggabungkan kelima angka random
const angkaPertama = angkaUntukCaptcha(1, 10);
const angkaKedua = angkaUntukCaptcha(1, 10);
const angkaKetiga = angkaUntukCaptcha(1, 10);
const angkaKeempat = angkaUntukCaptcha(1, 10);
const angkaKelima = angkaUntukCaptcha(1, 10);
const gabungAngkaRandom = `${angkaPertama}${angkaKedua}${angkaKetiga}${angkaKeempat}${angkaKelima}`;
angkaRandom.innerText = gabungAngkaRandom;

// Seleksi terlebih dahulu inputan html nya
const username = document.getElementById("username");
const password = document.getElementById("password");
const captcha = document.getElementById("captcha");
const submit = document.getElementById("btn");
// Lakukan event ketika tombol di klik
submit.addEventListener("click", function (e) {
  if (username.value === "") {
    alert("Isi username kamu terlebih dahulu!");
  } else if (password.value === "") {
    alert("Isi password kamu terlebih dahulu!");
  } else if (username.value !== "" && password.value !== "" && captcha.value === gabungAngkaRandom) {
    document.getElementsByTagName("table")[0].style.display = "none";
    document.getElementsByTagName("h2")[0].style.display = "block";
    document.getElementById("tampilUsername").innerText = username.value;
    document.getElementById("kembali").style.display = "block";
  }
  e.preventDefault();
});

captcha.addEventListener("input", function () {
  if (captcha.value === "") {
    notifCaptcha.innerText = "Isi captcha!";
  } else if (captcha.value !== gabungAngkaRandom) {
    notifCaptcha.style.color = "red";
    notifCaptcha.innerText = "Captcha salah!";
  } else if (captcha.value === gabungAngkaRandom) {
    notifCaptcha.style.color = "green";
    notifCaptcha.innerText = "Captcha benar!";
  }
});

kembali.addEventListener("click", function () {
  document.getElementsByTagName("table")[0].style.display = "block";
  document.getElementsByTagName("h2")[0].style.display = "none";
  document.getElementById("kembali").style.display = "none";
  document.getElementById("kembali").type = "submit";
});
