import {  number, select } from "@storybook/addon-knobs";
import { UserInvitation } from '../src/modules/UserInvitations/types'
import { UserProfile } from '../src/modules/UserProfile/types'

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

/**
 * A sample list of user profiles.
 */
export const userProfiles: UserProfile[] = [
  {
    friends: 20,
    label: "Jedi Master",
    description: 'A Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith.',
    username: 'Luke Skywalker',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    friends: 20,
    label: "Jedi Master",
    description: 'A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor.',
    username: 'Ben Kenobi',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    friends: 100,
    label: "General",
    description: "Princess Leia Organa (later Leia Organa Solo) was the daughter of Anakin Skywalker (Darth Vader) and Padmé Amidala. Her character has gone through many stages in the Star Wars films and Expanded Universe. In the movies, she is a senator and leader of the Rebel Alliance.",
    username: 'Leia Organa',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768',
  },
  {
    friends: 5,
    label: "Smuggler",
    description: "A human smuggler who grew up on the planet of Corellia. He was orphaned at a young age, and turned to a life of crime as a thief in order to survive the perils of the galaxy. Solo, at some point, acquired a starship and became an exceptional pilot.",
    username: 'Han Solo',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080&width=768',
  },
  {
    friends: 3000,
    label: "Warrior",
    description: "A Wookiee, a tall, hirsute biped and intelligent species from the planet Kashyyyk. Chewbacca is the loyal friend and first mate of Han Solo, and serves as co-pilot on Solo's spaceship, the Millennium Falcon.",
    username: 'Chewbacca',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/solo-chewbacca-main_80768fa8.jpeg?region=8%2C0%2C1543%2C868&width=768',
  },
  {
    friends: 10,
    label: "Savior",
    description: "A resourceful astromech droid, R2-D2 served Padmé Amidala, Anakin Skywalker and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils. A skilled starship mechanic and fighter pilot's assistant, he formed an unlikely but enduring friendship with the fussy protocol droid C-3PO.",
    username: 'R2-D2',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/r2-d2_41dacaa9_68566da1.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    friends: 1,
    label: "Debbie Downer",
    description: "C-3PO is a droid programmed for etiquette and protocol, built by the heroic Jedi Anakin Skywalker, and a constant companion to astromech R2-D2. Over the years, he was involved in some of the galaxy’s most defining moments and thrilling battles -- and is fluent in more than seven million forms of communication. In the years after the Empire’s defeat C-3PO served Leia Organa, becoming the head of a Resistance spy ring aimed at undermining the First Order.",
    username: 'C-3PO',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/C-3PO-See-Threepio_68fe125c.jpeg?region=0%2C1%2C1408%2C792&width=768',
  },
  {
    friends: 1000,
    label: "Gambler",
    description: "A human male smuggler, gambler, and card player who became Baron Administrator of Cloud City and, later, a general in the Rebel Alliance. He was the owner of the Millennium Falcon before losing it to Han Solo in a game of sabacc on Numidian Prime.",
    username: 'Lando Calrissian',
    userIcon:
      'https://lumiere-a.akamaihd.net/v1/images/solo-lando-calrissian-b-main_69b65b65.jpeg?region=8%2C0%2C1543%2C868&width=768',
  },
  {
    friends: 900,
    label: "Jedi Master",
    description: "A legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality.",
    username: 'Yoda',
    userIcon: 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864&width=768',
  },
  {
    friends: 3,
    label: "Sith Lord",
    description: "Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force, became a Sith Lord, and led the Empire's eradication of the Jedi Order. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master's will and seeking to crush the fledgling Rebel Alliance.",
    username: 'Darth Vader',
    userIcon: 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768',
  },
  {
    friends: 0,
    label: "Loser",
    description: "The aptly named Elan Sleazebaggano made his living selling death sticks to patrons of the Outlander Club and other hot spots in the underlevels of Coruscant. Always in search of credits, Sleazebaggano targeted both desperate addicts and unwise thrill-seekers.",
    username: 'Elan Sleazebaggano',
    userIcon: 'https://lumiere-a.akamaihd.net/v1/images/elan-sleazebaggano-main-image_9ca2f407.jpeg?region=0%2C0%2C1560%2C875&width=1536'
  },
  {
    friends: 10,
    label: "Rebel",
    description: "An amphibious Drabata, the fierce commando Pao charges into battle with the Empire while shouting a full-throated battle cry of “Sa´kalla!” as is his custom. He joins the Rogue One team on its historic mission to secure the Death Star plans.",
    username: 'Paodok’Draba’Takat Sap’De’Rekti Nik’Linke’Ti’ Ki’Vef’Nik’NeSevef’Li’Kek',
    userIcon: 'https://lumiere-a.akamaihd.net/v1/images/pao-main_1588acf7.jpeg?region=0%2C0%2C1560%2C878&width=1536'
  }
]


/**
 * Returns a list of sample user profiles.
 */
export const getUserProfiles = (): UserProfile[] => {
  return userProfiles.slice(0, number("Number of User Profiles", 12))
}

/**
 * Returns a user profile based on the selcted username.
 * @param userProfiles The list of user profiles.
 * @param username The username.
 */
export const getUserProfile = (): UserProfile => {
  const selectedUserName = select("Select a Username", userProfiles.map(profile => profile.username), "Luke Skywalker")

  return userProfiles.find(profile => profile.username === selectedUserName) || userProfiles[0]
}