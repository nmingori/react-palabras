import React, {useState, useEffect} from 'react';
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
        <div className="-d-flex-center">
            <strong className="-mr-1">Vidas:</strong>

            {livesToShow.map((live, i) => (
                <img className="-mr-1" key={i} src={(live === true) ? iconHeart : iconHeartDisabled} alt="heart"  />
            ))}
        </div>
    )
}

export default Lives;