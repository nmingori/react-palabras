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
            <div className="d-flex justify-content-center mb-1"><strong className="mr-1">Categoría:</strong>{category}</div>

            <Lives playerLives={playerLives} maxLives={MAX_LIVES} />

            <DisplaySecretWord usedLetters={usedLetters} secretWord={secretWord.word} gameStatus={gameStatus} setGameStatus={setGameStatus} />

            <div className="container mb-5">
                {(gameStatus === GameStatus.PLAYING) ? ( 

                    <Keyboard pressNewLetter={pressNewLetter} usedLetters={usedLetters} />
                
                ) : (
        
                    <>
                        {(gameStatus === GameStatus.LOOSE) && 
                            <p>La palabra era <strong>{secretWord.word} {secretWord.translate && <span>({secretWord.translate})</span>}</strong></p>
                        }
                    </>

                )}
            </div>

            <div className="container">
                <div className="row justify-content-between justify-content-md-center">
                    <div className="col-lg-2 col-7 align-self-start">
                        <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => setCategory(null)}><img src={iconBack} alt="back" style={{height: "18px"}}/> Cambiar categoría</button>
                    </div>
                    <div className="col-lg-2 col-5 align-self-end">
                        <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => retryInCategory()}><img src={iconRefresh} alt="refresh" style={{height: "18px"}}/> Otra palabra</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game;