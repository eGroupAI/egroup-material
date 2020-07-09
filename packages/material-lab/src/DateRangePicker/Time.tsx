import React from 'react';

import {
  Grid,
  createStyles,
  Theme,
  withStyles,
  Typography
} from '@material-ui/core';
import { TimeProps } from './DateRangePicker.d';
import clsx from 'clsx';

const getTimes = () => {
  const hours = Array.from(Array(24).keys()).map(el =>
    el < 10 ? `0${el}` : `${el}`
  );
  const times = [];
  for (let i = 0; i < hours.length; i++) {
    const h = hours[i];
    times.push(`${h}:00`);
    times.push(`${h}:30`);
  }
  return times;
};

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'inline-flex'
    },
    header: {
      height: 53,
      width: '100%',
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    container: {
      height: 285
    },
    column: {
      overflow: 'auto',
      maxHeight: 285,
      padding: '4px 0',
      width: 80
    },
    item: {
      width: '100%',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s',
      padding: '6px 0',

      '&:hover': {
        backgroundColor: theme.palette.action.hover
      }
    },
    itemActive: {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',

      '&:hover': {
        backgroundColor: theme.palette.primary.main
      }
    }
  });

const Time: React.FunctionComponent<TimeProps> = props => {
  const columnEl = React.useRef();
  const activeEl = React.useRef();
  const { classes, onTimeClick, value } = props;

  React.useEffect(() => {
    const column = columnEl.current || undefined;
    const active = activeEl.current || undefined;
    if (column && active) {
      column.scrollTop = active.offsetTop - 60;
    }
  }, [value]);

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <div className={classes.header} />
        <Grid item container className={classes.container}>
          <Grid ref={columnEl} item className={classes.column}>
            <Grid container direction="column">
              {getTimes().map(el => {
                const isActive = value === el;
                return (
                  <Grid
                    ref={isActive ? activeEl : undefined}
                    item
                    key={el}
                    className={clsx(
                      classes.item,
                      isActive && classes.itemActive
                    )}
                    onClick={() => onTimeClick(el)}
                  >
                    <Typography variant="body2">{el}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Time);
