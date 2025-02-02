

const messages = [
    "малыш ты норм????",
    "чо рял??",
    "ну ты точно не наеб????",
    "зай ну пжшка...",
    "ну ты просто подумай как мы факнемся круто....!",
    "мне будет ебать как грустно...",
    "очень очень грустго...",
    "ну коть не расстраивай хозяина...",
    "окей я петляю к сергею...",
    "та шучу шучу давац отвечай нормально! ❤️"
];

let messageIndex = 0;
let noClickCount = 0;
let videoAdded = false;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    const body = document.body;

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    noClickCount++;

    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    if (noClickCount === 10 && !videoAdded) {
        const video = document.createElement("video");
        video.src = "video.mp4";
        video.autoplay = true;
        video.loop = true;
        video.classList.add("fullscreen-video");

        body.innerHTML = ""; 
        body.appendChild(video);
        videoAdded = true;

        enterFullScreen(video);

      
        document.addEventListener("fullscreenchange", () => {
            if (!document.fullscreenElement) {
                enterFullScreen(video);
            }
        });
    }
}

function enterFullScreen(video) {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { 
        video.msRequestFullscreen();
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";  
}
