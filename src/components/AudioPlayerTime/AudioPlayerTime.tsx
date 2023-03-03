import clsx from 'clsx';
import styles from './AudioPlayerTime.scss';
import { AudioPlayerText } from '../AudioPlayerText/AudioPlayerText';
import { getMinutesFromSeconds } from './utilities';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Grid } from '../Grid/Grid';

export interface AudioPlayerTimeProps {
  onMouseUp: (progress: number) => void;
  maxValue: number;
  currentValue?: number;
}

export const AudioPlayerTime = (props: AudioPlayerTimeProps) => {
  return (
    <div
      className={clsx({
        [styles[`audio-player-progress-bar`]]: true,
      })}
    >
      <Grid
        container
        direction="column"
        gap="8"
      >
        <Grid item>
          <ProgressBar
            value={(props.currentValue / props.maxValue) * 100}
            onMouseUp={props.onMouseUp}
          />
        </Grid>

        <Grid item>
          <Grid
            container
            justifyContent="space-between"
          >
            <Grid
              item
              shrink
            >
              <AudioPlayerText color="blue">{getMinutesFromSeconds(props.currentValue)}</AudioPlayerText>
            </Grid>
            <Grid
              item
              shrink
            >
              <AudioPlayerText color="blue">{getMinutesFromSeconds(props.maxValue)}</AudioPlayerText>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
