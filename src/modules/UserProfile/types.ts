/**
 * The types for a User Profile
 * @param friends The number of friends the user has.
 * @param label The label for the user profile.
 * @param profileDescription A description for the user profile.
 * @param userIcon The user icon.
 * @param username The username.
 */
export interface UserProfile {
    friends: number
    label: string
    description: string
    userIcon: string;
    username: string;
  }