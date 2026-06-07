import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState("")
    const movies = [
        {id: 1, title: "Inception", release_date: "2010", url: "https://m.media-amazon.com/images/I/51s+qjv9ZlL._AC_.jpg"},
        {id: 2, title: "The Dark Knight", release_date: "2008", url: "https://m.media-amazon.com/images/I/51s+qjv9ZlL._AC_.jpg"},
        {id: 3, title: "Interstellar", release_date: "2014", url: "https://m.media-amazon.com/images/I/51s+qjv9ZlL._AC_.jpg"}
    ]

    const handleSearch = (e) => { 
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return <div className="home"> 
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="home-header">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
}
 
 export default Home