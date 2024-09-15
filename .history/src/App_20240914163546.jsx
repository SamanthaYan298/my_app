import './App.css';
import { useState } from 'react';

function App() {

  return (
    <>
      <div className='title'>
        <h1>My Tunes</h1>
        <div className="all">
        <div className='photo'>
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2013/09/hayao_miyazaki_-_h_-_2013.jpg?w=1024" alt="Hayao Miyazaki" height={400} width={330}/>
        </div>
        <div>
          <h2>Hayao Miyazaki's albums</h2>
          <details className='categories'>
            <summary>Hayao Miyazaki</summary>
            <ol>
              <li>Japanese animator</li>
              <li>Filmmaker</li>
              <li>Manga artist</li>
              <li>A founder of Studio Ghibli</li>
              <li>Oscar awards: 89 wins</li>
            </ol>
          </details>
          <details className='categories'>
            <summary className='open'>Hayao Miyazaki's movies</summary>
            <ol>
              <li>Castle in the Sky</li>
              <li>Kiki's Delivery Service</li>
              <li>Howl's Moving Castle</li>
              <li>Princess Mononoke</li>
              <li>Spirited Away</li>
            </ol>
          </details>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
