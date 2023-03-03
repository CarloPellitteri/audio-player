import clsx from 'clsx';

import { Menu } from '../../svg/Menu';
import { Pause } from '../../svg/Pause';
import { Play } from '../../svg/Play';
import { AudioPlayerButton } from '../AudioPlayerButton/AudioPlayerButton';
import { AudioPlayerText } from '../AudioPlayerText/AudioPlayerText';
import { Grid } from '../Grid/Grid';
import { Icon } from '../Icon/Icon';
import styles from './AudioPlayerListItem.scss';

interface AudioPlayerListItemProps {
  title: string;
  artist: string;
  active?: boolean;
  onClick: () => void;
  pause: boolean;
}

export const AudioPlayerListItem = (props: AudioPlayerListItemProps) => {
  return (
    <div
      className={clsx({
        [styles[`audio-player-list-item`]]: true,
        [styles[`audio-player-list-item-active`]]: props.active,
      })}
      onClick={props.onClick}
    >
      <Grid
        container
        shrink
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid
          item
          shrink
        >
          <Grid
            container
            alignItems="center"
            gap="16"
          >
            <Grid item>
              <AudioPlayerButton>
                <Icon fill="blue">
                  {!props.active && <Play />}
                  {props.active && props.pause && <Play />}
                  {props.active && !props.pause && <Pause />}
                </Icon>
              </AudioPlayerButton>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
              >
                <Grid
                  item
                  shrink
                >
                  <AudioPlayerText weight={900}>{props.title}</AudioPlayerText>
                </Grid>
                <Grid
                  item
                  shrink
                >
                  <AudioPlayerText>{props.artist}</AudioPlayerText>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid
          item
          shrink
        >
          <AudioPlayerButton invisible>
            <Icon fill="blue">
              <Menu />
            </Icon>
          </AudioPlayerButton>
        </Grid> */}
      </Grid>
    </div>
  );
};
