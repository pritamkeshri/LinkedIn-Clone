import { Avatar } from '@material-ui/core'
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItems = (topic) => (
        <div className='sidebar_recentItem'>
            {/* <span className='sidebar_hash'>#</span> */}
            <p>{`# ${topic}`}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            {console.log('dsflkajflkaskfd', user)}
            <div className='sidebar_top'>
                <img src='https://files.oyebesmartest.com/uploads/large/115513299325ek55nr8un8qqhatyti1fip2amjxr8f3nnkz2h5siwurotrssysemnbpxek5q8m7uophqj97wmvzgzprpa9nefghhivukjyryhdi.jpg' alt=''/>
                <Avatar className='sidebar_avatar' src={user.profileUrl}>
                    {!user.profileUrl && user.email[0]}    
                </Avatar> 
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar_statNumber'>14,478</p>
                </div>
                <div className='sidebar_stat'>
                    <p>View on post</p>
                    <p className='sidebar_statNumber'>11,478</p>
                </div>
            </div>

            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItems('ReactJS')}
                {recentItems('JavaScript')}
                {recentItems('Java')}
            </div>
        </div>
    )
}

export default Sidebar
