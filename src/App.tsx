import React, {useState} from 'react';
import Game from './components/game';
import Menu, {Category} from './components/menu';

const App = () => {
    
    const [category, setCategory] = useState<Category|null>(null);
    
    return (
        <div className="game-container">
            {(category) ? (
                <Game 
                    category={category} 
                    setCategory={setCategory} 
                />
            ) : (
                <Menu 
                    setCategory={setCategory} 
                />
            )}
        </div>
    )
}

export default App;