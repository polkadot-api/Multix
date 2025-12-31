import CloseIcon from '@mui/icons-material/Close'
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  IconButton,
  Link,
  Typography
} from '@mui/material'
import { useState } from 'react'

const FORUM_POST_URL =
  'https://forum.polkadot.network/t/multix-sunset-announcement-jan-1-2026/16454'

export const ClosedBanner = () => {
  const [open, setOpen] = useState(true)

  const announcementLink = (
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
  )

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.snackbar + 1,
        backgroundColor: 'rgb(255, 244, 229)'
      }}
      role="region"
      aria-label="Service status notice"
    >
      <Collapse in={open}>
        <Alert
          severity="warning"
          sx={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            maxWidth: 1200,
            margin: 'auto'
          }}
          action={
            <Box
              height="100%"
              display="flex"
              gap="0.25rem"
              alignItems="center"
              whiteSpace="nowrap"
            >
              <Box display={{ xs: 'none', md: 'block' }}>{announcementLink}</Box>
              <IconButton
                aria-label="Dismiss notice"
                color="inherit"
                size="small"
                onClick={() => setOpen(false)}
                sx={{ mt: 0.25 }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          }
        >
          <AlertTitle>Multix has been closed</AlertTitle>

          <Typography
            variant="body2"
            sx={{ opacity: 0.95 }}
          >
            Due to operational costs, Multix is no longer actively operated. Most features may be
            unavailable or not work correctly.
          </Typography>

          <Box
            display={{ xs: 'block', md: 'none' }}
            marginTop={1}
          >
            {announcementLink}
          </Box>
        </Alert>
      </Collapse>
    </Box>
  )
}
