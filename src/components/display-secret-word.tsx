import * as React from 'react';
import {useEffect, useState} from 'react';
import { GameStatus } from './game-status';

const DisplaySecretWord = ({secretWord, usedLetters, gameStatus, setGameStatus}: any) => {
   
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
   
    const letterStyle = (letter: string): string => {
        if (gameStatus === GameStatus.WIN) {
            return "btn-success";
        }

        return (letter !== "-") ? "btn-danger" : "btn-outline-danger";
    }

    return (
        <div className="btn-group mb-4">
            {wordOutput.map((letter, i) => (
                <button type="button" className={`btn ${letterStyle(letter)} btn-sm`} key={i}>{letter}</button>
            ))}
        </div>
    )
}

export default DisplaySecretWord;