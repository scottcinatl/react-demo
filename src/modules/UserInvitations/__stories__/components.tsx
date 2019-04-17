import React from 'react'
import { action } from '@storybook/addon-actions'
import { color, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { UserInvitations } from '../UserInvitations'
import { userInvitations } from '../../../../.storybook'

storiesOf('Modules', module)
  .addDecorator(withKnobs)
  .add('UserInvitations', () => {
    const buttonColor = color('Color', '#2196F3')
    return <UserInvitations userInvitations={userInvitations} />
  })
