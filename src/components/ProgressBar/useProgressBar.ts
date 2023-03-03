import { useCallback, useEffect, useRef, useState } from 'react';
import { ProgressBarProps } from './ProgressBar';

export const useProgressBar = (props: ProgressBarProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [offsetXStart, setOffsetXStart] = useState(0);
  const [progressBarClientLeftStart, setProgressBarClientLeftStart] = useState(undefined);
  const [value, setValue] = useState(props.value);

  const handleProgressBarMouseDown = (event: any) => {
    let progressBarWidth = progressBarRef.current.clientWidth;
    let newProgressBarClientLeftStart = progressBarRef.current.offsetLeft;
    let offsetXClick = event.pageX - newProgressBarClientLeftStart;

    if (offsetXClick > progressBarWidth + newProgressBarClientLeftStart) {
      return;
    }

    let newProgress = (offsetXClick / progressBarWidth) * 100;
    if (newProgress > 100) {
      newProgress = 100;
    }

    setIsMouseDown(true);
    setOffsetXStart(offsetXClick);
    setValue(newProgress);
    setProgressBarClientLeftStart(newProgressBarClientLeftStart);
  };

  const handleDocumentMouseUp = (event: any) => {
    if (!isMouseDown) {
      return;
    }

    props.onMouseUp(value);
    setIsMouseDown(false);
  };

  const handleDocumentMouseMove = useCallback(
    (event: MouseEvent) => {
      let progressBarWidth = progressBarRef.current.clientWidth;
      let distancePx = event.pageX - progressBarClientLeftStart - offsetXStart;
      let distancePercentual = (distancePx / progressBarWidth) * 100;

      if (!isMouseDown) {
        return;
      }

      if (event.pageX - progressBarClientLeftStart < 0 || event.pageX > progressBarWidth + progressBarClientLeftStart) {
        return;
      }

      let newProgress = value + distancePercentual;

      if (newProgress > 100) {
        newProgress = 100;
      }

      if (props.onChange) {
        props.onChange(newProgress);
      }

      setValue(newProgress);
    },
    [isMouseDown]
  );

  useEffect(() => {
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

  useEffect(() => {
    if (!isMouseDown) {
      setValue(props.value);
    }
  }, [props.value, isMouseDown]);

  return {
    handleProgressBarMouseDown,
    value,
    progressBarRef,
  };
};
