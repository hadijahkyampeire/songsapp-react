import React ,{Component}from 'react';
import {connect}  from 'react-redux';
import {EditSongAction, FetchSongAction} from '../Actions/SongsAction';

/**
 * Component for handling editing categories.
 * @author [Hadijah kyampeire](https://github.com/hadijahkyampeire/Yummy_Reactjs_frontend)
 */
class EditSong extends Component {
    state = {
        title:'',
        artist:''
    }
    componentDidMount(){
        this.setState({title:this.props.title});
        this.setState({artist:this.props.artist});
    }
    /**
     * @param {object} event - The element which handles edit category
     */
    handleEditCategory =(event) =>{
        event.preventDefault();
        const {title, artist} = this.state
        this.props.EditSongAction(this.props.id, {title, artist})
        .then(this.props.FetchSongAction)
    }
    handleInput =(event) =>{
        const {name, value} = event.target;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div
                className="modal fade"
                id={`edit_song${this.props.id}`}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit song {this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.handleEditCategory}>
                        <div className="modal-body">
                        {this.props.error ? (
                    <div className="alert alert-danger">{this.props.error}
                     <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button></div>
                  ) : (
                    ""
                  )}
                            <div className="form-group">
                                <input type="text" name="title" value={this.state.title}
                                 onChange={this.handleInput} className='form-control' />
                            </div>
                            <div className="form-group">
                                <input type="text" name="artist" value={this.state.artist}
                                onChange={this.handleInput} className='form-control' />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" >Update</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" id={`closeEditModal${this.props.id}`}>Cancel</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, {EditSongAction, FetchSongAction})(EditSong);
