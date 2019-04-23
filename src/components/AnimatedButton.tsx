import * as React from "react";
import injectSheet from "react-jss";
import { Button as SemanticButton } from "semantic-ui-react";

/**
 * The styles for the AnimatedButton component.
 */
const styles = {
  button: {
    minWidth: '120px',
    textTransform: "uppercase !important"
  }
};

/**
 * The props for the AnimatedButton component.
 */
interface Props {
  classes: { [className in keyof typeof styles]: string };
  color?:
    | "red"
    | "orange"
    | "yellow"
    | "olive"
    | "green"
    | "teal"
    | "blue"
    | "violet"
    | "purple"
    | "pink"
    | "brown"
    | "grey"
    | "black"
    | "facebook"
    | "google plus"
    | "vk"
    | "twitter"
    | "linkedin"
    | "instagram"
    | "youtube"
    | undefined;
  hiddenName: string;
  isLoading: boolean;
  onSubmit: () => void;
  type: "basic" | "primary" | "secondary" | "none";
  visibleName: string;
}

/**
 * The AnimatedButton component.
 */
const AnimatedButton = ({
  classes,
  color,
  hiddenName,
  isLoading,
  onSubmit,
  type,
  visibleName
}: Props) => {
  return (
    <>
      <SemanticButton
        animated="fade"
        className={classes.button}
        color={color}
        basic={type === "basic"}
        secondary={type === "secondary"}
        primary={type === "primary"}
        loading={isLoading}
        onClick={onSubmit}
      >
        <SemanticButton.Content visible>{visibleName}</SemanticButton.Content>
        <SemanticButton.Content hidden>{hiddenName}</SemanticButton.Content>
      </SemanticButton>
    </>
  );
};

/**
 * A component that renders the AnimatedButton.
 */
const StyledAnimatedButton = injectSheet(styles)(AnimatedButton);
export { StyledAnimatedButton as AnimatedButton };
