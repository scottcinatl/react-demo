import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, withKnobs, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { UserProfile } from "../../components/UserProfile";
import { getUserProfile, getUserProfiles } from "../../../../../.storybook";
import { FriendsList } from "../FriendsList";

storiesOf("Modules.UserProfile", module)
  .addDecorator(withKnobs)
  .add("UserProfile", () => {
    return <UserProfile friends={getUserProfiles()} userProfile={getUserProfile()} />;
  })
  .add("FriendsList", () => {
    return <FriendsList friends={getUserProfiles()} />;
  })
