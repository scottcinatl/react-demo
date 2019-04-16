import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Button } from '../Button'

storiesOf('Reusable Components', module).add('Button', () => <Button onSubmit={action('onSubmit')} />)
