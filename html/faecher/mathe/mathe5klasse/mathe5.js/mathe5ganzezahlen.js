function button() {
    const btn1 = document.getElementById("auswahl1");
    const btn2 = document.getElementById("auswahl2");
    const btn3 = document.getElementById("auswahl3");
    const btn4 = document.getElementById("auswahl4");
    const btn5 = document.getElementById("auswahl5");

    const zielPfad1 = "/html/faecher/mathe/mathe5klasse/mathe5.html/mathe5ganzelevel1.html";
    const zielPfad2 = "/html/faecher/mathe/mathe5klasse/mathe5.html/mathe5ganzelevel1.html";
    const zielPfad3 = "/html/faecher/mathe/mathe5klasse/mathe5.html/mathe5ganzelevel2.html";
    const zielPfad4 = "/html/faecher/mathe/mathe5klasse/mathe5.html/mathe5ganzelevel1.html";
    const zielPfad5 = "/html/faecher/mathe/mathe5klasse/mathe5.html/mathe5ganzelevel1.html";

    if (btn1) {
        btn1.onclick = () => { window.location.href = zielPfad1; };
    }
    if (btn2) {
        btn2.onclick = () => { window.location.href = zielPfad2; };
    }
    if (btn3) {
        btn3.onclick = () => { window.location.href = zielPfad3; };
    }
    if (btn4) {
        btn4.onclick = () => { window.location.href = zielPfad4; };
    }
    if (btn5) {
        btn5.onclick = () => { window.location.href = zielPfad5; };
    }
}

button();

button();