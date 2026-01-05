import { AppBar, Toolbar, Typography, Button, Stack, Container } from '@mui/material';
import AdbIcon from '@mui/icons-material/DirectionsCar';
const navbar = () => {
  return (
  <AppBar position="static" sx={{ backgroundColor: '#ffffff', color: '#333', boxShadow: 1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo / Brand Name */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'Black' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            CarRante
          </Typography>

          {/* Navigation Links */}
          <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" href='/allCars' sx={{ textTransform: 'none' }}>cars</Button>
            <Button href='/contracts' color="inherit" sx={{ textTransform: 'none' }}>contracts</Button>
            <Button href='/allCustomers' color="inherit" sx={{ textTransform: 'none' }}>Customer</Button>
          </Stack>

          {/* Call to Action Button */}
          <Button 
            variant="contained" href="/newLeaseAgreement"
            sx={{ ml: 4, textTransform: 'none', borderRadius: 2, bgcolor:"black", color:"white" }}
          >
            Create a new LeaseAgreement
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default navbar
