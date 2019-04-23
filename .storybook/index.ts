import {  number, select } from "@storybook/addon-knobs";
import { UserInvitation } from '../src/modules/UserInvitations/types'

/**
 * A sample list of user invitations.
 */
export const userInvitations: UserInvitation[] = [
  {
    invitationMessage: 'Luke wants to add you to the group Best Friends',
    username: 'Luke Skywalker',
    mutualNetwork: 'Friend of Ben Kenobi',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    invitationMessage: 'Ben wants to add you to the group Jedi Masters',
    username: 'Ben Kenobi',
    mutualNetwork: 'Friend of Yoda',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    invitationMessage: 'Leia wants to add you to the group Family',
    username: 'Leia Organa',
    mutualNetwork: 'Princess of Alderaan',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768',
  },
  {
    invitationMessage: 'Han wants to add you to the group Smuggler',
    username: 'Han Solo',
    mutualNetwork: 'Friend of Chewbacca',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080&width=768',
  },
  {
    invitationMessage: 'Chewbacca wants to add you to the group Dinner',
    username: 'Chewbacca',
    mutualNetwork: 'Friend of Han Solo',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/solo-chewbacca-main_80768fa8.jpeg?region=8%2C0%2C1543%2C868&width=768',
  },
  {
    invitationMessage: 'R2-D2 wants to add you to the group Droids',
    username: 'R2-D2',
    mutualNetwork: 'Friend of Ben Kenobi',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/r2-d2_41dacaa9_68566da1.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    invitationMessage: 'C-3PO wants to add you to the group Against The Odds',
    username: 'C-3PO',
    mutualNetwork: 'Friend of R2-D2',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/C-3PO-See-Threepio_68fe125c.jpeg?region=0%2C1%2C1408%2C792&width=768',
  },
  {
    invitationMessage: 'Lando wants to add you to the group Gambling',
    username: 'Lando Calrissian',
    mutualNetwork: 'Friend of Han Solo',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/solo-lando-calrissian-b-main_69b65b65.jpeg?region=8%2C0%2C1543%2C868&width=768',
  },
  {
    invitationMessage: 'Yoda wants to add you to the group Padawan',
    username: 'Yoda',
    mutualNetwork: 'Friend of Ben Kenobi',
    userIcon: 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    invitationMessage: 'Darth Vader wants to add you to the group Father Bonding',
    username: 'Darth Vader',
    mutualNetwork: 'Friend of The Dark Side',
    userIcon: 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768',
  },
  {
    invitationMessage: 'Want to buy some death sticks?',
    username: 'Elan Sleazebaggano',
    mutualNetwork: 'Friend of Ben Kenobi',
    userIcon: 'https://lumiere-a.akamaihd.net/v1/images/elan-sleazebaggano-main-image_9ca2f407.jpeg?region=0%2C0%2C1560%2C875&width=1536'
  },
  {
    invitationMessage: 'Wanting to hang out before heading to Scarif',
    username: 'Paodok’Draba’Takat Sap’De’Rekti Nik’Linke’Ti’ Ki’Vef’Nik’NeSevef’Li’Kek',
    mutualNetwork: 'Friend of K2-SO',
    userIcon: 'https://lumiere-a.akamaihd.net/v1/images/pao-main_1588acf7.jpeg?region=0%2C0%2C1560%2C878&width=1536'
  }
]

/**
 * Returns a list of sample user invitations.
 * @param userInvitations The list of user invitations
 * @param count The number of userInvitations rquested
 */
export const getUserInvitations = (): UserInvitation[] => {
  return userInvitations.slice(0, number("Number of User Invitations", 12))
}

/**
 * Returns a user invitation based on the selcted username.
 * @param userInvitations The list of user invitations
 * @param username
 */
export const getUserInvitation = (): UserInvitation => {
  const selectedUserName = select("Select a Username", userInvitations.map(invitation => invitation.username), "Luke Skywalker")

  return userInvitations.find(invitation => invitation.username === selectedUserName) || userInvitations[0]
}
