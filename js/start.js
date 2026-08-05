document.getElementById("homeCard").hidden = false;

function showHome() {
    document.getElementById("streakCard").hidden = true;
    document.getElementById("lernCard").hidden = true;
    document.getElementById("settingsCard").hidden = true;
    document.getElementById("homeCard").hidden = false;
}

function showLern() {
    document.getElementById("homeCard").hidden = true;
    document.getElementById("streakCard").hidden = true;
    document.getElementById("settingsCard").hidden = true;
    document.getElementById("lernCard").hidden = false;
}

function showStreak() {
    document.getElementById("homeCard").hidden = true;
    document.getElementById("lernCard").hidden = true;
    document.getElementById("settingsCard").hidden = true;
    document.getElementById("streakCard").hidden = false;
}

function showSettings() {
    document.getElementById("homeCard").hidden = true;
    document.getElementById("lernCard").hidden = true;
    document.getElementById("streakCard").hidden = true;
    document.getElementById("settingsCard").hidden = false;
}

document.querySelectorAll("#homeButton").forEach(btn => btn.addEventListener("click", showHome));
document.querySelectorAll("#streakButton").forEach(btn => btn.addEventListener("click", showStreak));
document.querySelectorAll("#cardButton").forEach(btn => btn.addEventListener("click", showLern));
document.querySelectorAll("#settingsButton").forEach(btn => btn.addEventListener("click", showSettings));