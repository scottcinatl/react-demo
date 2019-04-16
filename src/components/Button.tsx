import * as React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'

/**
 * The styles for the Button component.
 */
const styles = {
  button: {
    position: 'relative',
    display: 'inline-block',
    boxSizing: 'border-box',
    border: 'none',
    borderRadius: '4px',
    padding: '0 16px',
    minWidth: '64px',
    height: '36px',
    verticalAlign: 'middle',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    color: 'rgb(var(--pure-material-onprimary-rgb, 255, 255, 255))',
    backgroundColor: 'rgb(var(--pure-material-primary-rgb, 33, 150, 243))',
    boxShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    fontFamily: 'var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system)',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '36px',
    overflow: 'hidden',
    outline: 'none',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s',
    '&:active': {
      boxShadow:
        '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)',
    },
    '&:after': {
      content: '',
      position: 'absolute',
      left: '50%',
      top: '50%',
      borderRadius: '50%',
      padding: '50%',
      width: '32px' /* Safari */,
      height: '32px' /* Safari */,
      backgroundColor: 'rgb(var(--pure-material-onprimary-rgb, 255, 255, 255))',
      opacity: 0,
      transform: 'translate(-50%, -50%) scale(1)',
      transition: 'opacity 1s, transform 0.5s',
    },
    '&:before': {
      content: '',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgb(var(--pure-material-onprimary-rgb, 255, 255, 255))',
      opacity: 0,
      transition: 'opacity 0.2s',
    },
    '&:hover': {
      boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)',
    },
    '&:focus': {
      boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)',
    },
  },
}

/**
 * The props for the Button component.
 */
interface Props {
  classes: { [className in keyof typeof styles]: string }
  onSubmit: () => void
}

/**
 * The Button component.
 */
const Button = ({ classes, onSubmit }: Props) => {
  return (
    <div>
      <button className={classes.button} onClick={onSubmit}>
        Button
      </button>
    </div>
  )
}

/**
 * A component that renders the Button.
 */
const StyledButton = injectSheet(styles)(Button)
export { StyledButton as Button }
