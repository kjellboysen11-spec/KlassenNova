let progress = 0;
let goodAnswer = 0;
const totalTasks = 10; 

document.addEventListener("DOMContentLoaded", function () {
    updateProgressUI();
    aufgabe1();
});

function updateProgressUI() {
    const currentStepEl = document.getElementById("currentStep");
    const totalStepsEl = document.getElementById("totalSteps");
    const progressEl = document.getElementById("progress");

    if (currentStepEl) currentStepEl.innerText = progress;
    if (totalStepsEl) totalStepsEl.innerText = totalTasks;
    
    if (progressEl) {
        let percentage = (progress / totalTasks) * 100;
        progressEl.style.width = percentage + "%";
    }
}

function checkAnswer(selectedAnswer, correctAnswer, nextTaskFunction) {
    progress++; 

    if (selectedAnswer === correctAnswer) {
        goodAnswer++;
        console.log("Richtig! Punkte:", goodAnswer);
    } else {
        console.log("Falsch!");
    }

    updateProgressUI();

    if (nextTaskFunction) {
        nextTaskFunction();
    } else {
        showResults();
    }
}

function aufgabe1() {
    const correctAnswer = 49;
    
    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "1";
    if (aufgabenText) aufgabenText.innerText = "85 - 36 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "49";
        btn2.innerText = "51";
        btn3.innerText = "43";
        btn4.innerText = "55";

        btn1.onclick = () => checkAnswer(49, correctAnswer, aufgabe2);
        btn2.onclick = () => checkAnswer(51, correctAnswer, aufgabe2);
        btn3.onclick = () => checkAnswer(43, correctAnswer, aufgabe2);
        btn4.onclick = () => checkAnswer(55, correctAnswer, aufgabe2);
    }
}

function aufgabe2() {
    const correctAnswer = 54;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "2";
    if (aufgabenText) aufgabenText.innerText = "92 - 38 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "58";
        btn2.innerText = "54";
        btn3.innerText = "62";
        btn4.innerText = "48";

        btn1.onclick = () => checkAnswer(58, correctAnswer, aufgabe3);
        btn2.onclick = () => checkAnswer(54, correctAnswer, aufgabe3);
        btn3.onclick = () => checkAnswer(62, correctAnswer, aufgabe3);
        btn4.onclick = () => checkAnswer(48, correctAnswer, aufgabe3);
    }
}

function aufgabe3() {
    const correctAnswer = 35;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "3";
    if (aufgabenText) aufgabenText.innerText = "73 - 38 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "39";
        btn2.innerText = "42";
        btn3.innerText = "35";
        btn4.innerText = "27";

        btn1.onclick = () => checkAnswer(39, correctAnswer, aufgabe4);
        btn2.onclick = () => checkAnswer(42, correctAnswer, aufgabe4);
        btn3.onclick = () => checkAnswer(35, correctAnswer, aufgabe4);
        btn4.onclick = () => checkAnswer(27, correctAnswer, aufgabe4);
    }
}

function aufgabe4() {
    const correctAnswer = 68;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "4";
    if (aufgabenText) aufgabenText.innerText = "124 - 56 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "68";
        btn2.innerText = "74";
        btn3.innerText = "62";
        btn4.innerText = "76";

        btn1.onclick = () => checkAnswer(68, correctAnswer, aufgabe5);
        btn2.onclick = () => checkAnswer(74, correctAnswer, aufgabe5);
        btn3.onclick = () => checkAnswer(62, correctAnswer, aufgabe5);
        btn4.onclick = () => checkAnswer(76, correctAnswer, aufgabe5);
    }
}

function aufgabe5() {
    const correctAnswer = 44;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "5";
    if (aufgabenText) aufgabenText.innerText = "91 - 47 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "52";
        btn2.innerText = "48";
        btn3.innerText = "44";
        btn4.innerText = "39";

        btn1.onclick = () => checkAnswer(52, correctAnswer, aufgabe6);
        btn2.onclick = () => checkAnswer(48, correctAnswer, aufgabe6);
        btn3.onclick = () => checkAnswer(44, correctAnswer, aufgabe6);
        btn4.onclick = () => checkAnswer(39, correctAnswer, aufgabe6);
    }
}

function aufgabe6() {
    const correctAnswer = 39;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "6";
    if (aufgabenText) aufgabenText.innerText = "112 - 73 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "45";
        btn2.innerText = "39";
        btn3.innerText = "41";
        btn4.innerText = "34";

        btn1.onclick = () => checkAnswer(45, correctAnswer, aufgabe7);
        btn2.onclick = () => checkAnswer(39, correctAnswer, aufgabe7);
        btn3.onclick = () => checkAnswer(41, correctAnswer, aufgabe7);
        btn4.onclick = () => checkAnswer(34, correctAnswer, aufgabe7);
    }
}

function aufgabe7() {
    const correctAnswer = 75;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "7";
    if (aufgabenText) aufgabenText.innerText = "134 - 59 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "81";
        btn2.innerText = "69";
        btn3.innerText = "75";
        btn4.innerText = "78";

        btn1.onclick = () => checkAnswer(81, correctAnswer, aufgabe8);
        btn2.onclick = () => checkAnswer(69, correctAnswer, aufgabe8);
        btn3.onclick = () => checkAnswer(75, correctAnswer, aufgabe8);
        btn4.onclick = () => checkAnswer(78, correctAnswer, aufgabe8);
    }
}

function aufgabe8() {
    const correctAnswer = 66;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "8";
    if (aufgabenText) aufgabenText.innerText = "121 - 55 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "66";
        btn2.innerText = "72";
        btn3.innerText = "59";
        btn4.innerText = "64";

        btn1.onclick = () => checkAnswer(66, correctAnswer, aufgabe9);
        btn2.onclick = () => checkAnswer(72, correctAnswer, aufgabe9);
        btn3.onclick = () => checkAnswer(59, correctAnswer, aufgabe9);
        btn4.onclick = () => checkAnswer(64, correctAnswer, aufgabe9);
    }
}

function aufgabe9() {
    const correctAnswer = 47;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "9";
    if (aufgabenText) aufgabenText.innerText = "105 - 58 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "53";
        btn2.innerText = "47";
        btn3.innerText = "42";
        btn4.innerText = "51";

        btn1.onclick = () => checkAnswer(53, correctAnswer, aufgabe10);
        btn2.onclick = () => checkAnswer(47, correctAnswer, aufgabe10);
        btn3.onclick = () => checkAnswer(42, correctAnswer, aufgabe10);
        btn4.onclick = () => checkAnswer(51, correctAnswer, aufgabe10);
    }
}

function aufgabe10() {
    const correctAnswer = 78; 

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "10";
    if (aufgabenText) aufgabenText.innerText = "135 - 57 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "82";
        btn2.innerText = "74";
        btn3.innerText = "78";
        btn4.innerText = "85";

        btn1.onclick = () => checkAnswer(82, correctAnswer, null);
        btn2.onclick = () => checkAnswer(74, correctAnswer, null);
        btn3.onclick = () => checkAnswer(78, correctAnswer, null);
        btn4.onclick = () => checkAnswer(85, correctAnswer, null);
    }
}

function showResults() {
    fetch('http://localhost:3000/api/save-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            level: "Level 1",
            punkte: goodAnswer
        })
    });

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    
    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");
    const btnWeiter = document.getElementById("submitBtn5");
    const btnWiederholen = document.getElementById("submitBtn6");
    
    if (taskTitle) taskTitle.innerText = "Fertig!";
    if (aufgabenText) {
        aufgabenText.innerText = `Du hast ${goodAnswer} von ${totalTasks} Aufgaben richtig gelöst!`;
    }
    
    if (btn1) btn1.style.display = "none";
    if (btn2) btn2.style.display = "none";
    if (btn3) btn3.style.display = "none";
    if (btn4) btn4.style.display = "none";

    if (btnWeiter) btnWeiter.hidden = false;
    if (btnWiederholen) btnWiederholen.hidden = false;

    if (btnWeiter) {
        btnWeiter.onclick = () => {
            window.location.href = "mathe5level2.html";
        };
    }

    if (btnWiederholen) {
        btnWiederholen.onclick = () => {
            window.location.reload();
        };
    }
}