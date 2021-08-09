import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import InputOptions from './InputOptions'
import './Post.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Post = forwardRef(({name, description, message, photoUrl, timestamp}, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className='post_header'>
                <Avatar src={photoUrl}>
                    {name[0]}
                </Avatar>
                <div className='post_info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    {console.log(timestamp)}
                    {/* <p>{timestamp}</p> */}
                </div>
            </div>

            <div className='post_body'>
                <p>{message}</p>
            </div>

            <div className='post_buttons'>
                <InputOptions Icon={ThumbUpAltIcon} title='Like' color='gray' />
                <InputOptions Icon={ChatIcon} title='Comment' color='gray' />
                <InputOptions Icon={ShareIcon} title='Share' color='gray' />
                <InputOptions Icon={SendIcon} title='Send' color='gray' />
            </div>
        </div>
    )
})

export default Post
