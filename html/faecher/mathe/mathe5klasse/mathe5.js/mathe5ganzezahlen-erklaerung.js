document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (startBtn) {
        startBtn.onclick = () => {
            window.location.href = "/html/faecher/mathe/mathe5klasse/mathe5.html/mathe5ganzezahlen.html";
        };
    }

    if (prevBtn) {
        prevBtn.onclick = () => {
            window.history.back();
        };
    }
});
