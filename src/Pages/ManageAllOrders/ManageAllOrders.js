import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
const ManageAllOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    /*  useEffect(() => { */
    useEffect(() => {
            fetch('https://blooming-refuge-31088.herokuapp.com/orders')
                .then(res => res.json())
                .then(data => setMyOrders(data))

        }, []);
        /* axios
            .get("https://blooming-refuge-31088.herokuapp.com/orders")
            .then((res) => {
                const allOrders = res.data;
                setMyOrders(allOrders);
            })
            .catch((err) => console.log(err));
    }, []); */
    const deleteOrder = (id) => {
        const proceed = window.confirm("Are you want to delete?");
        if (proceed) {
            const url = `https://blooming-refuge-31088.herokuapp.com/orders/${id}`;
            axios
                .delete(url)
                .then((res) => {
                    console.log(res);
                    if (res.data.deletedCount > 0) {
                        const remainingMyOrders = myOrders.filter(
                            (order) => order._id !== id
                        );
                        setMyOrders(remainingMyOrders);
                    }
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                });
        }
    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{}} aria-label="Orders table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Model</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {myOrders.map((order) => (
                        <TableRow
                            key={order._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.displayName}
                            </TableCell>
                            <TableCell align="right">{order.model
                            }</TableCell>
                            <TableCell align="right">{order.price}</TableCell>
                            {
                                order.status === "pending" ? <TableCell align="right">pending</TableCell> : <TableCell align="right">SHIPPED</TableCell>
                            }

                            <TableCell align="right"><Button onClick={() => deleteOrder(order._id)}>
                                Delete
                            </Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageAllOrders;



