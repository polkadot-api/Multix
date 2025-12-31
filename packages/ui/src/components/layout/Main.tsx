import { Box, Button, Link } from '@mui/material'
import Header from '../Header/Header'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { Center } from './Center'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'

const CenterStyled = styled(Center)`
  text-align: center;
`
const ErrorMessageStyled = styled('div')`
  text-align: center;
  margin-top: 1rem;

  button {
    margin-top: 1rem;
  }
`
const FORUM_POST_URL =
  'https://forum.polkadot.network/t/multix-sunset-announcement-jan-1-2026/16454'

function MainLayout() {
  return (
    <BoxStyled>
      <Header />
      <Container
        fixed
        maxWidth="lg"
      >
        <CenterStyled>
          <ErrorMessageStyled>
            <HiOutlineExclamationCircle size={64} />
            <div>
              Multix has been sunset and is now offline. Thanks to everyone who used and supported
              it.
            </div>
            <Button
              component={Link}
              href={FORUM_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              variant="outlined"
              size="small"
            >
              Read the announcement
            </Button>
          </ErrorMessageStyled>
        </CenterStyled>
      </Container>
    </BoxStyled>
  )
}

const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
`

export default MainLayout
