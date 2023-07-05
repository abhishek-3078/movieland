
import { useEffect, useState,useCallback } from 'react'
import { useParams } from 'react-router-dom';
import styles from './MoviePage.module.css'
const MOVIE_URL=process.env.REACT_APP_MOVIE_URL
const MoviePage = (props) => {
  
    console.log("hello")
    const [movie,setMovie]=useState(null)
    const { id } = useParams();
    const getMovie = useCallback(async () => {
      const response = await fetch(MOVIE_URL + `&i=${id}`);
      const data = await response.json();
      console.log(data);
      setMovie(data);
    }, [id]);
    // const getMovie=async()=>{
    //     const response=await fetch(MOVIE_URL+`&i=${id}`);
    //     const data=await response.json()
    //     console.log(data)
    //     setMovie(data)
    // }
    useEffect(()=>{
        getMovie()

    },[getMovie])

    
    

  return (
    <>
        {  
            !movie?(<div className={styles.subhead}>Loading...</div>):
        (
            <div>
            <h2 className={styles.head}>
              {movie.Title} <span>({movie.Year})</span>
              <span className={styles.minor}> {movie.Type}</span>
            </h2>
      
            <div className={styles.container}>
              <div className={styles.left}>
                <div>
                  <h3 className={styles.subhead}>Plot</h3>
                  <p className={styles.description}>
                    {movie.Plot}
                  </p>
      </div>
                  <div className={styles.meta}>
                    <p>
                      <strong>IMDb:</strong> {movie.imdbRating}
                    </p>
                    <p>
                      <strong>Genre:</strong> {movie.Genre}
                    </p>
                    <p>
                      <strong>Run Time:</strong> {movie.Runtime}
                    </p>
                    <p>
                      <strong>Language:</strong> {movie.Language}
                    </p>
                  
                  <p>
                    <strong>Director:</strong> {movie.Director}
                  </p>
                  <p>
                    <strong>Actors:</strong> {movie.Actors}
                  </p>
                  <p>
                    <strong>Writer:</strong> {movie.Writer}
                  </p>
                  <p>
                    <strong>Box Office:</strong> {movie.BoxOffice}
                  </p>
                </div>
              </div>
              <div className={styles.right}>
                <img src={movie.Poster} alt="" />
              </div>
            </div>
          </div>
)
        } 
        </>
  )
}

export default MoviePage