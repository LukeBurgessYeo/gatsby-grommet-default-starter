import React from 'react'
import { navigate } from 'gatsby'
import { Button, Heading, Paragraph } from 'grommet'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Heading>Hi people</Heading>
    <Paragraph>Welcome to your new Gatsby site.</Paragraph>
    <Paragraph>Now go build something great.</Paragraph>
    <div style={{ maxWidth: '280px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Button
      primary={true}
      alignSelf="start"
      onClick={() => navigate('/page-2/')}
      label="Go to page 2"
    />
  </Layout>
)

export default IndexPage
