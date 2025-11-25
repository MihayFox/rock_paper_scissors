# Rock Paper Scissors Game

A simple, browser-based Rock Paper Scissors game built with vanilla JavaScript. Play against the computer in a classic best-of-5 match!

## Features

- Interactive prompt-based gameplay
- Score tracking for both player and computer
- Input validation to ensure valid choices
- Best-of-5 game format (first to 5 wins)
- Real-time score display on the page

## How to Play

1. Open [index.html](index.html) in your web browser
2. Enter your choice when prompted: `rock`, `paper`, or `scissors`
3. The computer will randomly select its choice
4. The winner of each round is determined by classic Rock Paper Scissors rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
5. First player to reach 5 points wins the game!

## Game Rules

- **Rock** beats **Scissors**
- **Scissors** beats **Paper**
- **Paper** beats **Rock**
- Same choices result in a tie (no points awarded)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/rock_paper_scissors.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rock_paper_scissors
   ```

3. Open [index.html](index.html) in your browser:
   ```bash
   open index.html
   # or
   xdg-open index.html  # Linux
   # or simply double-click the file
   ```

## Project Structure

```
rock_paper_scissors/
├── index.html    # Main HTML file
├── app.js        # Game logic and functionality
└── README.md     # Project documentation
```

## Code Overview

### Main Functions

- **`getComputerChoice()`** - Randomly selects rock, paper, or scissors for the computer
- **`getHumanChoice()`** - Prompts the user for input and validates the choice
- **`playRound()`** - Handles a single round of gameplay, determines the winner, and updates scores

### Game Flow

1. Game starts automatically when the page loads
2. Player is prompted to enter their choice
3. Computer makes a random selection
4. Winner is determined and scores are updated
5. Process repeats until one player reaches 5 points
6. Game ends with a victory or defeat message

## Technologies Used

- HTML5
- CSS (minimal)
- Vanilla JavaScript (ES6+)

## Future Enhancements

Potential features to add:
- Graphical user interface with buttons instead of prompts
- Animation for choices and results
- Sound effects
- Game statistics (win/loss ratio, longest streak)
- Difficulty levels (different computer strategies)
- Extended game modes (Rock Paper Scissors Lizard Spock)

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to fork this project and submit pull requests with improvements!
