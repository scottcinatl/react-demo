import React from "react";
import { Item, Label } from "semantic-ui-react";
import { UserProfile } from "../types";
import injectSheet from "react-jss";

/**
 * The styles for the FriendsList component.
 */
const styles = {
  container: {
    marginTop: "25px"
  }
};

/**
 * The props for the FriendsList component.
 */
interface Props {
  classes: { [className in keyof typeof styles]: string };
  friends: UserProfile[];
}

/**
 * The FriendsList component.
 */
const FriendsList = ({ classes, friends }: Props) => (
  <Item.Group divided>
    {friends.map(profile => (
      <Item>
        <Item.Image src={profile.userIcon} />

        <Item.Content>
          <Item.Header as="a">{profile.username}</Item.Header>
          <Item.Meta>
            <span className="cinema">{profile.friends} Friends</span>
          </Item.Meta>
          <Item.Description>{profile.description}</Item.Description>
          <Item.Extra>
            <Label>{profile.label}</Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
);

/**
 * A component that renders the FriendsList.
 */
const StyledFriendsList = injectSheet(styles)(FriendsList);
export { StyledFriendsList as FriendsList };
