import { Box, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import multixLogo from '../../logos/multix-logo.svg'
import { Link } from 'react-router'

const Header = () => {
  return (
    <MuiAppBarStyled position="sticky">
      <Toolbar>
        <LogoWrapperStyled>
          <HomeLinkStyled to="/">
            <LogoStyled
              src={multixLogo}
              alt={`Multix logo`}
            />
          </HomeLinkStyled>
        </LogoWrapperStyled>
      </Toolbar>
    </MuiAppBarStyled>
  )
}

const MuiAppBarStyled = styled(MuiAppBar)`
  margin-bottom: 2rem;
  height: 4.8125rem;
  background: ${({ theme }) => theme.custom.header.background};
  justify-content: center;
  box-shadow: none;
  border-bottom: 1px solid ${({ theme }) => theme.custom.text.borderColor};
`

const HomeLinkStyled = styled(Link)`
  display: flex;
`

const LogoWrapperStyled = styled(Box)`
  display: flex;
  align-items: center;
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex: 0;
    margin-right: 0.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    margin-right: 1rem;
  }
`

const LogoStyled = styled('img')`
  height: 3rem;
`
export default Header
