import * as React from 'react';

const letterKeys:string[] = 'AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚVWXYZ'.split("");

const Keyboard = ({pressNewLetter, usedLetters}: any) => {

    const isInUsedLetters = (letterKey: string): boolean => {
        return usedLetters.includes(letterKey);
    }
    return (
        <div className="mb-4">
            {letterKeys.map(letterKey => 
                (!isInUsedLetters(letterKey) &&
                    <button type="button" className="btn btn-outline-primary m-1" onClick={() => pressNewLetter(letterKey)} key={letterKey}>{letterKey}</button>  
                )  
            )}

            {(usedLetters.length > 0) && 
                <div className="d-flex justify-content-center mt-2">
                    <strong className="mr-1">Letras utilizadas:</strong>{usedLetters.join(" - ")}
                </div>
            }
        </div>
    )
}

export default Keyboard;