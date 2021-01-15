import React from 'react'
import FriendProfile from '../Molecules/FriendProfile'
import './FriendList.css'

export function FriendList(imageUrl, imageName) {
    return (
        <div className="outer-box">
            <div className="utill">
                <span>내 친구들</span>
                <span>+</span>
            </div>
            <div className="list">
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
                <FriendProfile/>
            </div>
        </div>
    )
}

export default FriendList;