const styles = {
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#EBE8FC',
    gap: '5em'
}

const imgStyles = {
    height: '40vh'
}

const btnStyles = {
    border: 'none',
    backgroundColor: 'black',
    borderRadius: '20px',
    color: 'white',
    height: '8vh',
    width: '18vw',
    fontSize: '1em',
    fontWeight: 'bolder'

}
function Login() {
    const handleClick = () => {
        const client_id = '951e602a8f6b49dca92fd775c3bd9b9a'
        const redirect_url = 'http://localhost:3000/'
        const api_url = 'https://accounts.spotify.com/authorize'
        const scope = [
            'user-read-private',
            'user-read-email',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-top-read'
        ]
        window.location.href = `${api_url}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`
    }
  return (
    <div style={styles}>
        <img  style={imgStyles} src='https://zeevector.com/wp-content/uploads/Spotify-Logo-PNG.png' alt=''/>
        <button style={btnStyles} onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login