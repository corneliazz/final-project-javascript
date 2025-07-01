# Terminal-Quiz

🎮 Terminal-Quiz mit Node.js

Willkommen zu einem kleinen interaktiven Quizspiel im Terminal! Dieses Projekt nutzt `readline-sync` für Benutzereingaben und `chalk` für farbige Ausgaben.

## 📦 Features

- Fragt den Namen des Spielers ab
- Stellt 5 zufällige Fragen aus einem Fragenpool
- Gibt Rückmeldung über richtige oder falsche Antworten
- Zeigt die erreichte Punktzahl am Ende
- Möglichkeit, das Spiel beliebig oft zu wiederholen

## 🛠️ Voraussetzungen

- Node.js (Version 14 oder höher empfohlen)
- `npm` (Node Package Manager)

## 🧩 Installation

1. Repository klonen oder Code herunterladen:
   ```bash
   git clone <REPO-URL>
   cd <projektverzeichnis>


2. Abhängigkeiten installieren:

   ```bash
   npm install
   ```

   Falls `readline-sync` und `chalk` nicht im `package.json` enthalten sind, installiere sie manuell:

   ```bash
   npm install readline-sync chalk
   ```

## 🚀 Verwendung

1. Stelle sicher, dass du eine Datei `questions.js` hast, die so aufgebaut ist:

   ```js
   export const questions = [
       { question: 'Was ist die Hauptstadt von Frankreich?', answer: 'Paris' },
       { question: 'Welches Jahr hatte 366 Tage zuletzt?', answer: '2020' },
       // weitere Fragen...
   ];
   ```

2. Starte das Quiz im Terminal:

   ```bash
   node index.js
   ```

3. Folge den Anweisungen im Terminal, beantworte Fragen und habe Spaß!

## 📁 Projektstruktur

```
projekt/
│
├── index.js          // Hauptprogramm
├── questions.js      // Fragen und Antworten
├── package.json      // Abhängigkeiten
└── README.md         // Diese Datei
```

## ✨ Beispielausgabe

```bash
 *** Willkommen zum Quiz! ***

Wie ist dein Name? Lina

Viel Erfolg, Lina!

1. Was ist die Hauptstadt von Frankreich? Paris
Richtig!

...

Lina, du hast 4 von 5 Punkten erreicht.

Möchtest du noch einmal spielen? (ja/nein):
```

## 🧠 Tipps

* Achte darauf, dass die Antworten in `questions.js` genau mit der erwarteten Eingabe übereinstimmen (Groß-/Kleinschreibung wird ignoriert).
* Du kannst beliebig viele Fragen hinzufügen – es werden zufällig 5 ausgewählt.

---

## Mögliche Erweiterungen

- Punkte speichern
- Kategorien
- Schwierigkeitesgrade
- Multiple Choice, Mehrfachantworten

---

Viel Spaß beim Quizzen! 🎉




