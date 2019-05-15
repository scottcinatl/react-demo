import * as React from "react";
import { Card, Image } from "semantic-ui-react";
import { AnimatedButton } from "../../../components/AnimatedButton";
import { UserInvitation } from "../types";
import { Button } from "../../../components/Button";
import injectSheet from "react-jss";


/**
 * The props for the UserInvitationCard component.
 */
interface Props {
  isLoading: boolean;
  onApprove: () => void;
  onDecline: () => void;
  userInvitation: UserInvitation;
}

/**
 * The UserInvitationCard component.
 */
export const UserInvitationCard = ({
  isLoading,
  onApprove,
  onDecline,
  userInvitation
}: Props) => {
  return (
    <Card>
      <Image src={userInvitation.userIcon} />
      <Card.Content>
        <Card.Header>{userInvitation.username}</Card.Header>
        <Card.Meta>
          <span className="date">{userInvitation.mutualNetwork}</span>
        </Card.Meta>
        <Card.Description>{userInvitation.invitationMessage}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            name="Approve"
            type="primary"
            onSubmit={onApprove}
            isLoading={isLoading}
          />
          <AnimatedButton
            visibleName="Decline"
            hiddenName="Are You Sure?"
            type="none"
            onSubmit={onDecline}
            isLoading={isLoading}
          />
        </div>
      </Card.Content>
    </Card>
  );
}
