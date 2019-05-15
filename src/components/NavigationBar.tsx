import * as React from "react";
import { Button, Menu } from "semantic-ui-react";

/**
 * The props for the NavigationBar component.
 */
interface Props {
  isLoggingOut: boolean
  onNavigateToFriendsPage: () => void
  onNavigateToInvitationsPage: () => void
  onNavigateToHomePage: () => void
  onLogout: () => void
  path: "/home" | "/invitations" | "/friends"
}

export const NavigationBar = ({
  isLoggingOut,
  onNavigateToFriendsPage,
  onNavigateToInvitationsPage,
  onNavigateToHomePage,
  onLogout,
  path
}: Props) => {
  return (
    <Menu pointing secondary>
      <Menu.Item
        name="home"
        active={path === "/home"}
        color="blue"
        onClick={onNavigateToHomePage}
      />
      <Menu.Item
        name="invitations"
        active={path === "/invitations"}
        color="blue"
        onClick={onNavigateToInvitationsPage}
      />
      <Menu.Item
        name="friends"
        active={path === "/friends"}
        color="blue"
        onClick={onNavigateToFriendsPage}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Button loading={isLoggingOut} onClick={onLogout}>Log out</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
