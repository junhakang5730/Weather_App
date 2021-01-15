import React from 'react'
import './FriendProfile.css';

import profilePicture from '../Atoms/profilePicture';

export function FriendProfile() {
    return (
    
        <div className="background">
            <profilePicture imageUrl='https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20200603001356048249ecba8d8b8617764132.jpg' imageName="Me"/>
            <profilePicture/>
            <div className="name">
                name
            </div>
        </div>
        
    )
}

export default FriendProfile;