import React , { useEffect , useState}from 'react'
import Youtube from 'react-youtube'
import "./rowPost.css";
import { imageUrl , API_KEY} from '../../constants/constants';
import axios from '../../axios';
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      
      setMovies(response.data.results)
    }).catch(err=>{
      //alert('Network Error')
    })
  }, [props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id)=>{
      console.log(id);
      axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }else{
          console.log('Trailer not found')
        }
      })
  }
  const handleCloseButtonClick = () => {
    setUrlId(''); // Clear the video ID to hide the YouTube player
  };
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
       
      </div>
    { urlId && (
      <div>
        <Youtube opts={opts} videoId={urlId.key} />
          <button className="close-btn" onClick={handleCloseButtonClick}>Close</button>
      </div>
    )    }
    </div>
  )
}

export default RowPost