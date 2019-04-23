import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { UserInvitation } from "../components/UserInvitation";
import { UserInvitations } from "../components/UserInvitations";
import { userInvitations } from "../../../../.storybook";

storiesOf("Modules.UserInvitations", module)
  .addDecorator(withKnobs)
  .add("UserInvitations", () => {
    return (
      <UserInvitations
        isLoading={boolean("isLoading", false)}
        onApprove={action("Invitation Approved")}
        onDecline={action("Invitation Declined")}
        userInvitations={userInvitations}
      />
    );
  })
  .add("UserInvitation", () => {
    return (
      <UserInvitation
        isLoading={boolean("isLoading", false)}
        onApprove={action("Invitation Approved")}
        onDecline={action("Invitation Declined")}
        userInvitation={userInvitations[0]}
      />
    );
  });
