import React, {Component} from 'react';
import {login} from "../../api"
import PropTypes from 'prop-types';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSending: false,
            hasError: false,
            email: "",
            password: "",
            isLogged: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleChange(field) {
        return (event) => {
            this.setState({
                [field]: event.target.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const { onClose } = this.props
        this.setState({showSending: true})
        login({email: this.state.email, password: this.state.password})
        .then(logged => {
            console.log(`islogged ${logged}`)
            if(logged) {
                this.setState({hasError: false, showSending: true, isLogged: true})
                onClose(true)
                console.log("nooooooo")
                
            } else{
                this.setState({hasError: true, showSending: false})
            }
        }) 
    }

    handleClose() {
        this.props.onClose(false)
    }

    render() {
        const { showSending, hasError, email, password, isLogged} = this.state
        // const { onClose } = this.props
        return (<div className="modal">
            <div className="modal-content">
                <span className="close" onClick={this.handleClose}> &times; </span>
                <h2>Login</h2>
                { hasError && (<div className="error">Incorrect email or password</div>)}
                { isLogged && (<div className="success">Correct! You are logged!</div>)}
                <form>
                    <label>email</label>
                    <input type="text" value={email} onChange={this.handleChange("email")} required/>
                    <label>password</label>
                    <input type="text" value={password} onChange={this.handleChange("password")} required/>
                    <input type="submit" onClick={this.handleSubmit} value="Submit" disabled={showSending}/>
                </form>
            </div>
        </div>)
    }
}

Login.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default Login
