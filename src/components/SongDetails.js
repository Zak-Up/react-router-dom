import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import Message from './Message'

const SongDetails = ({ search, lyric, bio }) => {
    if(!lyric || !bio) return null;
    return (
        <div className='grid-1-2'>
            {
                lyric.error || lyric.err || lyric.name === "AbortError" ?( 
                <Message 
                    msg={`The Song "${search.song}" don't exist here, verify that it is the correct name.`}
                    bgColor="#000000"
                />
                ) : ( 
                <SongLyric 
                    title={search.song} 
                    lyric={lyric.lyrics}
                />
            )}
            {
                bio.artists ? ( 
                <SongArtist
                    artist={bio.artists[0]}
                /> 
                ) : ( 
                <Message 
                    msg={`The Artist "${search.artist}" don't exist here, verify that it is the correct name`}
                    bgColor="#000000"
                />
            )}
        </div>
    )
}

export default SongDetails
