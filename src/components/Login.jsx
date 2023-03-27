import { loginToUrl } from "../utils/spotifyAPI"

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

const aStyles = {
    textDecoration: 'none',
    color: 'white',
}
function Login() {
  return (
    <div style={styles}>
        <img  style={imgStyles} src='https://zeevector.com/wp-content/uploads/Spotify-Logo-PNG.png' alt=''/>
        <button style={btnStyles}><a style={aStyles} href={loginToUrl}>Login</a></button>
    </div>
  )
}

export default Login