import "./allProducts.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from "@mui/material";
import { useState } from "react";
const AllProducts = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <>
  <div className="users">
   <div className="container">
    <h2 className="users__title text-title text-dark font-serif font-bold my-10">Products</h2>
    <Button variant="contained" className="w-full" color="success" onClick={handleOpen}>Add Product</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form className="allProducts__form" >
            <TextField sx={{mt:3}} id="standard-basic" className="w-full" label="product name" variant="standard" />
            <TextField sx={{mt:3}} id="standard-basic" className="w-full" label="decription" variant="standard" />
            <TextField sx={{mt:3}} id="standard-basic" className="w-full" label="price" variant="standard" />
            <TextField sx={{mt:3}} id="standard-basic" className="w-full" label="count" variant="standard" />
            <Button sx={{mt:3}} variant="contained" className="w-full" color="success">Add Product</Button>
            </form>
        </Box>
      </Modal>
   <TableContainer className="users__table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Count</TableCell>
            <TableCell align="right">IsActive</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
    
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell >qum</TableCell>
               <TableCell >qum qurilish uchun</TableCell>
               <TableCell >2000</TableCell>
               <TableCell >150</TableCell>
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
 
export default AllProducts;