import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOtpion.css'

function HeaderOtpion({avatar, Icon, title, onClick}) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className='headerOtpion'>
            {Icon && <Icon className='headerOtpion_Icon' />}
            {avatar && <Avatar className='headerOtpion_Icon'> {user?.email[0]} </Avatar>} 
            <h3 className='headerOtpion_title'>{title}</h3>

        </div>
    )
}

export default HeaderOtpion
