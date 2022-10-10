import { useEffect, useState } from 'react'
import './App.css'
import MovieCrad from './MovieCrad'
import SearchIcon from './search.svg'


const  App = () => {

  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState([''])
  const searchMovies= async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  }



useEffect(()=>{

  searchMovies(searchTerm)
  

}, [])

  const API_URL = "http://www.omdbapi.com?apikey=45b5fec8"

  return (
    <div className='app'>
        <h1>MovieWorld</h1>

        <div className='search'>
          <input type="text" placeholder='Search for movies' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
          <img src={SearchIcon} alt="Search-btn" onClick={() => {searchMovies(searchTerm)}}/>
        </div>

        {
          movies?.length > 0 ? (
            <div className='container'>
            {
              movies.map((movie)=> (
                <MovieCrad movie={movie} key={movie.imdbID}/>
              ))
            }
        </div>
          ): (
            <div className="empty">
              <h2>No movies Found!</h2>
            </div>
          )
        }

        
    </div>
  )
}

export default App
