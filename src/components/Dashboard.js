import React,{Component} from 'react';
import {connect} from 'react-redux';
import {FetchSongAction} from '../Actions/SongsAction';
import CreatSong from './CreateSong';

const Song=(props)=>(
    <div className="col-sm-5 offset-sm-3 list">
    <ul>Title:{props.title}</ul>
    <ul>By:{props.artist}</ul>
    </div>
)

class Dashboard extends Component{
    constructor(props){
        super(props)
        
        this.state = {songs:props.songs}
    }
    componentDidMount(){
        this.props.FetchSongAction()
    }
    render(){
        const {songs} = this.props;
        const items = songs.song_items
        

        if(!items) {
            return(
                <div>
                </div>
            );
        }else {
            const song_items= items.map(song=> 
                <Song 
                artist={song.artist}
                title={song.title}
                key={song.id}/>);
            return(
                <div>
                    <CreatSong/>
                    <div className="col-sm-5 offset-sm-3">
                    {song_items}
                    </div>
                </div>
            );
        }
        
    }
}
const mapStateToProps = (state) => {
    return { 
        songs:state.songs
    }
}
export default connect(mapStateToProps, {FetchSongAction})(Dashboard);