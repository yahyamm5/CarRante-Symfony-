
import { 
  Card, CardContent, Typography, TextField, Button, 
  Grid, MenuItem, Box, InputAdornment, Divider 
} from '@mui/material';
import { useEffect, useState } from 'react';
import { CarsAPiStore, CustomerApiStore, LeaseAgreementApiStore } from '../API/ApiStore';



const NewLeaseAgreement = () => {

  const {create_LeaseAgreement} = LeaseAgreementApiStore();
  const {car, list_cars} = CarsAPiStore();
  const {customer, list_customers} = CustomerApiStore();

  const [brand,SetBrand] = useState("");
  const [name,setName] = useState("");
  const [StartDate,setStartDate] = useState("");
  const [EndDate,SetEndDate] = useState("");
  const [Status,SetStatus] = useState("");
  const [TotalPrice,SetTotalPrice] = useState(null);

const handleLeaseCreation = async(e) => {
  e.preventDefault();
  try {
    await create_LeaseAgreement(brand, name, StartDate, EndDate, TotalPrice, Status);
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  list_cars();
  list_customers();
}, [list_cars, list_customers])

return (
    <Box sx={{ minHeight: '30vh', bgcolor: 'white', py: 8, display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleLeaseCreation}>
      <Card sx={{ maxWidth: 700, width: '100%', borderRadius: 3, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
        <Box sx={{ p: 3, borderBottom: '1px solid #eee', bgcolor: '#white' }}>
          <Typography variant="h5" fontWeight="700" color="black">
            Lease Agreement
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage your rental contract details and pricing.
          </Typography>
        </Box>

        <CardContent sx={{ p: 4 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Car"
                value={brand}
                onChange={(e) => SetBrand(e.target.value)}
              >
                {car.map((car) => (
                  <MenuItem key={car.id} value={car.brand} >{car.brand}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} sx={{marginTop:4, marginBottom: 4}}>
              <TextField
                select
                fullWidth
                label="Customer"
                value={name}
                onChange={(e) => setName(e.target.value)}
              >
                {customer.map((customer) => (
                  <MenuItem key={customer.id} value={customer.name} >{customer.name}</MenuItem>
                ))}
              </TextField>
            </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Divider sx={{ my: 1 }}><Typography variant="caption" color="text.secondary" sx={{ px: 1, fontWeight: 'bold', textTransform: 'uppercase' }}>Dates & Duration</Typography></Divider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                helperText="Start Date"
                type="date"
                value={StartDate}
                onChange={(e) => setStartDate(e.target.value)}
              >
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="filled"
                helperText="End Date"
                type="date"
                value={EndDate}
                onChange={(e) => SetEndDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 1 }}><Typography variant="caption" color="text.secondary" sx={{ px: 1, fontWeight: 'bold', textTransform: 'uppercase' }}>Financials & Status</Typography></Divider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Total Price"
                placeholder="0.00" 
                value={TotalPrice}
                onChange={(e) => SetTotalPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                helperText="Status"
                defaultValue="pending"
                value={Status}
                onChange={(e) => SetStatus(e.target.value)}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button 
                variant="contained" 
                type='submit'
                fullWidth 
                size="large"
                sx={{ 
                  py: 1.8, 
                  borderRadius: 2, 
                  textTransform: 'none', 
                  fontSize: '1rem',
                  fontWeight: '600',
                  boxShadow: 'black',
                  bgcolor:"#333"
                }}
              >
                Save Lease Agreement
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      </form>
    </Box>
  );
};

export default NewLeaseAgreement
