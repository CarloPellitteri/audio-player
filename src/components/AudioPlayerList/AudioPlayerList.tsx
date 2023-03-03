import clsx from 'clsx';

import { Menu } from '../../svg/Menu';
import { AudioPlayerButton } from '../AudioPlayerButton/AudioPlayerButton';
import { AudioPlayerListItem } from '../AudioPlayerListItem/AudioPlayerListItem';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { AudioPlayerText } from '../AudioPlayerText/AudioPlayerText';
import styles from './AudioPlayerList.scss';
import { tracks } from '../../tracks';
import { Track } from '../../types';
import { Grid } from '../Grid/Grid';
import { Icon } from '../Icon/Icon';
import { Prev } from '../../svg/Prev';

interface AudioPlayerListProps {
  onPageClick: () => void;
  currentTrack?: Track;
  onListItemClick: (id: number) => () => void;
  pause: boolean;
}

export const AudioPlayerList = (props: AudioPlayerListProps) => {
  return (
    <div
      className={clsx({
        [styles[`audio-player-list`]]: true,
      })}
    >
      <Grid
        container
        direction="column"
        gap="16"
      >
        <Grid item>
          {/* Top */}
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid
              item
              grow
            >
              <AudioPlayerButton onClick={props.onPageClick}>
                <Icon fill="blue">
                  <Prev />
                </Icon>
              </AudioPlayerButton>
            </Grid>
            <Grid
              item
              grow
            >
              <AudioPlayerText
                size={18}
                weight={900}
              >
                Playlist
              </AudioPlayerText>
            </Grid>
          </Grid>
        </Grid>

        {/* List */}
        <Grid item>
          {tracks.map((track, index) => (
            <AudioPlayerListItem
              title={track.title}
              artist={track.artist}
              active={track.id === props.currentTrack.id}
              key={index}
              onClick={props.onListItemClick(track.id)}
              pause={props.pause}
            />
          ))}
        </Grid>

        {/* Player */}
        <Grid item>{/* <ProgressBar /> */}</Grid>
      </Grid>
    </div>
  );
};
