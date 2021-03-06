import React from 'react'
import { connect } from 'react-redux'

import { startLogin } from '../../../../actions/auth'

import LoginForm from './LoginForm'
import logo from '../../../../assets/logo.svg'
import google from './assets/google.svg'

import './style.css'

const Login = ({ startLogin }) => (
    <div className="container-full center-text login">
        <div className="row aye">
            <div className="column xlarge-4 large-2 hide-tablet-down"></div>
            <div className="column xlarge-4 large-8 medium-12 small-12">
                <img src={logo} className="logotodo" alt="logo" />
                <div className="card card-hoverable">
                    <LoginForm />
                    <div className="center-text">
                        <h2 style={{color: '#fff'}}>Or</h2>
                    </div>
                    <button 
                        className="google-button"
                        onClick={startLogin}
                    >
                        <span className="google-button__icon">
                            <img src={google} alt={google} />
                        </span>
                        <span className="google-button__text">
                            Sign in with Google
                        </span>
                    </button>
                </div>
            </div>
            <div className="column xlarge-4 large-2 hide-tablet-down"></div>
        </div>
    </div>
)

const connectedLogin = (dispatch) => (
    {
        startLogin: () => {
            dispatch(startLogin())
        }
    }
)

export default connect(undefined, connectedLogin)(Login)