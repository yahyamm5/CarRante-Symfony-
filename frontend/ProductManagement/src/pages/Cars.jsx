import { useEffect } from "react";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Paper, Chip, Typography, Box, CircularProgress, 
  Button,
  IconButton
} from '@mui/material';
import { CarsAPiStore } from "../API/ApiStore";
import DeleteIcon from '@mui/icons-material/Delete';

const Cars = () => {
    const {car,list_cars,delete_car,loading} = CarsAPiStore();

    useEffect(() => {
        list_cars();
    }, [list_cars]);

    const handleDeleteCar = async (e) => {
    try {
        await delete_car(e);
        
      } catch (error) {
        console.log(error);
      }
    }

    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5}}><CircularProgress sx={{color:"black"}} /></Box> 
    }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>Vehicle Fleet</Typography>
      
      <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <Table>
          <TableHead sx={{ bgcolor: 'white' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Vehicle</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>License Plate</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Year</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Daily Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {car.map((car) => (
              <TableRow key={car.id} hover>
                <TableCell>
                  <Typography variant="subtitle2">{car.brand}</Typography>
                  <Typography variant="body2" color="grey">{car.modele}</Typography>
                </TableCell>
                <TableCell>{car.licensePlate}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>${car.dailyPrice}</TableCell>
                <TableCell>
                  <Chip 
                    label={car.status} 
                    color={car.status === 'Available' ? 'success' : 'warning'} 
                    size="small" 
                    sx={{ fontWeight: 'bold' }}
                  />
                </TableCell>
                <TableCell>{car.category}</TableCell>
                <TableCell>
                  <IconButton href="/allCars" onClick={() => handleDeleteCar(car.id)} >
                    <DeleteIcon sx={{color:"lightcoral"}} ></DeleteIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button sx={{bgcolor:"black", color:"white", marginTop: "20px"}} href="/createCar" >Add new Car</Button>
      <Button sx={{bgcolor:"white", color:"black", marginTop: "0px", marginLeft: "1600px", border: 1}} href="/" >back</Button>
    </Box>
  );
};

export default Cars
