/*The authEndpoint is the URL where we need to authenticate using Spotify. All Spotify Authentication requests must be passed through this URL.
The redirectUri is the one which we gave in the Spotify Web API settings, this states where to take back the user if the Spotify login was successful.
The clientId is the Client ID provided to you by the Spotify Web API and you need to mention it here.
scopes are basically permissions which you need to ask Spotify for. More such permissions are available on Spotify API Documentation.
The loginUrl is the final URL which needs to be called in order to authorize an user for our Spotify Clone app. This URL contains the Client ID and all the permissions so that Spotify knows about our app and allows user authentication.*/

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

 //load this page on button click
export const loginToUrl = `${api_url}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope.join(
            "%20"
        )}&response_type=token&show_dialog=true`


/*Once you authorize, you find yourself back in the Spotify Clone, but this time, you see an access token in the URL bar. We need that Access Token in order to authenticate users. To do that, we need to take it out of URL bar. So let’s go back to spotify.js and add a function which can do this for us.*/

export const urlToken = () => {
    //grab what is found after the hashtag
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let components = item.split("=");
        initial[components[0]] = decodeURIComponent(components[1]);
        return initial;
      }, {});
  };