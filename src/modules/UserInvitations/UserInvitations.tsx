import * as React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import injectSheet from 'react-jss'

/**
 * The styles for the UserInvitations component.
 */
const styles = {
  card: {
    width: '350px !important',
  },
}

interface UserInvitation {
  invitationMessage: string
  userIcon: string
  username: string
  userNetwork: string
}

/**
 * The props for the UserInvitations component.
 */
interface Props {
  classes: { [className in keyof typeof styles]: string }
  userInvitations: UserInvitation[]
}

/**
 * The UserInvitations component.
 */
const UserInvitations = ({ classes, userInvitations }: Props) => {
  return (
    <Card.Group>
      {userInvitations.map(invitation => (
        <Card className={classes.card}>
          <Card.Content>
            <Image floated="right" size="small" src={invitation.userIcon} />
            <Card.Header>{invitation.username}</Card.Header>
            <Card.Meta>{invitation.userNetwork}</Card.Meta>
            <Card.Description>{invitation.invitationMessage}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  )
}

/**
 * A component that renders the UserInvitations.
 */
const StyledUserInvitations = injectSheet(styles)(UserInvitations)
export { StyledUserInvitations as UserInvitations }
