import React,{useState} from 'react'
import searchIcon from './search.svg'
import MovieCard from './movieCard'

const Home = () => {
    const API_URL=process.env.REACT_APP_API_URL
    const [movies,setMovies]=useState([])
    const [loading,setLoading]=useState("")
    const [searchTerm,setSearchTerm]=useState('')
    const searchMovies=async (title)=>{
        setLoading("Loading...")
        setMovies([])
        const response=await fetch(`${API_URL}&s=${title}`)
        const data=await response.json()
        if(data.Error){
            setLoading("No movies found")
            return;
        }
        // console.log(data)
        setMovies(data.Search)
    }

    
  return (
    <div className='app'>
        {/* <h1>MovieLand</h1> */}

        <div className='search'>
            <input type="text" placeholder='Search for movies'
            id="asd"
             value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)
            }}
            onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    searchMovies(searchTerm)
                }
            }}/>
        <img src={searchIcon} alt="search"  onClick={()=>{searchMovies(searchTerm)}}/>
        </div>
{
    movies.length>0?(
        <div className="container">
       { movies.map(movie=>
<MovieCard movie={movie} key={movie.Title}/>
        )

        }</div>
    ):(
        <div className="empty">
            <h2>{loading}</h2>
        </div>
    )

}


    </div>
  )
}

export default Home