import React, {Component} from "react";
// import ReactDOM from "react-dom";
import YouTube from 'simple-youtube-api';

const API_KEY = "";
const youtube = new YouTube(API_KEY);

export default class Home extends Component {
state= {
    videos: []
}

componentWillMount = () => {
youtube.getPlaylist('https://www.youtube.com/playlist?list=PLq_9nsuQGYzAC7T3b3Bzju7g18AP8dRrH')
    .then(playlist => {
        // console.log(playlist);
        playlist.getVideos()
            .then(videos => {
                // console.log(videos);
                this.setState({videos}, () => {console.log(this.state.videos)});
            })
            .catch(console.log);
    })
    .catch(console.log);
}

render() {
    return(
    <div>
        {this.state.videos.map(video => {
            return(<div key={video.id} id={video.id}>
                <h1>{video.title}</h1>
                <p>{video.description}</p>
                <img src={video.thumbnails.medium.url} alt="video thumbnail" />
            </div>);
        })}
    </div>
)}
}