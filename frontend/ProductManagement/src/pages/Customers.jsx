import { Box, Button, CircularProgress, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { CustomerApiStore } from "../API/ApiStore"
import { useEffect } from "react";


const Customers = () => {
    const { customer,loading,list_customers,delete_customer } = CustomerApiStore();
    
    useEffect(() => {
        list_customers();
    }, [list_customers]);
    
    const handleDeleteCustomer = async (e) => {
        try {
            await delete_customer(e);
        } catch (error) {
            console.log(error);
        }
    }
    
    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5}}><CircularProgress sx={{color:"black"}} /></Box>   
    }

  return (

    <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }} >Customer List</Typography>
        <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: '0 4px rgba(0,0,0,0.08)' }}>
            <Table>
                <TableHead sx={{ bgcolor: 'white' }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold'}} >name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >email</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Telephone</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customer.map((customer) => (
                        <TableRow key={customer.id} hover>
                            <TableCell>
                                <Typography variant="subtitle2" >{customer.name}</Typography>
                                <Typography variant="body2" >{customer.firstname}</Typography>
                            </TableCell>
                            <TableCell>{customer.email}</TableCell>
                            <TableCell>{customer.Telephone}</TableCell>
                            <TableCell>{customer.Address}</TableCell>
                            <TableCell>
                                <IconButton href="/allCustomers" onClick={() => handleDeleteCustomer(customer.id)} >
                                    <DeleteIcon sx={{color:"lightcoral"}} ></DeleteIcon>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Button sx={{bgcolor:"black", color:"white", marginTop: "20px"}} href="/createCustomer" >Add new Customer</Button>
        <Button sx={{bgcolor:"white", color:"black", marginTop: "0px", marginLeft: "1600px", border: 1}} href="/" >back</Button>
    </Box>
  )
}

export default Customers
