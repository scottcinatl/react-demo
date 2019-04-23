/**
 * The types for a User Invitation
 * @param invitationMessage The invitation message.
 * @param mutualNetwork The mutual network the current user has with the user requesting an invitation.
 * @param userIcon The user icon.
 * @param username The username.
 */
export interface UserInvitation {
    invitationMessage: string;
    mutualNetwork: string;
    userIcon: string;
    username: string;
  }