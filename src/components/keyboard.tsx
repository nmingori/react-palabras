import * as React from 'react';

const letterKeys:string[] = 'AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ'.split("");

const Keyboard = ({pressNewLetter, usedLetters, playerLives}: any) => {

    const isInUsedLetters = (letterKey: string): boolean => {
        return usedLetters.includes(letterKey);
    }
    return (
        <>
            <div className="row justify-content-center">
                <div className="col col-lg-8">
                    {letterKeys.map(letterKey => 
                        (!isInUsedLetters(letterKey) &&
                            <button type="button" className="btn btn-outline-primary m-1" onClick={() => pressNewLetter(letterKey)} key={letterKey}>{letterKey}</button>  
                        )  
                    )}
                </div>
            </div>

            {(playerLives === 1) &&
                <p className="text-danger"><small>Te queda una sola vida</small></p>
            }

            {(usedLetters.length > 0) && 
                <div className="row justify-content-center mt-3">
                    <div className="col col-lg-8">
                        <strong className="mr-1">Letras utilizadas:</strong>{usedLetters.join(" - ")}
                    </div>
                </div>
            }
        </>
    )
}

export default Keyboard;