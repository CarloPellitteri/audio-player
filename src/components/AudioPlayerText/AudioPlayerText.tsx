import clsx from 'clsx';
import styles from './AudioPlayerText.scss';

interface AudioPlayerTextProps {
  children: string;
  size?: 18;
  weight?: 900;
  color?: 'blue';
  align?: 'center';
}

export const AudioPlayerText = (props: AudioPlayerTextProps) => {
  return (
    <span
      className={clsx({
        [styles[`audio-player-text`]]: true,
        [styles[`audio-player-text-size-${props.size}`]]: props.size,
        [styles[`audio-player-text-weight-${props.weight}`]]: props.weight,
        [styles[`audio-player-text-color-${props.color}`]]: props.color,
        [styles[`audio-player-text-align-${props.align}`]]: props.align,
      })}
    >
      {props.children}
    </span>
  );
};
