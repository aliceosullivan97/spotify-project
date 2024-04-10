import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HasToken } from './HasToken'
import { DoesNotHaveToken } from './DoesNotHaveToken'
import { Artist } from './Artist'

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null)
  const [artist, setArtist] = useState(null)
  const ARTIST_ID = '0hCNtLu0JehylgoiP8L4Gh'

  const CLIENT_ID = 'a15b0fb9f2964bb6b1edeec7d0041d85'
  const CLIENT_SECRET = 'af60194bd8f14d1785d0f5e94d938469'

  useEffect(() => {
    const token_endpoint = 'https://accounts.spotify.com/api/token'

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'grant_type=client_credentials&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET
    };

    fetch(token_endpoint, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setToken(data.access_token)
      })
      .catch((error) => console.log(error));

  }, [])

  useEffect(() => {
    const artist_endpoint = 'https://api.spotify.com/v1/artists/' + ARTIST_ID

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
    };

    fetch(artist_endpoint, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setArtist(data)
      })
      .catch((error) => console.log(error));

  } , [token])

  return (
    <div>
      {
        token ? <HasToken /> : <DoesNotHaveToken />
      }
      {
        artist ? <Artist artist={artist} /> : null
      }
    </div>
  )
}

export default App
