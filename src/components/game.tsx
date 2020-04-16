import React, {useState, useEffect} from 'react';
import Lives from './lives';
import Keyboard from './keyboard';
import DisplaySecretWord from './display-secret-word';
import {WordService, Word} from '../services/word-service';
import {GameStatus} from './game-status';
import FooterMenu from './footer-menu';


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
            <div className="-mb-2">
                <strong className="-mr-1">Categoría:</strong>{category.name}
            </div>

            <Lives 
                playerLives={playerLives} 
                maxLives={MAX_LIVES} 
            />

            <DisplaySecretWord 
                usedLetters={usedLetters} 
                secretWord={secretWord.word} 
                gameStatus={gameStatus} 
                setGameStatus={setGameStatus} 
                color={category.color}
            />
           
            <div className="-mb-4">
                {(gameStatus === GameStatus.PLAYING) ? ( 

                    <Keyboard 
                        pressNewLetter={pressNewLetter} 
                        usedLetters={usedLetters} 
                        playerLives={playerLives} 
                        color={category.color}
                    />
                
                ) : (
        
                    <>
                        {(gameStatus === GameStatus.LOOSE) && 
                            <p>La palabra era <strong className={"-color-" + category.color}>{secretWord.word} {secretWord.translate && <span>({secretWord.translate})</span>}</strong></p>
                        }
                    </>

                )}
            </div>

            <FooterMenu 
                retryInCategory={retryInCategory} 
                setCategory={setCategory} 
            />
        </>
    )
}

export default Game;