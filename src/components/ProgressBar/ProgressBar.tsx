import clsx from 'clsx';
import styles from './ProgressBar.scss';
import { useProgressBar } from './useProgressBar';

export interface ProgressBarProps {
  onMouseUp?: (value: number) => void;
  onChange?: (value: number) => void;
  value?: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { handleProgressBarMouseDown, value, progressBarRef } = useProgressBar(props);

  return (
    <div
      className={styles[`audio-player-progress-bar`]}
      onMouseDown={handleProgressBarMouseDown}
      ref={progressBarRef}
    >
      <div
        className={clsx({
          [styles[`audio-player-progress-bar-cursor`]]: true,
        })}
        style={{ left: `${value}%` }}
      ></div>
      <div
        className={clsx({
          [styles[`audio-player-progress-bar-background`]]: true,
        })}
      ></div>
    </div>
  );
};
