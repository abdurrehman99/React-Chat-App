import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import  classnames  from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authAction';
import { threadId } from 'worker_threads';
import actions from '../actions/msgsActions';

export default class Register extends Component {
    constructor()
    {
        super();
        this.state = {
            name : '',
            email : '',
            password : '',
            password2 : '',
            errors : { },

        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    }

    onChange(e)
    {
        this.setState({[e.target.name] : e.target.value })
    }

    onSubmit(e)
    {
        e.preventDefault();
        const newUser = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            password2 : this.state.password2,
        
        }

        this.props.registerUser(newUser);
    }

    render()
    {
        const { errors } =this.state;
        const { user } = this.props.auth;
        return (
        )
    }
}
