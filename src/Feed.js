import React, {useState, useEffect} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import InputOptions from './InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        ))
    }, [])
     
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description:user.email,
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <CreateIcon />
                    <form>
                        <input 
                            placeholder='Start new post' 
                            type='text'
                            value={input}
                            onChange={ e => setInput(e.target.value)}
                        />
                        <button onClick={sendPost} type='submit'>Submit</button>
                    </form>
                </div>
                <div className='feed_inputOptions'>
                    <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <InputOptions Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                    <InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                    <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color='#75C15E' />
                </div>
            </div>

                <FlipMove>
                {posts.map(({id, data: {name, description, message, photoUrl, timestamp}}) =>
                    (
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                        timestamp={timestamp}

                    />
                    )
                )}
                </FlipMove>
                
        </div>
    )
}

export default Feed
