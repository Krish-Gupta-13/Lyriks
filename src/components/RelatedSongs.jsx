import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, acitveSong, handlePauseClick, handlePlayClick, artistId}) => (
  <div className='flex flex-col'>
    <h1 className='font-bold text-3xl text-white'>
    Related Songs:</h1>

    <div className='mt-6 w-full flex flex-col'>

      {data?.tracks?.map((song, i) =>(
        <SongBar
          key={`${song.key}-${artistId}`}
          // key={song.key}
          i={i}
          song={song}
          isPlaying={isPlaying}
          artistId={artistId}
          activeSong={acitveSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
  ))}
    </div>
  </div>
);

export default RelatedSongs;
