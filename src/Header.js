import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import linkdinIcon from './assets/linkedin.png'
import HeaderOtpion from './HeaderOtpion';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const logOutApp = () => {
        dispatch(logout());
        auth.signOut()
    }
    return (
        <div className='header'>
            <div className='header_left'>
                <img src={linkdinIcon} alt='' />
                <div className='header_search'>
                    <SearchIcon /> 
                    <input placeholder='Search' type='text' />
                </div>
            </div>
            <div className='header_right'>
                <HeaderOtpion Icon={HomeIcon} title='Home'/>
                <HeaderOtpion Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOtpion Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOtpion Icon={ChatIcon} title='Messaging'/>
                <HeaderOtpion Icon={NotificationsIcon} title='Notifications'/>
                {user && <HeaderOtpion avatar={AccountCircleIcon} title='Logout' onClick={logOutApp}/>}
            </div>
        </div>
        
        
    )
}

export default Header
