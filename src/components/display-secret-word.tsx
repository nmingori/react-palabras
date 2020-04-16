import React, {useState, useEffect} from 'react';
import { GameStatus } from './game-status';

const DisplaySecretWord = ({secretWord, usedLetters, gameStatus, setGameStatus, color}: any) => {
   
    const [wordOutput, setWordOutput] = useState<string[]>([]);

    useEffect(() => {
        const output = secretWord.toUpperCase().split("").map((letter: string, i: number) => {
            if (i === 0) return letter.toUpperCase();

            if (usedLetters.includes(letter.toUpperCase())) {
                return letter;
            } else {
                return "-";
            }
        });
        
        if (output.length > 1 && !output.includes("-")) setGameStatus(GameStatus.WIN);

        setWordOutput(output);
    }, [secretWord, usedLetters]);
   
    const winnerColor = (): string => {
        if (gameStatus === GameStatus.WIN) {
            return "-color-white -bg-" + color;
        }

        return "";
    }

    const boxTitle = (): string => {
        return (gameStatus === GameStatus.PLAYING) ? "Adiviná la palabra:" : gameStatus;
    }

    return (
        <div className={"secret-word-container -border-" + color }> 
            <p className="box-title -mb-2">{boxTitle()}</p>

            <ul className="display-secret-word">
                {wordOutput.map((letter, i) => (
                    <li className={`btn -btn-sm ${winnerColor()}`} key={i}>{letter}</li>
                ))}
            </ul>
        </div>
    )
}

export default DisplaySecretWord;