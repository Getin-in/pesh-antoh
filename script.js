document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Love is not about how many days we have been together, but how much we love each other every single day. ❤️",
        "You are my sunshine on a rainy day, my comfort in the storm. ☀️🌧",
        "With you, I have found my perfect rhythm, my melody of love. 🎶💖",
        "Loving you is like breathing; I can't stop, and I don't want to. 😘",
        "You are the CSS to my HTML, making everything beautiful. 💖",
        "Every time I look into your eyes, I see my forever. 🥰",
        "Your love is the most precious code my heart ever wrote. 💕"
    ];

    let currentQuoteIndex = 0;
    const quoteBox = document.getElementById("quote-box");
    function updateQuote() {
        quoteBox.textContent = quotes[currentQuoteIndex];
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }
    
    setTimeout(() => {
        updateQuote();
        setInterval(updateQuote, 4000);
    }, 1000);

    document.getElementById("loveButton").addEventListener("click", function () {
        let message = document.getElementById("hiddenMessage");
        if (message.style.display === "block") {
            message.style.opacity = "0";
            setTimeout(() => { message.style.display = "none"; }, 300);
        } else {
            message.style.display = "block";
            setTimeout(() => { message.style.opacity = "2"; }, 50);
        }
    });

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        alert("Right-click is disabled on this page for security reasons.");
    });

    // Floating Hearts Animation
    function createHearts() {
        const heartContainer = document.querySelector(".floating-hearts");
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement("div");
            heart.innerHTML = "💖";
            heart.classList.add("heart");
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${2 + Math.random() * 3}s`;
            heartContainer.appendChild(heart);
            setTimeout(() => { heart.remove(); }, 5000);
        }
    }
    setInterval(createHearts, 2000);

    // Personalized Greeting
    const greeting = document.getElementById("greeting");
    const hours = new Date().getHours();
    let greetingText = "Good evening, my love ❤️";
    if (hours < 12) greetingText = "Good morning, my sunshine ☀️";
    else if (hours < 18) greetingText = "Good afternoon, my heart 💕";
    greeting.textContent = greetingText;

    // Love Counter
    let startDate = new Date("2024-02-14");
    function updateLoveCounter() {
        let now = new Date();
        let difference = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
        document.getElementById("loveCounter").textContent = `Days in love: ${difference} ❤️`;
    }
    updateLoveCounter();
    
    // Background Music Toggle
    const music = document.getElementById("backgroundMusic");
    document.getElementById("musicToggle").addEventListener("click", function () {
        if (music.paused) {
            music.play();
            this.textContent = "🔊 Pause Love Song";
        } else {
            music.pause();
            this.textContent = "🎵 Play Love Song";
        }
    });

    // Hidden Love Letter
    document.getElementById("loveButton").addEventListener("click", function() {
        var hiddenMessage = document.getElementById("hiddenMessage");
        if (hiddenMessage.classList.contains("hidden")) {
            hiddenMessage.classList.remove("hidden");
        } else {
            hiddenMessage.classList.add("hidden");
        }
    });
});
