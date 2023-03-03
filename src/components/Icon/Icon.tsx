import styles from './Icon.scss';
import clsx from 'clsx';

interface IconProps {
  children: React.ReactNode;
  fill?: 'yellow' | 'blue';
}

export const Icon = (props: IconProps) => {
  return (
    <div
      className={clsx({
        [styles.icon]: true,
        [styles[`icon-fill-${props.fill}`]]: props.fill,
      })}
    >
      {props.children}
    </div>
  );
};

styles.icon;
