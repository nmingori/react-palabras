import * as React from 'react';
import './App.css';
import {useState} from 'react';
import Game from './components/game';
import Menu, {Categories} from './components/menu';

const App = () => {
    
    const [category, setCategory] = useState<Categories|null>(null);
    
    return (
        <>
            {(category) ? (
                <Game category={category} setCategory={setCategory} />
            ) : (
                <Menu setCategory={setCategory} />
            )}
        </>
    )
}

export default App;