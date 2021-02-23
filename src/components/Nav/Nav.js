import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import style from './Nav.module.css';
import { logout } from '../../actions/auth';

const Nav = (props) => {
    return <div className={style.Nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/news'>News</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        {
        props.userId ? 
            <button onClick = { props.logout } >Выйти</button>
            : <button onClick = { () => { props.history.push('/login') }}>Войти</button>
        }
    </div>
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId
})

export default withRouter( connect(mapStateToProps, { logout })(Nav) );  
