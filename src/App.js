import logo from './logo.svg';
import './App.css';

import data, { categorieSet, categoriesUnique, categoriesWithCounts, namesAndCategories } from './data'
import Categories from './Categories';
import Item from './Item';
import { useState } from 'react';

function App() {
  const [currentCategory, setCurrentCategory] = useState('Toys')

  return (
    <div className="App">
      <header className="App-header">
        {
          categoriesUnique.map((category) => {
            return(
              <div>
                <Categories category={category} setCurrentCategory={setCurrentCategory}/>
              </div>
            )
          })
        }
        <div>Current Category: {currentCategory}</div>
        {
          data.map((item) => {
            return(
              <div>
                {item['category'] === currentCategory ? <Item item={item}/> : null}
              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
