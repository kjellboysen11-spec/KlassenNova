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

const tasksList = [
    aufgabe1, aufgabe2, aufgabe3, aufgabe4, aufgabe5,
    aufgabe6, aufgabe7, aufgabe8, aufgabe9, aufgabe10
];

function goToPreviousTask() {
    if (progress > 0) {
        progress--;
        updateProgressUI();
        tasksList[progress]();
    }
}

function skipTask() {
    if (progress < totalTasks) {
        progress++;
        updateProgressUI();

        if (progress < totalTasks) {
            tasksList[progress]();
        } else {
            showResults();
        }
    }
}

document.getElementById("prevBtn").onclick = goToPreviousTask;
document.getElementById("nextBtn").onclick = skipTask;

function aufgabe1() {
    const correctAnswer = 65;
    
    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "1";
    if (aufgabenText) aufgabenText.innerText = "38 + 27 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "65";
        btn2.innerText = "61";
        btn3.innerText = "71";
        btn4.innerText = "58";

        btn1.onclick = () => checkAnswer(65, correctAnswer, aufgabe2);
        btn2.onclick = () => checkAnswer(61, correctAnswer, aufgabe2);
        btn3.onclick = () => checkAnswer(71, correctAnswer, aufgabe2);
        btn4.onclick = () => checkAnswer(58, correctAnswer, aufgabe2);
    }
}

function aufgabe2() {
    const correctAnswer = 64;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "2";
    if (aufgabenText) aufgabenText.innerText = "93 - 29 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "74";
        btn2.innerText = "64";
        btn3.innerText = "68";
        btn4.innerText = "58";

        btn1.onclick = () => checkAnswer(74, correctAnswer, aufgabe3);
        btn2.onclick = () => checkAnswer(64, correctAnswer, aufgabe3);
        btn3.onclick = () => checkAnswer(68, correctAnswer, aufgabe3);
        btn4.onclick = () => checkAnswer(58, correctAnswer, aufgabe3);
    }
}

function aufgabe3() {
    const correctAnswer = 84;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "3";
    if (aufgabenText) aufgabenText.innerText = "46 + 38 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "74";
        btn2.innerText = "84";
        btn3.innerText = "88";
        btn4.innerText = "81";

        btn1.onclick = () => checkAnswer(74, correctAnswer, aufgabe4);
        btn2.onclick = () => checkAnswer(84, correctAnswer, aufgabe4);
        btn3.onclick = () => checkAnswer(88, correctAnswer, aufgabe4);
        btn4.onclick = () => checkAnswer(81, correctAnswer, aufgabe4);
    }
}

function aufgabe4() {
    const correctAnswer = 75;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "4";
    if (aufgabenText) aufgabenText.innerText = "122 - 47 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "75";
        btn2.innerText = "85";
        btn3.innerText = "69";
        btn4.innerText = "79";

        btn1.onclick = () => checkAnswer(75, correctAnswer, aufgabe5);
        btn2.onclick = () => checkAnswer(85, correctAnswer, aufgabe5);
        btn3.onclick = () => checkAnswer(69, correctAnswer, aufgabe5);
        btn4.onclick = () => checkAnswer(79, correctAnswer, aufgabe5);
    }
}

function aufgabe5() {
    const correctAnswer = 86;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "5";
    if (aufgabenText) aufgabenText.innerText = "57 + 29 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "76";
        btn2.innerText = "86";
        btn3.innerText = "90";
        btn4.innerText = "83";

        btn1.onclick = () => checkAnswer(76, correctAnswer, aufgabe6);
        btn2.onclick = () => checkAnswer(86, correctAnswer, aufgabe6);
        btn3.onclick = () => checkAnswer(90, correctAnswer, aufgabe6);
        btn4.onclick = () => checkAnswer(83, correctAnswer, aufgabe6);
    }
}

function aufgabe6() {
    const correctAnswer = 48;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "6";
    if (aufgabenText) aufgabenText.innerText = "104 - 56 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "58";
        btn2.innerText = "48";
        btn3.innerText = "42";
        btn4.innerText = "54";

        btn1.onclick = () => checkAnswer(58, correctAnswer, aufgabe7);
        btn2.onclick = () => checkAnswer(48, correctAnswer, aufgabe7);
        btn3.onclick = () => checkAnswer(42, correctAnswer, aufgabe7);
        btn4.onclick = () => checkAnswer(54, correctAnswer, aufgabe7);
    }
}

function aufgabe7() {
    const correctAnswer = 107;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "7";
    if (aufgabenText) aufgabenText.innerText = "68 + 39 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "97";
        btn2.innerText = "107";
        btn3.innerText = "111";
        btn4.innerText = "104";

        btn1.onclick = () => checkAnswer(97, correctAnswer, aufgabe8);
        btn2.onclick = () => checkAnswer(107, correctAnswer, aufgabe8);
        btn3.onclick = () => checkAnswer(111, correctAnswer, aufgabe8);
        btn4.onclick = () => checkAnswer(104, correctAnswer, aufgabe8);
    }
}

function aufgabe8() {
    const correctAnswer = 76;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "8";
    if (aufgabenText) aufgabenText.innerText = "143 - 67 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "86";
        btn2.innerText = "76";
        btn3.innerText = "70";
        btn4.innerText = "82";

        btn1.onclick = () => checkAnswer(86, correctAnswer, aufgabe9);
        btn2.onclick = () => checkAnswer(76, correctAnswer, aufgabe9);
        btn3.onclick = () => checkAnswer(70, correctAnswer, aufgabe9);
        btn4.onclick = () => checkAnswer(82, correctAnswer, aufgabe9);
    }
}

function aufgabe9() {
    const correctAnswer = 85;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "9";
    if (aufgabenText) aufgabenText.innerText = "49 + 36 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "75";
        btn2.innerText = "85";
        btn3.innerText = "89";
        btn4.innerText = "82";

        btn1.onclick = () => checkAnswer(75, correctAnswer, aufgabe10);
        btn2.onclick = () => checkAnswer(85, correctAnswer, aufgabe10);
        btn3.onclick = () => checkAnswer(89, correctAnswer, aufgabe10);
        btn4.onclick = () => checkAnswer(82, correctAnswer, aufgabe10);
    }
}

function aufgabe10() {
    const correctAnswer = 68; 

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "10";
    if (aufgabenText) aufgabenText.innerText = "126 - 58 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "78";
        btn2.innerText = "68";
        btn3.innerText = "62";
        btn4.innerText = "74";

        btn1.onclick = () => checkAnswer(78, correctAnswer, null);
        btn2.onclick = () => checkAnswer(68, correctAnswer, null);
        btn3.onclick = () => checkAnswer(62, correctAnswer, null);
        btn4.onclick = () => checkAnswer(74, correctAnswer, null);
    }
}

function showResults() {
    fetch('http://localhost:3000/api/save-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            level: "Level 3",
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
            window.location.href = "/html/faecher/mathe/mathe5klasse/mathe5.html/mathe5ganzezahlen.html";
        };
    }

    if (btnWiederholen) {
        btnWiederholen.onclick = () => {
            window.location.reload();
        };
    }
}