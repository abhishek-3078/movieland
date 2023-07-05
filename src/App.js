
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'

import './App.css'

// import searchIcon from './search.svg'
// import MovieCard from './movieCard'
import MoviePage from './MoviePage'
import Home from './Home'


const App=()=>{
    return (
    <Router>
    <div className='mainHead'>
            <Link to="/">
       <h1>MovieLand</h1>
       </Link>
       </div>
       <Routes>
         <Route path="/" element={<Home />} >
        </Route>
        <Route path="/movies/:id" Component={MoviePage}>
        </Route>
        </Routes>
    </Router>
    )
}



export default App

// const Home = () => {
//     const [movies,setMovies]=useState([])
//     const [searchTerm,setSearchTerm]=useState('')
//     const searchMovies=async (title)=>{
//         const response=await fetch(`${API_URL}&s=${title}`)
//         const data=await response.json()
//         if(data.Error) return
//         console.log(data)
//         setMovies(data.Search)
//     }

    
//   return (
//     <div className='app'>
//         <h1>MovieLand</h1>

//         <div className='search'>
//             <input type="text" placeholder='Search for movies'
//             id="asd"
//              value={searchTerm}
//             onChange={(e)=>{setSearchTerm(e.target.value)
//             }}
//             onKeyDown={(e)=>{
//                 if(e.key=="Enter"){
//                     searchMovies(searchTerm)
//                 }
//             }}/>
//         <img src={searchIcon} alt="search"  onClick={()=>{searchMovies(searchTerm)}}/>
//         </div>
// {
//     movies.length>0?(
//         <div className="container">
//        { movies.map(movie=>
// <MovieCard movie={movie} key={movie.Title}/>
//         )

//         }</div>
//     ):(
//         <div className="empty">
//             <h2>No movies found</h2>
//         </div>
//     )

// }


//     </div>
//   )
// }