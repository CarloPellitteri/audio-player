import clsx from 'clsx';
import styles from './Component.scss';

interface ComponentProps {}

export const Component = (props: ComponentProps) => {
  return (
    <div
      className={clsx({
        [styles[`component`]]: true,
      })}
    ></div>
  );
};
