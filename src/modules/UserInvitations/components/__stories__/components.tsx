import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { UserInvitationCard } from "../UserInvitationCard";
import { UserInvitations } from "../UserInvitations";
import { getUserInvitations, getUserInvitation } from "../../../../../.storybook";

storiesOf("Modules.UserInvitations", module)
  .addDecorator(withKnobs)
  .add("UserInvitations", () => {
    return (
      <UserInvitations
        isLoading={boolean("isLoading", false)}
        onApprove={action("Invitation Approved")}
        onDecline={action("Invitation Declined")}
        userInvitations={getUserInvitations()}
      />
    );
  })
  .add("UserInvitation", () => {
    return (
      <UserInvitationCard
        isLoading={boolean("isLoading", false)}
        onApprove={action("Invitation Approved")}
        onDecline={action("Invitation Declined")}
        userInvitation={getUserInvitation()}
      />
    );
  });
