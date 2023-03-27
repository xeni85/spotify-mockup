import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { urlToken } from '../utils/spotifyAPI'

function useAuth() {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post('http://localhost:3000/login', {
            urlToken,
        }).then((res) => {
            console.log(res.data)
        })
    }, [urlToken])
    return <h1>Hello from useAuth</h1>
}

export default useAuth