import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://blooming-refuge-31088.herokuapp.com/motors')
            .then(res => res.json())
            .then(data => setAllProducts(data))

    }, []);
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure to delete this product?');
        if (proceed) {
            const url = `https://blooming-refuge-31088.herokuapp.com/motors/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Service Deleted successfully')
                        const remaining = allProducts.filter(product => product._id !== id);
                        setAllProducts(remaining);
                    }
                });
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{}} aria-label="Orders table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Model</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allProducts.map((allProduct) => (
                        <TableRow
                            key={allProduct._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{allProduct.model}</TableCell>
                            <TableCell component="th" scope="row">
                                {allProduct.description}
                            </TableCell>
                            <TableCell align="right">{allProduct.price}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleDeleteProduct(allProduct._id)}>
                                Delete
                            </Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageProducts;