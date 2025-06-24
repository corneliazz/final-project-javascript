// Import readline-sync und chalk
import readlineSync from 'readline-sync';
import chalk from 'chalk';

// Begrüßung
console.log(chalk.magenta.bold.underline('*** Willkommen zum Quiz! ***'));

// Array mit Fragen erstellen (kann erweitert werden)
const questions = [
    {question: 'Woraus besteht ein Diamant?', answer: 'Kohlenstoff'},
    {question: 'Mit wie vielen Figuren startet ein Schachspiel?', answer: '32'},
    {question: 'Wer schrieb die Novelle "Der Schimmelreiter"?', answer: 'Theodor Storm'},
    {question: 'Was ist die Hauptstadt von Frankreich?', answer: 'Paris'},
    {question: 'Wie viele Planeten gibt es in unserem Sonnensystem?', answer: '8'},
    {question: 'Was ist die chemische Formel für Wasser?', answer: 'H2O'},
    {question: 'Wer malte die Mona Lisa?', answer: 'Leonardo da Vinci'},
    {question: 'Wie viele Bundesländer hat Deutschland?', answer: '16'},
    {question: 'Wer entdeckte Penicillin?', answer: 'Alexander Fleming'}
];

let score = 0;

// forEach geht automatisch durch jedes Element im Array und führt die Funktion für jedes Element aus.
questions.forEach(function(q, index) {
  const userAnswer = readlineSync.question(`${index + 1}. ${q.question} `);
  if (userAnswer.trim() === q.answer) {
    console.log(chalk.green.bold('Richtig!\n')); 
    score++   
} else {
    console.log(chalk.red.bold(`Falsch! Die Richtige Antwort ist: ${q.answer}\n`));
  }
});

console.log(chalk.bgCyanBright.bold(`Herzlichen Glückwunsch! Du hast: ${score} von ${questions.length} Punkten`));



