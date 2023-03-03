import { AudioPlayerText } from '../AudioPlayerText/AudioPlayerText';
import { Grid } from '../Grid/Grid';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import styles from './VolumeBar.scss';

export interface VolumeBarProps {
  volume: number;
  onMouseUp: (value: number) => void;
  onChange: (value: number) => void;
}

export const VolumeBar = (props: VolumeBarProps) => {
  const handleProgressBarChange = (value: number) => {
    props.onChange(value);
  };

  return (
    <div className={styles['volume-bar']}>
      <Grid
        container
        direction="column"
      >
        <Grid item>
          <AudioPlayerText
            align="center"
            color="blue"
          >
            Volume
          </AudioPlayerText>
        </Grid>
        <Grid item>
          <ProgressBar
            value={props.volume * 100}
            onMouseUp={props.onMouseUp}
            onChange={handleProgressBarChange}
          />
        </Grid>
        <Grid item>
          <AudioPlayerText
            align="center"
            color="blue"
          >
            {`${Math.trunc(props.volume * 100)}%`}
          </AudioPlayerText>
        </Grid>
      </Grid>
    </div>
  );
};
