import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi({
    clientId: '951e602a8f6b49dca92fd775c3bd9b9a'
})
function Body() {
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState('')

    useEffect(() => {
        
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