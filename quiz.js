// Import readline-sync und chalk
import readlineSync from 'readline-sync';
import chalk from 'chalk';
// Import der Fragen aus Datei 'questions.js'
import { questions } from './questions.js'; 

// Begrüßung
console.log(chalk.magenta.bold.underline('\n *** Willkommen zum Quiz! ***\n'));


// Funktion zum Mischen des Arrays
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Haupt-Quiz-Funktion
function playQuiz() {
    let score = 0;

    // Fragen mischen und 5 auswählen
    shuffle(questions);
    const selectedQuestions = questions.slice(0, 5);

    selectedQuestions.forEach((q, index) => {
        const userAnswer = readlineSync.question(`${index + 1}. ${q.question} `);
        if (userAnswer.trim().toLowerCase() === q.answer.toLowerCase()) {
            console.log(chalk.green.bold(`Richtig!\n`));
            score++;
        } else {
            console.log(chalk.red.bold(`Falsch! Die richtige Antwort lautet: ${q.answer}\n`));
        }
    });

    // Punkte anzeigen
    console.log(chalk.yellow.bold(`Du hast ${score} von 5 Punkten erreicht.\n`));
}

// Spielschleife
let playAgain = true;

while (playAgain) {
    playQuiz();

    const answer = readlineSync.question('Möchtest du noch einmal spielen? (ja/nein): \n');
    if (answer.trim().toLowerCase() !== 'ja') {
        playAgain = false;
        console.log(chalk.cyan.bold('\nDanke fürs Spielen! Bis zum nächsten Mal!\n'));
    }
}
