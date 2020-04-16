import React from 'react';

const letterKeys:string[] = 'AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ'.split("");

const Keyboard = ({pressNewLetter, usedLetters, color, playerLives}: any) => {

    const isInUsedLetters = (letterKey: string): boolean => {
        return usedLetters.includes(letterKey);
    }
    return (
        <>
            {(playerLives === 1) &&
                <p className="one-live -m-3"><small>Te queda una sola vida</small></p>
            }

            <div>
                {letterKeys.map(letterKey => 
                        <button type="button" disabled={isInUsedLetters(letterKey)} className={"btn -keys -bg-" + color} onClick={() => pressNewLetter(letterKey)} key={letterKey}>{letterKey}</button>
                )}
            </div>
        </>
    )
}

export default Keyboard;