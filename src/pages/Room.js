import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../AuthService';
import firebase from '../config/firebase';
import {
    UlStyle,
    DivStyle,
    H1Style
} from '../style'

import List from './List';

import Push from 'push.js';



const Room = ({ history }) => {
    const [messages, setMessages] = useState([]);
    console.log(messages)
    const [value, setValue] = useState('');

    const inputEl = useRef(null)

    const messageEndRef = useRef(null);

    const scrollToBottom = () => {
        messageEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    // const formatTime = messages && `${messages.timestamp.getFullYear()}/${messages.timestamp.getMonth() + 1}/${messages.timestamp.getDate()} ${messages.timestamp.getHours()}:${messages.timestamp.getMinutes()}:${messages.timestamp.getSeconds()}`


    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        firebase.firestore()
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .limit(50)
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {

                    return {
                        userId: doc.id,
                        user: doc.data().user,
                        content: doc.data().content,
                        timestamp: doc.data().timestamp.toDate()
                    }
                })
                setMessages(messages);
            })
    }, [])



    // console.log(messages[5].timestamp);

    const user = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.firestore().collection('messages').add({
            content: value,
            user: user.displayName,
            timestamp: firebase.firestore.Timestamp.now()
        })
        setValue('')
    }
    // console.log(user)

    // console.log(messages)
    // console.log({ value })



    return (
        <>
            <DivStyle>
                <H1Style>Room</H1Style>
                <div style={{ height: '80vh', overflow: 'auto' }} >
                    <UlStyle>
                        < div style={{ float: "left", clear: "both" }}
                            ref={messageEndRef} />
                        {
                            messages &&
                            messages.map(message => {
                                // console.log(message.user, message.content)
                                return message.content.replace(/\s+/g, "") && <List key={message.userId} content={message.content} user={message.user} timestamp={`${message.timestamp.getFullYear()}/${message.timestamp.getMonth() + 1}/${message.timestamp.getDate()} ${message.timestamp.getHours()}:${message.timestamp.getMinutes()}:${message.timestamp.getSeconds()}`} />
                            })
                        }
                    </UlStyle>
                </div>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        autoFocus
                        ref={inputEl}
                    />
                    <button type="submit"
                        onClick={() => inputEl.current.focus()}
                    >送信</button>
                </form>
                <button onClick={() => firebase.auth().signOut()}>Logout</button>
                <button onClick={() => history.push('/config')}>設定</button>
            </DivStyle>
        </>
    )
}

export default Room;
