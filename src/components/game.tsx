import * as React from 'react';
import {useEffect, useState} from 'react';
import Lives from './lives';
import Keyboard from './keyboard';
import DisplaySecretWord from './display-secret-word';
import {WordService, Word} from '../services/word-service';
import {GameStatus} from './game-status';
import iconBack from './images/back.svg';
import iconRefresh from './images/refresh.svg';


const MAX_LIVES = 5;

const Game = ({category, setCategory}: any) => {
    
    const wordService = new WordService();

    const [usedLetters, setUsedLetters] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.PLAYING);

    const [secretWord, setSecretWord] = useState<Word>({word:""});
    useEffect(() => {
        setSecretWord(wordService.getWordByCategory(category));       
    }, []);

    const [playerLives, setPlayerLives] = useState<number>(MAX_LIVES);
    useEffect(() => {
        if (playerLives === 0) setGameStatus(GameStatus.LOOSE);       
    }, [playerLives]);

    const pressNewLetter = (newLetter:string) => {
        if (!secretWord.word.includes(newLetter)) setPlayerLives(playerLives - 1);
        
        setUsedLetters([...usedLetters, newLetter]);
    }

    const retryInCategory = () => {
        setSecretWord(wordService.getWordByCategory(category)); 
        setPlayerLives(MAX_LIVES);
        setGameStatus(GameStatus.PLAYING);
        setUsedLetters([]);
    };

    return (
        <>
            <div>

                <div className="d-flex justify-content-center"><strong className="mr-1">Categoría:</strong>{category}</div>

                <Lives playerLives={playerLives} maxLives={MAX_LIVES} />

                <div>
                    <DisplaySecretWord usedLetters={usedLetters} secretWord={secretWord.word} gameStatus={gameStatus} setGameStatus={setGameStatus} />

                    {(gameStatus === GameStatus.PLAYING) && 
                        <>
                            <Keyboard pressNewLetter={pressNewLetter} usedLetters={usedLetters} />

                            {(playerLives === 1) &&
                                <p>Te queda una sola vida!!</p>
                            }
                        </>     
                    }
                </div>
            
                {(gameStatus !== GameStatus.PLAYING) &&
                    <div>
                        <p>{gameStatus}</p>

                        {(gameStatus === GameStatus.LOOSE) && 
                            <p>La palabra era <strong>{secretWord.word} {secretWord.translate && <span>({secretWord.translate})</span>}</strong></p>
                        }

                        <button type="button" className="btn btn-outline-dark btn-sm mb-3" onClick={() => retryInCategory()}><img src={iconRefresh} alt="refresh" style={{height: "18px"}}/> Volver a jugar</button>
                    </div>
                }

                <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => setCategory(null)}><img src={iconBack} alt="back" style={{height: "18px"}}/>  Volver al Menú</button>
            </div>
        </>
    )
}

export default Game;