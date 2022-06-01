import React from 'react'

const SongLyric = ({ title, lyric }) => {
    return (
        <div className='lyric'>
            <h3>{title}</h3>
            <blockquote>{lyric}</blockquote>
        </div>
    )
}

export default SongLyric
