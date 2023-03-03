import clsx from 'clsx';
import { BurgerMenu } from '../../svg/BurgerMenu';
import { NextA } from '../../svg/NextA';
import { Pause } from '../../svg/Pause';
import { Play } from '../../svg/Play';
import { PrevA } from '../../svg/PrevA';
import { Random } from '../../svg/Random';
import { Repeat } from '../../svg/Repeat';
import { Track } from '../../types';
import { AudioPlayerButton } from '../AudioPlayerButton/AudioPlayerButton';
import { AudioPlayerPreview } from '../AudioPlayerPreview/AudioPlayerPreview';
import { AudioPlayerText } from '../AudioPlayerText/AudioPlayerText';
import { AudioPlayerTime } from '../AudioPlayerTime/AudioPlayerTime';
import styles from './AudioPlayerMain.scss';
import { VolumeBar } from '../VolumeBar';
import { Grid } from '../Grid/Grid';
import { Icon } from '../Icon/Icon';
import { Heart } from '../../svg/Heart';

export interface AudioPlayerMainProps {
  onAction?: (action: string) => () => void;
  currentTrack: Track;
  currentTime: number;
  duration: number;
  onProgressBarRelease: (value: number) => void;
  onVolumeBarRelease: (value: number) => void;
  onVolumeBarChange: (value: number) => void;
  repeat: boolean;
  pause: boolean;
  random: boolean;
  volume: number;
}

export const AudioPlayerMain = (props: AudioPlayerMainProps) => {
  const onProgressBarRelease = (value: number) => {
    props.onProgressBarRelease(value);
  };

  const handleVolumeBarChange = (value: number) => {
    props.onVolumeBarChange(value);
  };

  return (
    <div
      className={clsx({
        [styles[`audio-player-main`]]: true,
      })}
    >
      <Grid
        container
        direction="column"
        gap="32"
        justifyContent="center"
      >
        {/* Image */}
        <Grid item>
          <AudioPlayerPreview src="https://www.nuovecanzoni.com/wp-content/uploads/2021/06/Dolce-Vita-album-cover-shiva.jpg" />
        </Grid>

        {/* Body */}
        <Grid item>
          {/* Title & Artist, Like */}
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            gap="8"
          >
            <Grid
              item
              shrink
            >
              <Grid
                container
                direction="column"
              >
                <Grid
                  item
                  shrink
                >
                  <AudioPlayerText
                    size={18}
                    weight={900}
                  >
                    {props.currentTrack.title}
                  </AudioPlayerText>
                </Grid>
                <Grid
                  item
                  shrink
                >
                  <AudioPlayerText>{props.currentTrack.artist}</AudioPlayerText>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              shrink
            >
              <AudioPlayerButton
                onClick={props.onAction('like')}
                invisible={!props.currentTrack.like}
                active={props.currentTrack.like}
              >
                <Icon fill="blue">
                  <Heart />
                </Icon>
              </AudioPlayerButton>
            </Grid>
          </Grid>
        </Grid>

        {/* Progress Bar */}
        <Grid item>
          {/* <ProgressBar /> */}
          <AudioPlayerTime
            maxValue={props.duration}
            currentValue={props.currentTime}
            onMouseUp={onProgressBarRelease}
          />
        </Grid>

        {/* Controls */}
        <Grid item>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid
              item
              shrink
            >
              <AudioPlayerButton
                invisible={!props.repeat}
                active={props.repeat}
                onClick={props.onAction('repeat')}
              >
                <Icon fill="blue">
                  <Repeat />
                </Icon>
              </AudioPlayerButton>
            </Grid>
            <Grid
              item
              shrink
            >
              <AudioPlayerButton onClick={props.onAction('previously')}>
                <Icon fill="blue">
                  <PrevA />
                </Icon>
              </AudioPlayerButton>
            </Grid>
            <Grid
              item
              shrink
            >
              <AudioPlayerButton
                size="big"
                onClick={props.onAction('pause')}
              >
                <Icon fill="blue">
                  {!props.pause && <Pause />}
                  {props.pause && <Play />}
                </Icon>
              </AudioPlayerButton>
            </Grid>
            <Grid
              item
              shrink
            >
              <AudioPlayerButton onClick={props.onAction('next')}>
                <Icon fill="blue">
                  <NextA />
                </Icon>
              </AudioPlayerButton>
            </Grid>
            <Grid
              item
              shrink
            >
              <AudioPlayerButton
                invisible={!props.random}
                active={props.random}
                onClick={props.onAction('random')}
              >
                <Icon fill="blue">
                  <Random />
                </Icon>
              </AudioPlayerButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          grow
        >
          <Grid
            container
            direction="column"
          >
            {/* <AudioPlayerVolumeBar /> */}
            <Grid
              item
              grow
            >
              <VolumeBar
                volume={props.volume}
                onMouseUp={props.onVolumeBarRelease}
                onChange={handleVolumeBarChange}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Footer */}
        <Grid item>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              shrink
            >
              <AudioPlayerButton
                invisible
                onClick={props.onAction('show-playlist')}
              >
                <Icon fill="blue">
                  <BurgerMenu />
                </Icon>
              </AudioPlayerButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
