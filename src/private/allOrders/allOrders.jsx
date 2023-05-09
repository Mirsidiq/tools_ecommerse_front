import "./allOrders.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { useState } from "react";
const AllOrders = () => {
  const [isActive,setIsActive]=useState(true)
  return <>
  <div className="admin-orders">
    <div className="container">
    <h2 className="users__title text-title text-dark font-serif font-bold mt-10">Orders</h2>
   <TableContainer className="users__table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order id</TableCell>
            <TableCell>Product name</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Total Sum</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Region</TableCell>
            <TableCell align="right">District</TableCell>
            <TableCell align="right">Street</TableCell>
            <TableCell align="right">Home</TableCell>
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
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell component="th" scope="row">
                qum
              </TableCell>
              <TableCell component="th" scope="row">
                10
              </TableCell>
              <TableCell component="th" scope="row">
                200000
              </TableCell>
              <TableCell align="right">Mirsidiq</TableCell>
              <TableCell align="right">Toshkent shahar</TableCell>
              <TableCell align="right">Chilonzor</TableCell>
              <TableCell align="right">Mezon</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">+998903971860</TableCell>
              <TableCell align="right">mirsidiq2002@gmail.com</TableCell>
              <TableCell align="right">
              <Button variant="contained"  className="users__table__action__update"  color={isActive ? "success" :"inherit"} onClick={()=>setIsActive(!isActive)}>{isActive ? "active":"inactive"}</Button>
              </TableCell>
              <TableCell align="right">
                <div className="users__table__actions">
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
 
export default AllOrders;