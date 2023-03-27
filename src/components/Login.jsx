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
    height: '20vh'
}

const btnStyles = {
    border: 'none',
    backgroundColor: 'black'
}
function Login() {
  return (
    <div style={styles}>
        <img  style={imgStyles} src='https://zeevector.com/wp-content/uploads/Spotify-Logo-PNG.png' alt=''/>
        <button>Login</button>
    </div>
  )
}

export default Login