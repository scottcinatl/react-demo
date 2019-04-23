import * as React from "react";
import {  Card, Image } from "semantic-ui-react";
import {AnimatedButton} from "../../../components/AnimatedButton"
import {Button } from "../../../components/Button"
import injectSheet from "react-jss";

/**
 * The styles for the UserInvitation component.
 */
const styles = {
  card: {}
};

interface UserInvitation {
  invitationMessage: string;
  userIcon: string;
  username: string;
  userNetwork: string;
}

/**
 * The props for the UserInvitation component.
 */
interface Props {
  classes: { [className in keyof typeof styles]: string };
  isLoading: boolean
  onApprove: () => void;
  onDecline: () => void;
  userInvitation: UserInvitation;
}

/**
 * The UserInvitation component.
 */
const UserInvitation = ({
  classes,
  isLoading,
  onApprove,
  onDecline,
  userInvitation,
}: Props) => {
  return (
    <Card>
      <Image src={userInvitation.userIcon} />
      <Card.Content>
        <Card.Header>{userInvitation.username}</Card.Header>
        <Card.Meta>
          <span className="date">{userInvitation.userNetwork}</span>
        </Card.Meta>
        <Card.Description>{userInvitation.invitationMessage}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button name="Approve" type="primary" onSubmit={onApprove} isLoading={false}/>
          <AnimatedButton visibleName="Decline" hiddenName="Are You Sure?" type="none" onSubmit={onDecline} isLoading={false} />
        </div>
      </Card.Content>
    </Card>
  );
};

/**
 * A component that renders the UserInvitation.
 */
const StyledUserInvitation = injectSheet(styles)(UserInvitation);
export { StyledUserInvitation as UserInvitation };
