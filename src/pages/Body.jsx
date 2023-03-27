import React from 'react'
import { urlToken } from '../utils/spotifyAPI'
import useAuth from '../components/useAuth'

function Body({urlToken}) {
    const accessToken = useAuth(urlToken)
}

export default Body