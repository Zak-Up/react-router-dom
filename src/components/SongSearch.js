import React, { useState, useEffect } from 'react';
import { helpHttp } from "../helpers/helpHttp";
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import Loader from './Loader';

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(search === null) return;

        const fetchData = async () => {
            const {artist, song} = search;

            let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

            console.log(artistUrl, songUrl);

            setLoading(true);

            const [artistRes, songRes] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(songUrl),
            ]);

            console.log(artistRes, songRes)

            setBio(artistRes);
            setLyric(songRes);
            setLoading(false);
        };

        fetchData();
    }, [search]);

    const handleSearch = (data) => {
        setSearch(data);
    }

    return (
        <div>
            <h2 className='favorite'>Find your favorite Song Lyric:</h2>
                <article className=''>
                    <div className='songForm'>
                        <SongForm 
                        handleSearch={handleSearch}
                        />
                    </div>
                    <div className='loading'>
                        {loading && <Loader/>}
                        </div>
                    <div className='songDetails'>
                        {
                        search && !loading &&
                            <SongDetails
                            search={search}
                            lyric={lyric}
                            bio={bio}
                            />
                        }
                    </div>
                </article>
        </div>
    )
}

export default SongSearch
