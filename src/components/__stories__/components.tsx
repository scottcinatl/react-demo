import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { AnimatedButton } from "../AnimatedButton";
import { Button } from "../Button";

storiesOf("Components", module)
  .addDecorator(withKnobs)
  .add("AnimatedButton", () => {
    const type = select(
      "Button Type",
      ["basic", "primary", "secondary", "none"],
      "primary"
    );
    return (
      <AnimatedButton
        hiddenName={text("Hidden Text", 'Are You Sure?')}
        isLoading={boolean("isLoading", false)}
        onSubmit={action("onSubmit")}
        type={type}
        visibleName={text("Visible Text", 'Accept')}
      />
    );
  })
  .add("Button", () => {
    const type = select(
      "Button Type",
      ["basic", "primary", "secondary", "none"],
      "primary"
    );
    return (
      <Button
        isLoading={boolean("isLoading", false)}
        name="Button"
        onSubmit={action("onSubmit")}
        type={type}
      />
    );
  });
