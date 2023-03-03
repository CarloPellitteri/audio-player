import clsx from 'clsx';
import styles from './AudioPlayerPreview.scss';

interface AudioPlayerPreviewProps {
  src: string;
}

export const AudioPlayerPreview = (props: AudioPlayerPreviewProps) => {
  return (
    <div
      className={clsx({
        [styles[`audio-player-preview`]]: true,
      })}
    >
      <img src={props.src} />
    </div>
  );
};
