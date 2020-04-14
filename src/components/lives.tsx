import * as React from 'react';
import {useEffect, useState} from 'react';
import iconHeart from './images/heart.png';
import iconHeartDisabled from './images/heart-disabled.png';

const Lives = ({playerLives, maxLives}: any) => {

    const [livesToShow, setLivesToShow] = useState<boolean[]>([]);

    useEffect(() => {
        let lives = [];
        for (var i = 0; i < maxLives; i++) {
            lives.push(i < playerLives);
        }
        setLivesToShow(lives)
    }, [maxLives, playerLives]);

    return (
        <div className="d-flex justify-content-center">
            <strong className="mr-1">Vidas:</strong>

            {livesToShow.map((live, i) => (
                <div className="mr-1" key={i}>
                    <img src={(live === true) ? iconHeart : iconHeartDisabled} alt="heart"  />
                </div>
            ))}
        </div>
    )
}

export default Lives;