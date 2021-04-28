import React, { useState } from 'react';
import firebase from '../config/firebase'

const Config = ({ history }) => {
    const user = firebase.auth().currentUser;
    const [configName, setConfigName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (configName.replace(/\s+/g, "") !== '') {

            const result = window.confirm('変更内容を適用してもよろしいですか？');
            if (result) {
                user.updateProfile({
                    displayName: configName
                })
                setConfigName('');
            }
        } else {
            alert('変更内容を入力して下さい')
        }
    }



    return (
        <>
            <h1>config</h1>
            <form onSubmit={handleSubmit}>
                <p>ユーザーネームの変更</p>
                <input type="text" value={configName} onChange={e => setConfigName(e.target.value)} />
                <button type="submit">設定変更の適用</button>
            </form>
            <button onClick={() => history.push('./')} >戻る</button >
        </>
    )
}

export default Config;