import * as React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import injectSheet from "react-jss";
import { UserInvitation } from "./UserInvitation";

/**
 * The styles for the UserInvitations component.
 */
const styles = {
  card: {
    width: "350px !important"
  }
};

interface UserInvitation {
  invitationMessage: string;
  userIcon: string;
  username: string;
  userNetwork: string;
}

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
    <Card.Group>
      {userInvitations.map(userInvitation => (
        <UserInvitation
          isLoading={isLoading}
          onApprove={onApprove}
          onDecline={onDecline}
          userInvitation={userInvitation}
        />
      ))}
    </Card.Group>
  );
};

/**
 * A component that renders the UserInvitations.
 */
const StyledUserInvitations = injectSheet(styles)(UserInvitations);
export { StyledUserInvitations as UserInvitations };
