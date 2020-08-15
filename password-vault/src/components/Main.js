import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from './reducers/actions'

import Item from './module/Item.js'
import GoogleLogin from 'react-google-login'
import GDrive from './module/GoogleDrive.js'

class Main extends React.Component {
  render() {
    const responseGoogle = (response) => {
      this.props.loginStatus(true)
      this.props.setData(response)
      console.log(response)
    }

    const data = this.props.data

    if (this.props.login && data != null) {
      return (
        <>
          <div className='container'>
            <div className='title bold'>Password Vault</div>
            <div className='h1 bold'>Welcom, {data.Ot.Cd}!</div>
            <div className='h2'>Keep your privacy simple and safe! 😎</div>
          </div>
          <div className='list'>
            <Item />
          </div>

          <div className='addbtn color5' onClick={() => alert('hi')}>
            +
          </div>
        </>
      )
    } else {
      return (
        <div className='container'>
          <div className='title bold'>Password Vault</div>
          <div className='h2'>Please log in with your Google account.</div>
          <GoogleLogin
            clientId='286561135604-6jcu53ap6fpl9fdg4f22sg47tbivsah9.apps.googleusercontent.com'
            buttonText='Login'
            onSuccess={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
  data: state.data
})
export default compose(connect(mapStateToProps, actions))(Main)
