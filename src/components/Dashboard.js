import React,{Component} from 'react';
import {connect} from 'react-redux';
import {FetchSongAction, DeleteSongAction} from '../Actions/SongsAction';
import {Link} from 'react-router-dom';
import CreateSong from './CreateSong';
import DeleteSong from './DeleteSong';
import EditSong from './EditSong';

const Song=(props)=>(
    <div className="songcard">
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">Artist: {props.artist} </p>
        <p class="card-text">Owner: {props.created_by} </p>
            <Link
            className="btn btn-sm btn-primary card-link"
            data-toggle="modal"
            data-target={`#edit_song${props.id}`}
            to="#"><i className="fa fa-edit" /> Edit</Link>
            <Link
            className="btn btn-sm btn-danger card-link"
            data-toggle="modal"
            data-target={`#delete_song${props.id}`}
            to="#"><i className="fa fa-trash" /> Delete</Link>
      </div>
    </div>
  </div>
  </div>
  <DeleteSong id={props.id} title={props.title} artist={props.artist} delete={props.delete} getsongs={props.getsongs}/>
  <EditSong id={props.id} title={props.title} artist={props.artist} />
  </div>
)

class Dashboard extends Component{

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
                id={song.id}
                artist={song.artist}
                title={song.title}
                created_by={song.created_by}
                key={song.id}
                delete={this.props.DeleteSongAction}
                getsongs={this.props.FetchSongAction}/>);
            return(
                <div>
                    <CreateSong />
                    <div className="col-sm-5">
                        My songs
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

export default connect(mapStateToProps, {FetchSongAction, DeleteSongAction})(Dashboard);
// export default Dashboard;