// Membuat angka random untuk captcha
const angkaRandom = document.getElementById("angkaRandom");
function angkaUntukCaptcha(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Membuat variable untuk menampung angka random, disini saya ingin ada 5 angka random jadi dibuat 5 variable
const angkaPertama = angkaUntukCaptcha(1, 10);
const angkaKedua = angkaUntukCaptcha(1, 10);
const angkaKetiga = angkaUntukCaptcha(1, 10);
const angkaKeempat = angkaUntukCaptcha(1, 10);
const angkaKelima = angkaUntukCaptcha(1, 10);
// Menggabungkan kelima angka random
const gabungAngkaRandom = `${angkaPertama}${angkaKedua}${angkaKetiga}${angkaKeempat}${angkaKelima}`;
angkaRandom.innerText = gabungAngkaRandom;

// Seleksi terlebih dahulu inputan html nya
const username = document.getElementById("username");
const password = document.getElementById("password");
const captcha = document.getElementById("captcha");
const submit = document.getElementById("btn");
// Lakukan event ketika tombol di klik
submit.addEventListener("click", function (e) {
  // Jika username kosong maka user wajib mengisi terlebih dahulu
  if (username.value === "") {
    alert("Isi username kamu terlebih dahulu!");
    // Jika password kosong maka user wajib mengisi terlebih dahulu
  } else if (password.value === "") {
    alert("Isi password kamu terlebih dahulu!");
    // Jika username dan password tidak kosong serta captcha berisi nilai angka yang tepat sesuai captcha yang diberikan
  } else if (username.value !== "" && password.value !== "" && captcha.value === gabungAngkaRandom) {
    document.getElementsByTagName("table")[0].style.display = "none";
    document.getElementsByTagName("h2")[0].style.display = "block";
    document.getElementById("tampilUsername").innerText = username.value;
    document.getElementById("kembali").style.display = "block";
  }
  e.preventDefault();
});

// Untuk mengecek inputan nilai yang dimasukkan user
captcha.addEventListener("input", function () {
  // Jika captcha kosong, akan menampilkan pesan
  if (captcha.value === "") {
    notifCaptcha.innerText = "Isi captcha!";
    // Jika captcha tidak sama dengan angka random yang tertera maka akan salah dan akan diberi warna merah
  } else if (captcha.value !== gabungAngkaRandom) {
    notifCaptcha.style.color = "red";
    notifCaptcha.innerText = "Captcha salah!";
    // Jika captcha sama dengan angka random yang tertera maka akan benar dan akan diberi warna hijau
  } else if (captcha.value === gabungAngkaRandom) {
    notifCaptcha.style.color = "green";
    notifCaptcha.innerText = "Captcha benar!";
  }
});

// Ketika user login, lalu ada tombol kembali. Maka akan kembali ke halam form login
kembali.addEventListener("click", function () {
  document.getElementsByTagName("table")[0].style.display = "block";
  document.getElementsByTagName("h2")[0].style.display = "none";
  document.getElementById("kembali").style.display = "none";
  document.getElementById("kembali").type = "submit";
});
