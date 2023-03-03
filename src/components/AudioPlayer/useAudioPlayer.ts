import { useEffect, useRef, useState } from 'react';
import { tracks } from '../../tracks';

export const useAudioPlayer = () => {
  let audioEl = useRef<HTMLAudioElement>(null);

  const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [random, setRandom] = useState(false);
  const [pause, setPause] = useState(true);
  const [like, setLike] = useState(tracks[currentTrackIndex].like);
  const [volume, setVolume] = useState(1);

  const setAudioData = () => {
    setCurrentTime(audioEl.current.currentTime || 0);
    setDuration(audioEl.current.duration || 0);
  };

  const goNextTrack = () => {
    const isLast = currentTrackIndex === tracks.length - 1;

    if (repeat) {
      audioEl.current.play();
    } else if (random) {
      setCurrentTrackIndex(Math.trunc((tracks.length - 1) * Math.random()));
    } else {
      if (isLast) {
        setCurrentTrackIndex(0);
      } else {
        setCurrentTrackIndex(currentTrackIndex + 1);
      }
    }
  };

  const handleBackClick = () => {
    setIsPlaylistVisible(false);
  };

  const handleShowPlaylistClick = () => {
    setIsPlaylistVisible(true);
  };

  const handleEndedTrack = () => {
    goNextTrack();
  };

  const handleLoadedMetadata = () => {
    setAudioData();
  };

  const handleTimeUpdate = (event: any) => {
    setAudioData();
  };

  const handlePauseClick = () => {
    setPause(!pause);
  };

  const handleListItemClick = (id: number) => () => {
    if (currentTrackIndex === id) {
      handlePauseClick();
      return;
    }
    setCurrentTrackIndex(id);
    setPause(false);
  };

  const handlePrevAClick = () => {
    if (currentTrackIndex === 0) {
      setCurrentTrackIndex(tracks.length - 1);
    } else {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const handleNextAClick = () => {
    goNextTrack();
  };

  const handleRepeatClick = () => {
    setRepeat(!repeat);
  };

  const handleRandomClick = () => {
    setRandom(!random);
  };

  const handleLikeClick = () => {
    tracks[currentTrackIndex].like = !tracks[currentTrackIndex].like;
    setLike(!like);
  };

  const handleProgressBarRelease = (value: number) => {
    let newTime = (duration / 100) * value;
    audioEl.current.currentTime = newTime;
  };

  const handleVolumeBarRelease = (value: number) => {
    let newValue = value / 100;
    audioEl.current.volume = newValue;
    setVolume(newValue);
  };

  const handleAction = (action: string) => () => {
    if (action === 'like') {
      handleLikeClick();
    }
    if (action === 'repeat') {
      handleRepeatClick();
    }
    if (action === 'previously') {
      handlePrevAClick();
    }
    if (action === 'pause') {
      handlePauseClick();
    }
    if (action === 'next') {
      handleNextAClick();
    }
    if (action === 'random') {
      handleRandomClick();
    }
    if (action === 'show-playlist') {
      handleShowPlaylistClick();
    }
  };

  const handleVolumeBarChange = (value: number) => {
    let newValue = value / 100;
    audioEl.current.volume = newValue;
    setVolume(newValue);
  };

  useEffect(() => {
    audioEl.current.load();

    if (!pause) {
      audioEl.current.play();
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    if (pause) {
      audioEl.current.pause();
    } else {
      audioEl.current.play();
    }
  }, [pause]);

  useEffect(() => {
    setVolume(audioEl.current.volume);
  }, []);

  const currentTrack = tracks[currentTrackIndex];

  return {
    audioEl,
    currentTime,
    duration,
    handleAction,
    handleBackClick,
    handleShowPlaylistClick,
    handleEndedTrack,
    handleLoadedMetadata,
    handleProgressBarRelease,
    handleTimeUpdate,
    handleListItemClick,
    handleVolumeBarRelease,
    handleVolumeBarChange,
    repeat,
    pause,
    random,
    isPlaylistVisible,
    currentTrack,
    volume,
  };
};
