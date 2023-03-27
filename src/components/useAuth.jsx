import React from 'react'
import { useEffect, useState } from 'react'

function useAuth() {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()
}

export default useAuth