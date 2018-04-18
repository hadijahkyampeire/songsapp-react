import React, { Component } from 'react';
import { AddSongAction } from '../Actions/SongsAction';
import {connect} from 'react-redux';

class CreateSong extends Component{
    state={
        title:'',
        artist:''
    }
    handleInput=(event)=>{
        const {name, value} = event.target
        console.log(name, value)
        this.setState({[name]: value});
    }

    handleAddSong=(event)=>{
        event.preventDefault();
        const {title, artist} = this.state
        this.props.AddSongAction({title, artist})
    }

    render(){
        const {title, artist} = this.state;
        return(
<div>
<button type="button" className="btn btn-success addbtn" data-toggle="modal" data-target="#exampleModal">
  <i className="fa fa-plus-circle"/> Add song
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add a song</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form onSubmit={this.handleAddSong}>
        <div class="form-group">
    <label for="formGroupExampleInput">Enter Title</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Bread and butter"
    name="title" value={title} onChange={this.handleInput}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Artist</label>
    <input type="text" class="form-control" id="formGroupExampleInput2"
     placeholder="Goodlife" name="artist" value={artist} onChange={this.handleInput}/>
  </div>
  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-success">Add song</button>
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
export default connect(null, {AddSongAction}) (CreateSong);