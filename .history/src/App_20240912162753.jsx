import './App.css';

function App() {

  return (
    <>
      <div>
        <h1>My Tunes</h1>
        <div className='main-structure'>
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2013/09/hayao_miyazaki_-_h_-_2013.jpg?w=1024" alt="Hayao Miyazaki" height={300} width={230}/>
        </div>
        <div className='bio-container'>
          <h2>Hayao Miyazaki's albums</h2>
          <details className='categories' onClick={}>
            <summary>Hayao Miyazaki</summary>
            <ol>
              <li>Japanese animator</li>
              <li>Filmmaker</li>
              <li>Manga artist</li>
              <li>A founder of Studio Ghibli</li>
              <li>Oscar awards: 89 wins & 62 nominations</li>
            </ol>
          </details>
          <details>
            <summary>Hayao Miyazaki's movies</summary>
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
    </>
  )
}

export default App
