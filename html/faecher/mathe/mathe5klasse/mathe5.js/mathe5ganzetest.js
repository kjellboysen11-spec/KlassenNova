let progress = 0;
let goodAnswer = 0;
const totalTasks = 15; 

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

function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const tasksList = [
    aufgabe1, aufgabe2, aufgabe3, aufgabe4, aufgabe5,
    aufgabe6, aufgabe7, aufgabe8, aufgabe9, aufgabe10,
    aufgabe11, aufgabe12, aufgabe13, aufgabe14, aufgabe15
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
    const correctAnswer = 453;
    
    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "1";
    if (aufgabenText) aufgabenText.innerText = "267 + 186 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([453, 443, 463, 447]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe2);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe2);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe2);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe2);
    }
}

function aufgabe2() {
    const correctAnswer = 275;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "2";
    if (aufgabenText) aufgabenText.innerText = "512 - 237 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([275, 285, 265, 281]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe3);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe3);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe3);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe3);
    }
}

function aufgabe3() {
    const correctAnswer = 623;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "3";
    if (aufgabenText) aufgabenText.innerText = "348 + 275 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([623, 613, 633, 617]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe4);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe4);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe4);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe4);
    }
}

function aufgabe4() {
    const correctAnswer = 276;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "4";
    if (aufgabenText) aufgabenText.innerText = "604 - 328 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([276, 286, 266, 282]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe5);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe5);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe5);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe5);
    }
}

function aufgabe5() {
    const correctAnswer = 843;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "5";
    if (aufgabenText) aufgabenText.innerText = "456 + 387 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([843, 833, 853, 837]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe6);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe6);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe6);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe6);
    }
}

function aufgabe6() {
    const correctAnswer = 265;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "6";
    if (aufgabenText) aufgabenText.innerText = "723 - 458 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([265, 275, 255, 271]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe7);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe7);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe7);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe7);
    }
}

function aufgabe7() {
    const correctAnswer = 835;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "7";
    if (aufgabenText) aufgabenText.innerText = "589 + 246 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([835, 825, 845, 829]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe8);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe8);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe8);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe8);
    }
}

function aufgabe8() {
    const correctAnswer = 433;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "8";
    if (aufgabenText) aufgabenText.innerText = "800 - 367 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([433, 443, 423, 439]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe9);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe9);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe9);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe9);
    }
}

function aufgabe9() {
    const correctAnswer = 932;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "9";
    if (aufgabenText) aufgabenText.innerText = "674 + 258 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([932, 922, 942, 926]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe10);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe10);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe10);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe10);
    }
}

function aufgabe10() {
    const correctAnswer = 437;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "10";
    if (aufgabenText) aufgabenText.innerText = "913 - 476 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([437, 447, 427, 443]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe11);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe11);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe11);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe11);
    }
}

function aufgabe11() {
    const correctAnswer = 683;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "11";
    if (aufgabenText) aufgabenText.innerText = "385 + 298 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([683, 673, 693, 677]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe12);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe12);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe12);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe12);
    }
}

function aufgabe12() {
    const correctAnswer = 362;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "12";
    if (aufgabenText) aufgabenText.innerText = "651 - 289 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([362, 372, 352, 368]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe13);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe13);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe13);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe13);
    }
}

function aufgabe13() {
    const correctAnswer = 853;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "13";
    if (aufgabenText) aufgabenText.innerText = "497 + 356 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([853, 843, 863, 847]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe14);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe14);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe14);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe14);
    }
}

function aufgabe14() {
    const correctAnswer = 467;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "14";
    if (aufgabenText) aufgabenText.innerText = "842 - 375 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([467, 477, 457, 463]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, aufgabe15);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, aufgabe15);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, aufgabe15);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, aufgabe15);
    }
}

function aufgabe15() {
    const correctAnswer = 847;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "15";
    if (aufgabenText) aufgabenText.innerText = "568 + 279 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        const answers = shuffle([847, 837, 857, 841]);

        btn1.innerText = answers[0];
        btn2.innerText = answers[1];
        btn3.innerText = answers[2];
        btn4.innerText = answers[3];

        btn1.onclick = () => checkAnswer(answers[0], correctAnswer, null);
        btn2.onclick = () => checkAnswer(answers[1], correctAnswer, null);
        btn3.onclick = () => checkAnswer(answers[2], correctAnswer, null);
        btn4.onclick = () => checkAnswer(answers[3], correctAnswer, null);
    }
}

function showResults() {
    fetch('http://localhost:3000/api/save-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            level: "Test",
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