// import { GoogleApiBookResult } from '../src/modules/book-search'

interface UserInvitation {
  invitationMessage: string
  userIcon: string
  username: string
  userNetwork: string
}

/**
 * A sample list of user invitations.
 */
export const userInvitations: UserInvitation[] = [
  {
    invitationMessage: 'Luke wants to add you to the group Best Friends',
    username: 'Luke Skywalker',
    userNetwork: 'Friend of Ben Kenobi',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    invitationMessage: 'Ben wants to add you to the group Jedi Masters',
    username: 'Ben Kenobi',
    userNetwork: 'Friend of Yoda',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    invitationMessage: 'Leia wants to add you to the group Family',
    username: 'Leia Organa',
    userNetwork: 'Princess of Alderaan',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768',
  },
  {
    invitationMessage: 'Han wants to add you to the group Smuggler',
    username: 'Han Solo',
    userNetwork: 'Friend of Chewbacca',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080&width=768',
  },
  {
    invitationMessage: 'Chewbacca wants to add you to the group Dinner',
    username: 'Chewbacca',
    userNetwork: 'Friend of Han Solo',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/solo-chewbacca-main_80768fa8.jpeg?region=8%2C0%2C1543%2C868&width=768',
  },
  {
    invitationMessage: 'R2-D2 wants to add you to the group Droids',
    username: 'R2-D2',
    userNetwork: 'Friend of Ben Kenobi',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/r2-d2_41dacaa9_68566da1.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    invitationMessage: 'C-3PO wants to add you to the group Against The Odds',
    username: 'C-3PO',
    userNetwork: 'Friend of R2-D2',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/C-3PO-See-Threepio_68fe125c.jpeg?region=0%2C1%2C1408%2C792&width=768',
  },
  {
    invitationMessage: 'Lando wants to add you to the group Gambling',
    username: 'Lando Calrissian',
    userNetwork: 'Friend of Han Solo',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/solo-lando-calrissian-b-main_69b65b65.jpeg?region=8%2C0%2C1543%2C868&width=768',
  },
  {
    invitationMessage: 'Yoda wants to add you to the group Padawan',
    username: 'Yoda',
    userNetwork: 'Friend of Ben Kenobi',
    userIcon: 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    invitationMessage: 'Darth Vader wants to add you to the group Father Bonding',
    username: 'Darth Vader',
    userNetwork: 'Friend of The Dark Side',
    userIcon: 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768',
  },
]

/**
 * Returns a list of sample user invitations.
 * @param userInvitations The list of user invitations
 * @param count The number of userInvitations rquested
 */
export const getUserInvitations = (userInvitations: UserInvitation[], count: number): UserInvitation[] => {
  return userInvitations.slice(0, count)
}
