import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {SignupAction}  from '../Actions/AuthAction';

class Register extends Component{
    state={
        username:'',
        email:'',
        password:''
      }
    
      handleInput=(event)=>{
          const {name, value} = event.target;
          this.setState({[name]: value});
      }
    
      handleRegister =(e)=>{
        e.preventDefault();
        // get our form data out of state
        const { username, email, password } = this.state;
        this.props.SignupAction({ username, email, password });
      }
    render(){
        const {username, email, password} = this.state
        return(
            <div className="register">
            <div >
                    <i className="fa fa-user-circle fa-3x" style={{color:"#7fffd4"}}></i>
                    <div> REGISTER </div>
                </div>
                <form onSubmit={this.handleRegister}>
                <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">Username</span>
        </div>
        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
        name="username" value={username} onChange={this.handleInput}/>
        </div>

        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
        </div>
        <input type="text" className="form-control" aria-label="small" aria-describedby="inputGroup-sizing-sm"
            name="email" value={email} onChange={this.handleInput} />
        </div>

        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
        </div>
        <input type="password" className="form-control" aria-label="small" aria-describedby="inputGroup-sizing-sm"
         name="password" value={password} onChange={this.handleInput}/>
        </div>
        <div>
        <button type="submit" className="btn btn-success">Create Account</button>
        </div>
        </form>
        <span>Already have an account?</span>
        <div>
        <Link to="/login">Login</Link>
        </div>
            </div>
        );
    }
}
export default connect(null, {SignupAction})(Register);