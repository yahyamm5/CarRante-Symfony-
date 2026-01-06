import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, name, price, quantity, description) {
  return { id, name, price, quantity, description };
}

const rows = [
  createData(1,"phone",850,350,"good phone !"),
  createData(2, "laptop",1200,100,"good laptop !"),

];

const FullFeaturedCrudGrid = () => {
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 , marginTop:"30px" }} aria-label="simple table">
        <TableHead>
          <TableRow>

            <TableCell align="right">id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">price $</TableCell>
            <TableCell align="right">quantity</TableCell>
            <TableCell align="right">description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 1, } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default FullFeaturedCrudGrid
