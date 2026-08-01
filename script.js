/* =====================================
   LOVE GIFT
   Ghovin ❤️ Wulan
===================================== */


/* =====================================
   LOGIN
===================================== */

function login() {

    const password = document.getElementById("password");

    if (!password) return;

    if (password.value === "17-07-2026") {

        const loginPage = document.getElementById("login");

        if (loginPage) {
            loginPage.classList.add("hidden");
        }

        showPage("home");
        typeText();
        startCounter();
        confetti();
        startMusic();

    } else {

        alert("❤️ Coba masukkan tanggal spesial kita");

    }
}


/* =====================================
   PAGE SYSTEM
===================================== */

function showPage(id) {

    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });

    const page = document.getElementById(id);

    if (page) {

        page.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
}


function nextSection(id) {
    showPage(id);
}


/* =====================================
   TYPING EFFECT
===================================== */

const typingMessage =
    "Selamat datang di dunia kecil kita, Wulan ❤️";

let typingIndex = 0;

function typeText() {

    const box = document.getElementById("typing");

    if (!box) return;

    box.innerHTML = "";
    typingIndex = 0;

    function write() {

        if (typingIndex < typingMessage.length) {

            box.innerHTML += typingMessage.charAt(typingIndex);

            typingIndex++;

            setTimeout(write, 70);
        }
    }

    write();
}


/* =====================================
   MUSIC
===================================== */

const music = document.getElementById("music");


function startMusic() {

    if (!music) return;

    music.volume = 0.5;

    music.play().catch(() => {
        console.log("Musik menunggu interaksi pengguna");
    });
}


function toggleMusic() {

    if (!music) return;

    if (music.paused) {

        music.play().catch(() => {});

    } else {

        music.pause();

    }
}


/* =====================================
   DARK MODE
===================================== */

function toggleTheme() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );
}


if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}


/* =====================================
   GALLERY
===================================== */

const photos = [

    "assets/photos/wulan1.jpg",
    "assets/photos/wulan2.jpg",
    "assets/photos/wulan3.jpg",
    "assets/photos/wulan4.jpg",
    "assets/photos/wulan5.jpg"

];

let photoIndex = 0;


function nextPhoto() {

    photoIndex++;

    if (photoIndex >= photos.length) {
        photoIndex = 0;
    }

    const img = document.getElementById("photo");

    if (img) {
        img.src = photos[photoIndex];
    }
}


function prevPhoto() {

    photoIndex--;

    if (photoIndex < 0) {
        photoIndex = photos.length - 1;
    }

    const img = document.getElementById("photo");

    if (img) {
        img.src = photos[photoIndex];
    }
}


/* =====================================
   LIGHTBOX
===================================== */

function openLightbox() {

    const box = document.getElementById("lightbox");
    const image = document.getElementById("lightboxImg");
    const photo = document.getElementById("photo");

    if (box && image && photo) {

        box.style.display = "flex";
        image.src = photo.src;

    }
}


function closeLightbox() {

    const box = document.getElementById("lightbox");

    if (box) {
        box.style.display = "none";
    }
}


/* =====================================
   RELATIONSHIP COUNTER
===================================== */

function startCounter() {

    const startDate = new Date("2026-07-17T00:00:00");

    function update() {

        const now = new Date();

        const difference = now - startDate;

        const days = Math.max(
            0,
            Math.floor(
                difference / (1000 * 60 * 60 * 24)
            )
        );

        const counter =
            document.getElementById("daysTogether");

        if (counter) {

            counter.innerHTML =
                days + " Hari ❤️";

        }
    }

    update();

    setInterval(update, 1000);
}


/* =====================================
   REASONS
===================================== */

const reasons = [

    "Aku suka senyummu ❤️",
    "Aku suka caramu membuatku bahagia",
    "Kamu selalu membuat hari lebih indah",
    "Aku nyaman saat bersamamu",
    "Kamu adalah orang spesial bagiku",
    "Aku suka semua cerita bersamamu",
    "Kamu membuatku ingin menjadi lebih baik",
    "Aku bersyukur bisa mengenalmu"

];


function showReason() {

    const random =
        Math.floor(Math.random() * reasons.length);

    const text =
        document.getElementById("reasonText");

    if (text) {
        text.innerHTML = reasons[random];
    }
}


/* =====================================
   LETTER
===================================== */

function openLetter() {

    const envelope =
        document.querySelector(".envelope");

    if (envelope) {
        envelope.classList.toggle("open");
    }
}


/* =====================================
   GIFT
===================================== */

function openGift() {

    const text =
        document.getElementById("giftText");

    if (text) {

        text.innerHTML =
            "🎉 Surprise! Kamu adalah hadiah terindah dalam hidupku ❤️";

    }

    fireworks();
}


/* =====================================
   GUEST BOOK
===================================== */

function saveMessage() {

    const input =
        document.getElementById("message");

    if (!input) return;

    if (input.value.trim() === "") {

        alert("Tulis pesan dulu ya ❤️");

        return;
    }

    localStorage.setItem(
        "wulanMessage",
        input.value
    );

    showMessage();

    input.value = "";
}


function showMessage() {

    const area =
        document.getElementById("showMessage");

    const data =
        localStorage.getItem("wulanMessage");

    if (area && data) {

        area.innerHTML =
            "<div class='card'>💌 " +
            data +
            "</div>";

    }
}


/* =====================================
   QUIZ
===================================== */

function correctAnswer() {

    alert("😎 Benar! Jawabannya tentu Ghovin ❤️");

}


function wrongAnswer() {

    alert("🙈 Salah! Coba lagi 😆");

}


/* =====================================
   FLOATING HEART
===================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 800);


/* =====================================
   SAKURA
===================================== */

function createSakura() {

    const sakura =
        document.createElement("div");

    sakura.className = "sakura";

    sakura.innerHTML = "🌸";

    sakura.style.left =
        Math.random() * 100 + "vw";

    sakura.style.fontSize =
        (15 + Math.random() * 20) + "px";

    document.body.appendChild(sakura);

    setTimeout(() => {
        sakura.remove();
    }, 10000);
}

setInterval(createSakura, 900);


/* =====================================
   STARS
===================================== */

function createStars() {

    for (let i = 0; i < 80; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 100 + "vh";

        const size =
            Math.random() * 3 + 1;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        document.body.appendChild(star);
    }
}

createStars();


/* =====================================
   CONFETTI
===================================== */

function confetti() {

    for (let i = 0; i < 50; i++) {

        const c =
            document.createElement("div");

        c.innerHTML = "🎉";

        c.style.position = "fixed";

        c.style.left =
            Math.random() * 100 + "vw";

        c.style.top = "-30px";

        c.style.fontSize = "20px";

        c.style.transition =
            "5s linear";

        c.style.zIndex = "99999";

        document.body.appendChild(c);

        setTimeout(() => {

            c.style.transform =
                "translateY(110vh) rotate(720deg)";

            c.style.opacity = "0";

        }, 100);

        setTimeout(() => {
            c.remove();
        }, 5200);
    }
}


/* =====================================
   FIREWORKS
===================================== */

function fireworks() {

    for (let i = 0; i < 50; i++) {

        const fire =
            document.createElement("div");

        fire.className = "fire";

        fire.style.left = "50%";
        fire.style.top = "50%";

        fire.style.setProperty(
            "--x",
            (Math.random() * 400 - 200) + "px"
        );

        fire.style.setProperty(
            "--y",
            (Math.random() * 400 - 200) + "px"
        );

        document.body.appendChild(fire);

        setTimeout(() => {
            fire.remove();
        }, 2000);
    }
}


/* =====================================
   MINI GAME
===================================== */

let gameScore = 0;
let gameTimer = null;


function startGame() {

    const area =
        document.getElementById("gameArea");

    if (!area) return;

    area.innerHTML = "";

    gameScore = 0;

    const score =
        document.createElement("h3");

    score.id = "score";

    score.innerHTML = "Score : 0";

    area.appendChild(score);


    gameTimer = setInterval(() => {

        const heart =
            document.createElement("button");

        heart.innerHTML = "❤️";

        heart.className = "game-heart";

        heart.onclick = function () {

            gameScore++;

            score.innerHTML =
                "Score : " + gameScore;

            heart.remove();
        };

        area.appendChild(heart);

    }, 700);


    setTimeout(() => {

        clearInterval(gameTimer);

        alert(
            "Game selesai ❤️ Skor kamu : " +
            gameScore
        );

    }, 30000);
}


/* =====================================
   INITIALIZE
===================================== */

showMessage();


window.addEventListener("load", function () {

    const loading =
        document.getElementById("loading");

    if (loading) {
        loading.style.display = "none";
    }

});
window.addEventListener("load", function () {

    const splash = document.getElementById("splash");

    if (splash) {

        setTimeout(() => {

            splash.style.opacity = "0";
            splash.style.pointerEvents = "none";

            setTimeout(() => {
                splash.style.display = "none";
            }, 500);

        }, 1500);

    }

});