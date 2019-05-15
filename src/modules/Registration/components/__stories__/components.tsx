import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { LoginForm } from "../../components/LoginForm";

storiesOf("Modules.Registration", module)
  .addDecorator(withKnobs)
  .add("Login", () => {
    const formSubmissionError = boolean("Form Submission Error", false);
    const isSubmitting = boolean("Form is Submitting", false)
    return (
      <LoginForm
        formSubmissionError={formSubmissionError}
        isSubmitting={isSubmitting}
        onSubmitLogin={action("LoginSubmitted")}
      />
    );
  });
