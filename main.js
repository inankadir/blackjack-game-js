let mesaj = "";
kartlar = [];
let kartlarEl = document.getElementById("kartlar-el");
let toplamEl = document.getElementById("toplam-el");
let mesajEl = document.getElementById("mesaj-el");
let black = false;
let oyundisi = false;

function oyunaBasla() {
  let birinciKart = getRandomCard();
  let ikinciKart = getRandomCard();
  let kartlar = [birinciKart, ikinciKart];
  let toplam = birinciKart + ikinciKart;
  let black = false;
  let oyundisi = false;
  oyunRender();
}

function oyunRender() {
  kartlarEl.textContent = "Kartlar : ";

  for (let i = 0; i < kartlar.length; i++) {
    kartlarEl.textContent += kartlar[i] + " ";
  }
  toplamEl.textContent = "Toplam : " + toplam;

  if (toplam == 21) {
    mesaj = "BlackJack !!!";
    black = true;
  } else if (toplam < 21) {
    mesaj = "Yeni Kart Alabilirsiniz";
  } else {
    mesaj = "Oyun dışı kaldınız!!! Toplam 21 den buyuk";
    oyundisi = true;
  }
  mesajEl.textContent = mesaj;
}
function yeniKart() {
  if (oyundisi == false && black == false) {
    let yKart = getRandomCard();
    toplam += yKart;
    kartlar.push(yKart);
    oyunRender();
  }
}

function getRandomCard() {
  let rastgeleKart = Math.floor(Math.random() * 13 + 1);
  if (rastgeleKart == 1) {
    return 11;
  } else if (rastgeleKart == 11 || rastgeleKart == 12 || rastgeleKart == 13) {
    return 10;
  } else {
    return rastgeleKart;
  }
}
