import React from 'react'
import { action } from '@storybook/addon-actions'
import { color, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { Button } from '../Button'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Button', () => {
    const buttonColor = color('Color', '#2196F3')
    return <Button onSubmit={action('onSubmit')} color={buttonColor} />
  })
