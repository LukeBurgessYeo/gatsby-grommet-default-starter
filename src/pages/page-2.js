import React from 'react'
import { navigate } from 'gatsby'
import { Button, Heading, Paragraph } from 'grommet'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Heading>Hi from the second page</Heading>
    <Paragraph>Welcome to page 2</Paragraph>
    <Button
      primary={true}
      alignSelf="start"
      onClick={() => navigate('/')}
      label="Go back to the homepage"
    />
  </Layout>
)

export default SecondPage
