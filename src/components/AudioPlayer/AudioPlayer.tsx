import clsx from 'clsx';
import { AudioPlayerList } from '../AudioPlayerList/AudioPlayerList';
import { AudioPlayerMain } from '../AudioPlayerMain/AudioPlayerMain';
import styles from './AudioPlayer.scss';
import { useAudioPlayer } from './useAudioPlayer';

interface AudioPlayerProps {}

export const AudioPlayer = (props: AudioPlayerProps) => {
  const {
    audioEl,
    currentTime,
    duration,
    handleAction,
    handleBackClick,
    handleEndedTrack,
    handleLoadedMetadata,
    handleTimeUpdate,
    handleProgressBarRelease,
    handleListItemClick,
    handleVolumeBarRelease,
    handleVolumeBarChange,
    isPlaylistVisible,
    currentTrack,
    repeat,
    pause,
    random,
    volume,
  } = useAudioPlayer();

  return (
    <div
      className={clsx({
        [styles[`audio-player`]]: true,
      })}
    >
      <audio
        ref={audioEl}
        onEnded={handleEndedTrack}
        onTimeUpdate={handleTimeUpdate}
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        src={currentTrack.src}
      ></audio>

      {!isPlaylistVisible && (
        <AudioPlayerMain
          onAction={handleAction}
          onProgressBarRelease={handleProgressBarRelease}
          onVolumeBarRelease={handleVolumeBarRelease}
          onVolumeBarChange={handleVolumeBarChange}
          currentTrack={currentTrack}
          currentTime={currentTime}
          duration={duration}
          repeat={repeat}
          pause={pause}
          random={random}
          volume={volume}
        />
      )}

      {isPlaylistVisible && (
        <AudioPlayerList
          onPageClick={handleBackClick}
          currentTrack={currentTrack}
          onListItemClick={handleListItemClick}
          pause={pause}
        />
      )}
    </div>
  );
};
