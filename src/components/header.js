import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading } from 'grommet'

const Header = ({ siteTitle }) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    alignContent="between"
    justify="start"
    background="brand"
    pad={{ vertical: 'small', horizontal: 'large' }}
    elevation="medium"
  >
    <Box>
      <Heading margin="none" level={2}>
        <Link
          to="/"
          style={{
            color: 'white',
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </Box>
  </Box>
)

export default Header
