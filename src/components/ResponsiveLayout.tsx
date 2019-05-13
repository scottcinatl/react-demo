import * as React from "react";
import injectSheet from "react-jss";

/**
 * The styles for the ResponsiveLayout component.
 */
const styles = {
  layout: {
    margin: '0 auto',
    width: '80%'
  }
};

/**
 * The props for the ResponsiveLayout component.
 */
interface Props {
  children: any;
  classes: { [className in keyof typeof styles]: string };
}

/**
 * The ResponsiveLayout component.
 */
const ResponsiveLayout = ({
  children,
  classes
}: Props) => {
  return (
    <div className={classes.layout}>
        {children}
    </div>
  );
};

/**
 * A component that renders the ResponsiveLayout.
 */
const StyledResponsiveLayout = injectSheet(styles)(ResponsiveLayout);
export { StyledResponsiveLayout as ResponsiveLayout };
