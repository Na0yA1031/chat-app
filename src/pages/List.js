import React from 'react';

const List = ({ content, user, timestamp }) => {
    // console.log(content, user)
    console.log(timestamp);
    return (
        <li>
            <span>{user} ： {timestamp} </span>
            <span
                style={{
                    minWidth: '50px',
                    backgroundColor: 'rgba(0,250,254,0.8)',
                    borderRadius: '50px',
                    display: 'inline-block',
                    marginBottom: '10px',
                    padding: '10px'
                }}>
                {`${content}`}</span>
        </li>
    )
}

export default List;