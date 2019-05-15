import React from "react";
import { Divider, Header, Icon, Item, Label } from "semantic-ui-react";
import { UserProfile as UserProfileType } from "../types";
import { ResponsiveLayout } from "../../../components/ResponsiveLayout";
import injectSheet from "react-jss";
import { FriendsList } from "./FriendsList";

/**
 * The styles for the UserProfile component.
 */
const styles = {
  container: {
    marginTop: "25px"
  },
  friendsContainer: {
    margin: "10px auto",
    width: "90%"
  },
  noFriendsMessage: {
    textAlign: 'center'
  }
};

/**
 * The props for the UserProfile component.
 */
interface Props {
  classes: { [className in keyof typeof styles]: string };
  friends: UserProfileType[];
  userProfile: UserProfileType;
}

/**
 * The UserProfile component.
 */
const UserProfile = ({ classes, friends, userProfile }: Props) => (
  <ResponsiveLayout>
    <div className={classes.container}>
      <Item.Group>
        <Item>
          <Item.Image size="medium" src={userProfile.userIcon} />

          <Item.Content>
            <Item.Header as="a">{userProfile.username}</Item.Header>
            <Item.Description>{userProfile.description}</Item.Description>
            <Item.Extra>
              <Label as="a" color="blue" image>
                {userProfile.label}
              </Label>{" "}
              {userProfile.friends} Friends
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="users" />
          Friends
        </Header>
      </Divider>
      <div className={classes.friendsContainer}>
        {friends.length ? (
          <FriendsList friends={friends} />
        ) : (
          <div className={classes.noFriendsMessage}>
            You currently don't have any friends
          </div>
        )}
      </div>
    </div>
  </ResponsiveLayout>
);

/**
 * A component that renders the UserProfile.
 */
const StyledUserProfile = injectSheet(styles)(UserProfile);
export { StyledUserProfile as UserProfile };
