import React from 'react'

const SongArtist = ({ artist}) => {
    return (
        <section className='grid-1-2'>
            <div className='artist'>
                <h3>{artist.strArtist}</h3>
                <img src={artist.strArtistThumb} alt={artist.strArtist}/>
                <p>◽ {artist.intBornYear} - {artist.intDiedYear || "Present"}</p>
                <p>◽ {artist.strCountry}</p>
                <p>◽ {artist.strGenre} - {artist.strStyle}</p>
                <a href={`http://${artist.strWebsite}`} target="_blank" rel='noreferer'>{artist.strWebsite}</a>
            </div>
            <div className='bio'>
                <h3>Biography</h3>
                <p>{artist.strBiographyEN}</p>
            </div>
        </section>
    )
}

export default SongArtist
