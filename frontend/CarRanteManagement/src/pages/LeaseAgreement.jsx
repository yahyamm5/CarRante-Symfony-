import { useEffect } from "react";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Paper, Chip, Typography, Box, CircularProgress, 
  Button,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CarsAPiStore, LeaseAgreementApiStore } from "../API/ApiStore";

const LeaseAgreement = () => {

    const {LeaseAgreement,list_LeaseAgreements,delete_LeaseAgreement, loading} = LeaseAgreementApiStore();

    useEffect(() => {
        list_LeaseAgreements();
    }, [list_LeaseAgreements])

    const handleDeleteLease = async (e) => {
    try {
        await delete_LeaseAgreement(e);
      } catch (error) {
        console.log(error);
      }
    }

    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5}}><CircularProgress sx={{color:"black"}} /></Box> 
    }

    return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>Contracts</Typography>
      
      <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <Table>
          <TableHead sx={{ bgcolor: 'white' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Car Ranted</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>StartDate</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>EndDate</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>TotalPrice</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {LeaseAgreement.map((LeaseAgreement) => (
              <TableRow key={LeaseAgreement.id} hover>
                <TableCell>
                  <Typography variant="subtitle2">{LeaseAgreement.brand}</Typography>
                </TableCell>
                <TableCell>{LeaseAgreement.name}</TableCell>
                <TableCell>{LeaseAgreement.StartDate}</TableCell>
                <TableCell>{LeaseAgreement.EndDate}</TableCell>
                <TableCell>${LeaseAgreement.TotalPrice}</TableCell>
                <TableCell>{LeaseAgreement.StartDate == LeaseAgreement.EndDate ? LeaseAgreement.Status = "completed" : LeaseAgreement.Status}</TableCell>
                <TableCell>
                  <IconButton href="/contracts" onClick={() => handleDeleteLease(LeaseAgreement.id)} >
                    <DeleteIcon sx={{color:"lightcoral"}} ></DeleteIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button sx={{bgcolor:"black", color:"white", marginTop: "20px"}} href="/newLeaseAgreement" >new Contract</Button>
      <Button sx={{bgcolor:"white", color:"black", marginTop: "0px", marginLeft: "1600px", border: 1}} href="/" >back</Button>
    </Box>
  )
}
 
export default LeaseAgreement
