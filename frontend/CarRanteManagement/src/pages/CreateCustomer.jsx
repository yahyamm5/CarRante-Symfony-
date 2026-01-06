import { Box, Button, Card, CardContent, Grid, TableContainer, TextField, Typography } from "@mui/material"
import { CustomerApiStore } from "../API/ApiStore"
import { useState } from "react";



const CreateCustomer = () => {

const { create_customer } = CustomerApiStore();

const [name,setName] = useState("");
const [firstname,setFirstname] = useState("");
const [email,setEmail] = useState("");
const [telephone,setTelephone] = useState("");
const [address,setAddress] = useState("");

const handleCreateCustomer = async (e) => {
  e.preventDefault();
  try {
    await create_customer(name,firstname,address,email,telephone);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <Box sx={{minHeight: '30vh', bgcolor: 'white', py: 8, display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleCreateCustomer} >
      <Card sx={{ maxHeight: 600, maxWidth: 700, width: '100%', borderRadius: 3, boxShadow:'0 8px 24px rgba(0,0,0,0.1)' }} >
        <Box sx={{ p: 3, borderBottom: '1px solid #eee', bgcolor: '#fff' }} >
          <Typography variant="h5" fontWeight="700" color="black" >
            Customer Registration
          </Typography>
          <Typography variant="body2" fontWeight="700" color="text.secondary" >
            Add new Customer details in the customer list.
          </Typography>
        </Box>
        <CardContent sx={{ p: 4 }} >
          <Grid container spacing={3} >
            <Grid item xs={12} sm={6} >
              <TextField
               fullWidth
               value={name}
               type="text"
               label="Name" 
               placeholder="name"
               onChange={(e) => setName(e.target.value)}
               />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               fullWidth 
               value={firstname}
               type="text"
               label="Firstname" 
               placeholder="firstname"
               onChange={(e) => setFirstname(e.target.value)}
               />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField
               fullWidth
               value={email}
               type="email"
               label="Email" 
               placeholder="email" 
               onChange={(e) => setEmail(e.target.value)}
               />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField
               fullWidth
               value={telephone}
               type="number"
               label="Telephone" 
               placeholder="telephone"
               onChange={(e) => setTelephone(e.target.value)}
               />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField
               fullWidth
               value={address}
               type="text"
               label="Address" 
               placeholder="address"
               onChange={(e) => setAddress(e.target.value)}
               />
            </Grid>
            <Grid item xs={12} sm={6} >
              <Button sx={{color: "white", bgcolor:"black", border: 1, marginTop: 1}} type="submit" >Create</Button>
              <Button 
              sx={{bgcolor:"white", color:"black", border: 1, marginTop: "10px"}}
              href='/allCustomers'
              >Back</Button>
            </Grid>
          </Grid>
        </CardContent>

      </Card>
      </form>
    </Box>
  )
}

export default CreateCustomer
 