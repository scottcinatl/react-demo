import * as React from "react";
import injectSheet from "react-jss";
import { Button as SemanticButton } from "semantic-ui-react";

/**
 * The styles for the Button component.
 */
const styles = {
  button: {
    minWidth: '120px',
    textTransform: 'uppercase !important'
  }
};

/**
 * The props for the Button component.
 */
interface Props {
  classes: { [className in keyof typeof styles]: string };
  color?: "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black" | "facebook" | "google plus" | "vk" | "twitter" | "linkedin" | "instagram" | "youtube" | undefined
  isLoading: boolean;
  name: string;
  onSubmit: () => void;
  type: "basic" | "primary" | "secondary" | "none";
}

/**
 * The Button component.
 */
const Button = ({ classes, color, isLoading, name, onSubmit, type }: Props) => {
  return (
    <>
      <SemanticButton
        className={classes.button}
        color={color}
        basic={type === "basic"}
        secondary={type === "secondary"}
        primary={type === "primary"}
        loading={isLoading}
        onClick={onSubmit}
      >
        {name}
      </SemanticButton>
    </>
  );
};

/**
 * A component that renders the Button.
 */
const StyledButton = injectSheet(styles)(Button);
export { StyledButton as Button };
