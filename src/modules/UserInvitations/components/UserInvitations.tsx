import * as React from "react";
import { Card } from "semantic-ui-react";
import injectSheet from "react-jss";
import { UserInvitationCard } from "./UserInvitationCard";
import { UserInvitation } from "../types";
import { ResponsiveLayout } from "../../../components/ResponsiveLayout";

/**
 * The styles for the UserInvitations component.
 */
const styles = {
  card: {
    width: "350px !important"
  }
};

/**
 * The props for the UserInvitations component.
 */
interface Props {
  classes: { [className in keyof typeof styles]: string };
  isLoading: boolean
  onApprove: () => void;
  onDecline: () => void;
  userInvitations: UserInvitation[];
}

/**
 * The UserInvitations component.
 */
const UserInvitations = ({
  classes,
  isLoading,
  onApprove,
  onDecline,
  userInvitations,
}: Props) => {
  return (
    <ResponsiveLayout>
    <Card.Group>
      {userInvitations.map(userInvitation => (
        <UserInvitationCard
          isLoading={isLoading}
          onApprove={onApprove}
          onDecline={onDecline}
          userInvitation={userInvitation}
        />
      ))}
    </Card.Group>
    </ResponsiveLayout>
  );
};

/**
 * A component that renders the UserInvitations.
 */
const StyledUserInvitations = injectSheet(styles)(UserInvitations);
export { StyledUserInvitations as UserInvitations };
