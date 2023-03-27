import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import { urlToken } from '../utils/spotifyAPI'

const spotifyApi = new SpotifyWebApi({
    clientId: '951e602a8f6b49dca92fd775c3bd9b9a'
})

let localUrlToken = urlToken();
    localUrlToken = localUrlToken.access_token;
function Body() {
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

//     //create movie request function async
//   const getSong = async (search) => {
//     const url= `http://www.omdbapi.com/?s=${search}&apikey=6f6792fa`

//     //fetch a response
//     const response = await fetch(url);
//     //convert to JSON
//     const responseJSON = await response.json();

//     //call and set the setter to the url Search Array
//   if (responseJSON.Search) {
//       setMovies(responseJSON.Search);
//       }
//   }

//     //any value added to the array, causes the useEffect hook to trigger
//     useEffect(() => {
//       getMovie(search)} , [search])
    useEffect(() => {
        spotifyApi.setAccessToken(localUrlToken)
    }, [])

    useEffect(() => {
        spotifyApi.searchTracks(search).then(res => {
            console.log(res)
        })
    },[search])
    return (
        <div>
            <form>
                <input type="search" placeholder='Search Songs/Artists' value={search} onChange={e => setSearch(e.target.value)}/>
            </form>
        </div>
    )
}

export default Body