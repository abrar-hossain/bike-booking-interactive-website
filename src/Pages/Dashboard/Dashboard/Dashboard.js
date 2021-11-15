import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Myorders from '../Myorders/Myorders';
import Pay from '../Pay/Pay';
import UserReview from '../UserReview/UserReview';
import ManageProducts from '../../ManageProducts/ManageProducts';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import AddProducts from '../../AddProducts/AddProducts';
import DashboardHome from '../DashboardHome/DashboardHome';
import Home from '../../Home/Home/Home';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
const drawerWidth = 200;

function Dashboard(props) {
    const { logout, admin } = useAuth();
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none', color: 'white', backgroundColor: 'green' }} to='/'><Button color="inherit">Home</Button></Link>
            <br />
            <br />
            <br />
            {admin ? <Box></Box> : <Box><Link style={{ textDecoration: 'none', color: 'white', backgroundColor: 'green' }} to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
                <br />
                <Link style={{ textDecoration: 'none', color: 'white', backgroundColor: 'green' }} to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>
                <br />
                <Link style={{ textDecoration: 'none', color: 'white', backgroundColor: 'green' }} to={`${url}/myorders`}><Button color="inherit">My Orders</Button></Link>
                <br />
                <Link style={{ textDecoration: 'none', color: 'white', backgroundColor: 'green' }} to={`${url}/userReview`}><Button color="inherit">User Review</Button></Link>
                <br />
                <Button style={{ backgroundColor: 'green', color: 'white' }} onClick={logout} color="inherit">Logout</Button> </Box>}
            {admin && <Box>
                <Link style={{ textDecoration: 'none', color: 'white', backgroundColor: 'green' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link style={{ textDecoration: 'none', color: 'white', backgroundColor: 'green' }} to={`${url}/addProducts`}><Button color="inherit">Add Products</Button></Link>
                <Link style={{ textDecoration: 'none', color: 'white', backgroundColor: 'green' }} to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link>
                <Link style={{ textDecoration: 'none', color: 'white', backgroundColor: 'green' }} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
                <Button style={{ backgroundColor: 'green', color: 'white' }} onClick={logout} color="inherit">Logout</Button>
            </Box>}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <Myorders></Myorders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/userReview`}>
                        <UserReview></UserReview>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${url}/addProducts`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                    <AdminRoute path={`${url}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${url}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
