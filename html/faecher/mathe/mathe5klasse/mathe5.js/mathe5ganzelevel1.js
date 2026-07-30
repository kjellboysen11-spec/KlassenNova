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
    const correctAnswer = 67;
    
    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "1";
    if (aufgabenText) aufgabenText.innerText = "48 + 19 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "64";
        btn2.innerText = "67";
        btn3.innerText = "72";
        btn4.innerText = "61";

        btn1.onclick = () => checkAnswer(64, correctAnswer, aufgabe2);
        btn2.onclick = () => checkAnswer(67, correctAnswer, aufgabe2);
        btn3.onclick = () => checkAnswer(72, correctAnswer, aufgabe2);
        btn4.onclick = () => checkAnswer(61, correctAnswer, aufgabe2);
    }
}

function aufgabe2() {
    const correctAnswer = 87;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "2";
    if (aufgabenText) aufgabenText.innerText = "68 + 19 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "80";
        btn2.innerText = "89";
        btn3.innerText = "98";
        btn4.innerText = "87";

        btn1.onclick = () => checkAnswer(80, correctAnswer, aufgabe3);
        btn2.onclick = () => checkAnswer(89, correctAnswer, aufgabe3);
        btn3.onclick = () => checkAnswer(98, correctAnswer, aufgabe3);
        btn4.onclick = () => checkAnswer(87, correctAnswer, aufgabe3)
    }
}

function aufgabe3() {
    const correctAnswer = 82;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "3";
    if (aufgabenText) aufgabenText.innerText = "43 + 39 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "74";
        btn2.innerText = "78";
        btn3.innerText = "85";
        btn4.innerText = "82";

        btn1.onclick = () => checkAnswer(74, correctAnswer, aufgabe4);
        btn2.onclick = () => checkAnswer(78, correctAnswer, aufgabe4);
        btn3.onclick = () => checkAnswer(85, correctAnswer, aufgabe4);
        btn4.onclick = () => checkAnswer(82, correctAnswer, aufgabe4);
    }
}

function aufgabe4() {
    const correctAnswer = 106;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "4";
    if (aufgabenText) aufgabenText.innerText = "19 + 87 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "99";
        btn2.innerText = "106";
        btn3.innerText = "112";
        btn4.innerText = "102";

        btn1.onclick = () => checkAnswer(99, correctAnswer, aufgabe5);
        btn2.onclick = () => checkAnswer(106, correctAnswer, aufgabe5);
        btn3.onclick = () => checkAnswer(112, correctAnswer, aufgabe5);
        btn4.onclick = () => checkAnswer(102, correctAnswer, aufgabe5);
    }
}

function aufgabe5() {
    const correctAnswer = 90;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "5";
    if (aufgabenText) aufgabenText.innerText = "56 + 34 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "87";
        btn2.innerText = "92";
        btn3.innerText = "90";
        btn4.innerText = "95";

        btn1.onclick = () => checkAnswer(87, correctAnswer, aufgabe6);
        btn2.onclick = () => checkAnswer(92, correctAnswer, aufgabe6);
        btn3.onclick = () => checkAnswer(90, correctAnswer, aufgabe6);
        btn4.onclick = () => checkAnswer(95, correctAnswer, aufgabe6);
    }
}

function aufgabe6() {
    const correctAnswer = 144;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "6";
    if (aufgabenText) aufgabenText.innerText = "87 + 57 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "147";
        btn2.innerText = "138";
        btn3.innerText = "144";
        btn4.innerText = "140";

        btn1.onclick = () => checkAnswer(147, correctAnswer, aufgabe7);
        btn2.onclick = () => checkAnswer(138, correctAnswer, aufgabe7);
        btn3.onclick = () => checkAnswer(144, correctAnswer, aufgabe7);
        btn4.onclick = () => checkAnswer(140, correctAnswer, aufgabe7);
    }
}

function aufgabe7() {
    const correctAnswer = 142;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "7";
    if (aufgabenText) aufgabenText.innerText = "103 + 39 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "139";
        btn2.innerText = "142";
        btn3.innerText = "140";
        btn4.innerText = "145";

        btn1.onclick = () => checkAnswer(139, correctAnswer, aufgabe8);
        btn2.onclick = () => checkAnswer(142, correctAnswer, aufgabe8);
        btn3.onclick = () => checkAnswer(140, correctAnswer, aufgabe8);
        btn4.onclick = () => checkAnswer(145, correctAnswer, aufgabe8);
    }
}

function aufgabe8() {
    const correctAnswer = 121;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "8";
    if (aufgabenText) aufgabenText.innerText = "99 + 22 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "122";
        btn2.innerText = "126";
        btn3.innerText = "119";
        btn4.innerText = "121";

        btn1.onclick = () => checkAnswer(122, correctAnswer, aufgabe9);
        btn2.onclick = () => checkAnswer(126, correctAnswer, aufgabe9);
        btn3.onclick = () => checkAnswer(119, correctAnswer, aufgabe9);
        btn4.onclick = () => checkAnswer(121, correctAnswer, aufgabe9);
    }
}

function aufgabe9() {
    const correctAnswer = 115;

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "9";
    if (aufgabenText) aufgabenText.innerText = "81 + 34 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "110";
        btn2.innerText = "118";
        btn3.innerText = "112";
        btn4.innerText = "115";

        btn1.onclick = () => checkAnswer(110, correctAnswer, aufgabe10);
        btn2.onclick = () => checkAnswer(118, correctAnswer, aufgabe10);
        btn3.onclick = () => checkAnswer(112, correctAnswer, aufgabe10);
        btn4.onclick = () => checkAnswer(115, correctAnswer, aufgabe10);
    }
}


function aufgabe10() {
    const correctAnswer = 154; 

    const taskTitle = document.getElementById("taskTitle");
    const aufgabenText = document.getElementById("aufgabenText");
    if (taskTitle) taskTitle.innerText = "10";
    if (aufgabenText) aufgabenText.innerText = "135 + 19 = ______";

    const btn1 = document.getElementById("submitBtn1");
    const btn2 = document.getElementById("submitBtn2");
    const btn3 = document.getElementById("submitBtn3");
    const btn4 = document.getElementById("submitBtn4");

    if (btn1 && btn2 && btn3 && btn4) {
        btn1.innerText = "157";
        btn2.innerText = "154";
        btn3.innerText = "150";
        btn4.innerText = "148";

        btn1.onclick = () => checkAnswer(157, correctAnswer, null);
        btn2.onclick = () => checkAnswer(154, correctAnswer, null);
        btn3.onclick = () => checkAnswer(150, correctAnswer, null);
        btn4.onclick = () => checkAnswer(148, correctAnswer, null);
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
            window.location.href = "/html/faecher/mathe/mathe5klasse/mathe5.html/mathe5ganzezahlen.html";
        };
    }

    if (btnWiederholen) {
        btnWiederholen.onclick = () => {
            window.location.reload();
        };
    }

   
}