import styles from './Grid.scss';
import clsx from 'clsx';

interface GridProps {
  container?: boolean;
  item?: boolean;
  children: React.ReactNode;
  grow?: boolean;
  shrink?: boolean;
  direction?: 'column';
  gap?: '4' | '8' | '16' | '24' | '32';
  justifyContent?: 'center' | 'space-evenly' | 'space-between';
  alignItems?: 'center';
  style?: object;
  wrap?: boolean;
  size?: '4';
  display?: 'inline-flex';
}

export const Grid = (props: GridProps) => {
  return (
    <div
      className={clsx({
        [styles[`grid-container`]]: props.container,
        [styles[`grid-item`]]: props.item,
        [styles[`grid-grow`]]: props.grow,
        [styles[`grid-shrink`]]: props.shrink,
        [styles[`grid-direction-${props.direction}`]]: props.direction,
        [styles[`grid-gap-${props.gap}`]]: props.gap,
        [styles[`grid-wrap`]]: props.wrap,
        [styles[`grid-justify-content-${props.justifyContent}`]]: props.justifyContent,
        [styles[`grid-align-items-${props.alignItems}`]]: props.alignItems,
        [styles[`grid-size-${props.size}`]]: props.size,
        [styles[`grid-display-${props.display}`]]: props.display,
      })}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
