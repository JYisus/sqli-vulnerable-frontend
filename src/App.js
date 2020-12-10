import './App.css';
import React, { Component } from 'react';
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import News from './components/News/News'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: false,
      logged: false
    }

    this.handleShowLogin = this.handleShowLogin.bind(this)
    this.handleShowLogout = this.handleShowLogout.bind(this)
    this.handleCloseLogin = this.handleCloseLogin.bind(this)
  }

  handleShowLogin(e) {
    e.preventDefault()
    this.setState({showLogin: true})
  }

  handleShowLogout(e) {
    e.preventDefault()
    this.setState({logged: false})
  }

  handleCloseLogin(logged) {
      if(logged) {
        console.log(`logged ${logged}`)
        this.setState({showLogin: false, logged: true})
      } else {
        this.setState({showLogin: false})
      }
  }

  render() {
    return (
      <div className="App">
        <Header onClickLogin={this.handleShowLogin} onClickLogout={this.handleShowLogout} isLogged={this.state.logged}/>
        <News/>
        {this.state.showLogin && !this.state.logged && (<Login onClose={this.handleCloseLogin}/>)}
      </div>
      );
  }
}

export default App;
