import React, { Component } from 'react';
import { AddSongAction } from '../Actions/SongsAction';
import {connect} from 'react-redux';
import { FetchSongAction } from '../Actions/SongsAction'

class CreateSong extends Component{
    state={
        title:'',
        artist:''
    }
    handleInput=(event)=>{
        const {name, value} = event.target
        this.setState({[name]: value});
    }

    handleAddSong=(event)=>{
        event.preventDefault();
        const {title, artist} = this.state
        this.props.AddSongAction({title, artist})
        .then(this.props.FetchSongAction)
    }

    render(){
        const {title, artist} = this.state;
        return(
<div>
<button type="button" className="btn btn-success addbtn" data-toggle="modal" data-target="#exampleModal">
  <i className="fa fa-plus-circle"/> Add song
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add a song</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form onSubmit={this.handleAddSong}>
        <div className="form-group">
    <label htmlFor="formGroupExampleInput">Enter Title</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Bread and butter"
    name="title" value={title} onChange={this.handleInput}/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Artist</label>
    <input type="text" className="form-control" id="formGroupExampleInput2"
     placeholder="Goodlife" name="artist" value={artist} onChange={this.handleInput}/>
  </div>
  <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" id="CloseAddModal">Close</button>
        <button type="submit" className="btn btn-success">Add song</button>
      </div>
        </form>
      </div>
      
    </div>
  </div>
</div>
            </div>
        )
    }
}
export default connect(null, {AddSongAction, FetchSongAction}) (CreateSong);