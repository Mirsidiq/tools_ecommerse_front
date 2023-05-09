import "./users.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
const Users = () => {
  return <>
  <div className="users">
   <div className="container">
    <h2 className="users__title text-title text-dark font-serif font-bold mt-10">Users</h2>
   <TableContainer className="users__table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Region</TableCell>
            <TableCell>District</TableCell>
            <TableCell>Street</TableCell>
            <TableCell>Home</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">IsActive</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
    
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>Mirsidiq</TableCell>
               <TableCell align="right">Toshkent shahar</TableCell>
              <TableCell align="right">Chilonzor</TableCell>
              <TableCell align="right">Mezon</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">+998903971860</TableCell>
              <TableCell align="right">mirsidiq2002@gmail.com</TableCell>
              <TableCell align="right">active</TableCell>
              <TableCell align="right">
                <div className="users__table__actions">
                  <Button variant="contained" className="users__table__action__update"  color="secondary">Update</Button>
                  <Button variant="contained" className="users__table__action__delete" style={{"marginLeft":"10px"}} color="error">Delete</Button>
                </div>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
   </div>
  </div>
  </>;
}
 
export default Users;