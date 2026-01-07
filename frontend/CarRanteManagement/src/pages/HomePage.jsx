import Navbar from "../components/navbar"
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid,
  Link,
  IconButton,
  Divider,
  Stack 
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const HomePage = () => {
  return (
    <Box>
      <Navbar/>
      <Box>
      {/* 1. Hero Section */}
      <Box 
        sx={{ 
          bgcolor: '#f8f9fa', 
          pt: 12, 
          pb: 10,
          borderBottom: '1px solid #eee'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 800 }}
          >
            Car Leasing Made Simple.
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Manage your fleet, track active lease agreements, and handle customer 
            contracts all in one professional dashboard.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button href="/allCars" variant="contained" size="large" sx={{ borderRadius: 2, bgcolor: 'black' }}>
              View Fleet
            </Button>
            <Button variant="outlined" size="large" sx={{ borderRadius: 2, color: 'black', borderColor: 'black' }}>
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
    <Box 
      sx={{ 
        bgcolor: '#333', 
        color: '#fff', 
        py: 6, 
        mt: 'auto', // Pushes footer to bottom if using Flexbox layout
        borderTop: '1px solid #444' 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          
          {/* Brand and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <DirectionsCarIcon sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 1 }}>
                CarRante
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#bbb', lineHeight: 1.8 }}>
              CarRante is a premium car leasing management platform. 
              We simplify the connection between fleet owners and customers 
              through secure, automated lease agreements and real-time inventory tracking.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Platform
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="none" sx={{ color: '#bbb', '&:hover': { color: '#fff' } }}>Inventory</Link>
              <Link href="#" color="inherit" underline="none" sx={{ color: '#bbb', '&:hover': { color: '#fff' } }}>Customers</Link>
              <Link href="#" color="inherit" underline="none" sx={{ color: '#bbb', '&:hover': { color: '#fff' } }}>Contracts</Link>
            </Box>
          </Grid>

          {/* Social and Contact */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small" sx={{ color: '#bbb', '&:hover': { color: '#fff', bgcolor: '#444' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#bbb', '&:hover': { color: '#fff', bgcolor: '#444' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#bbb', '&:hover': { color: '#fff', bgcolor: '#444' } }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: '#444' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="caption" sx={{ color: '#777' }}>
            © {new Date().getFullYear()} CarRante Automotive Systems. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" variant="caption" sx={{ color: '#777', underline: 'none' }}>Privacy Policy</Link>
            <Link href="#" variant="caption" sx={{ color: '#777', underline: 'none' }}>Terms of Service</Link>
          </Box>
        </Box>
      </Container>
    </Box>
    </Box>
  )
}

export default HomePage
