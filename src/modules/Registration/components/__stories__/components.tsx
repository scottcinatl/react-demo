import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { LoginForm } from '../../components/LoginForm'

storiesOf("Modules.Registration", module)
  .addDecorator(withKnobs)
  .add("Login", () => {
    return (
      <LoginForm onSubmitLogin={action("LoginSubmitted")} />
    );
  })
