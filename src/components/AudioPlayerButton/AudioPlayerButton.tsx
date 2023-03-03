import clsx from 'clsx';
import { Grid } from '../Grid/Grid';
import styles from './AudioPlayerButton.scss';

interface AudioPlayerButtonProps {
  size?: 'big';
  children: React.ReactNode;
  active?: boolean;
  invisible?: boolean;
  onClick?: () => void;
  invisibleActive?: boolean;
}

export const AudioPlayerButton = (props: AudioPlayerButtonProps) => {
  return (
    <button
      className={clsx({
        [styles[`audio-player-button`]]: true,
        [styles[`audio-player-button-size-${props.size}`]]: props.size,
        [styles[`audio-player-button-active`]]: props.active,
        [styles[`audio-player-button-invisible`]]: props.invisible,
        [styles[`audio-player-button-invisible-active`]]: props.invisibleActive,
      })}
      onClick={props.onClick}
    >
      <Grid
        container
        justifyContent="center"
      >
        <Grid
          item
          shrink
        >
          {props.children}
        </Grid>
      </Grid>
    </button>
  );
};
