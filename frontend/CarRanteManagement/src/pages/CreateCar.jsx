import { 
  Card, CardContent, Typography, TextField, Button, 
  Grid, MenuItem, Box, InputAdornment, Divider, 
  Select,
  Modal
} from '@mui/material';
import { 
  DirectionsCar, 
  Settings, 
  Numbers, 
  Badge, 
  Payments, 
  AppRegistration 
} from '@mui/icons-material';
import { useState } from 'react';
import { CarsAPiStore } from '../API/ApiStore';


const CreateCar = () => {

    const {Create_car} = CarsAPiStore();

    const [brand, setBrand] = useState('');
    const [module, setModule] = useState('');
    const [year, setYear] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [dailyPrice, setDailyPrice] = useState('');
    const [status, setStatus] = useState('');
    const [category, setCategory] = useState('');

    const handleCreateCar = async (e) => {
        e.preventDefault()
        try {
            await Create_car(brand,module,year,licensePlate,dailyPrice,status,category);
        } catch (error) {
            console.log(error);
        }
    }

return (
    <Box sx={{ minHeight: '30vh', bgcolor: 'white', py: 8, display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleCreateCar}>
      <Card sx={{ maxHeight: 600, maxWidth: 700, width: '100%', borderRadius: 3, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
        <Box sx={{ p: 3, borderBottom: '1px solid #eee', bgcolor: '#fff' }}>
          <Typography variant="h5" fontWeight="700" color="black">
            Vehicle Registration
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Add car details in the fleet inventory.
          </Typography>
        </Box>

        <CardContent sx={{ p: 4 }}>
          <Grid container spacing={3}>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Brand"
                value={brand}
                placeholder="brand"
                onChange={(e) => setBrand(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Model"
                value={module}
                placeholder="e.g. X5"
                onChange={(e) => setModule(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Year"
                value={year}
                type="number"
                onChange={(e) => setYear(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="License Plate"
                value={licensePlate}
                placeholder="ABC-1234"
                onChange={(e) => setLicensePlate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                fullWidth
                label="Cat"
                value={category}
                defaultValue=""
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="SUV">SUV</MenuItem>
                <MenuItem value="Luxury">Luxury</MenuItem>
              </Select>
            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Daily Price"
                value={dailyPrice}
                placeholder="0"
                onChange={(e) => setDailyPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Availability Status"
                value={status}
                defaultValue="Available"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="Rented">Rented</MenuItem>
                <MenuItem value="Maintenance">Maintenance</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button 
                variant="contained" 
                fullWidth 
                size="large"
                type='submit'
                sx={{ 
                  py: 1.8, 
                  borderRadius: 2, 
                  textTransform: 'none', 
                  fontSize: '1rem',
                  fontWeight: '600',
                  boxShadow: 'black',
                  bgcolor: "black",
                  marginTop: "-15px"

                }}
              >
                Register Vehicle
              </Button>
            </Grid>
            <Grid>
              <Button 
              sx={{bgcolor:"white", color:"black", border: 1, marginTop: "10px"}}
              href='/allCars'
              >Back</Button>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
      </form>
    </Box>
  );
};

export default CreateCar
