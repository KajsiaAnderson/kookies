import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CiUser } from 'react-icons/ci';
import styles from './DropdownMenu.module.css'
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

export default function PositionedMenu() {
    const authCtx = useContext(AuthContext)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <CiUser className={styles.icon} />
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disableScrollLock={true}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem onClick={handleClose}><Link to='profile' className={styles.orderLink}>Orders</Link></MenuItem>
                <MenuItem onClick={authCtx.logout} className={styles.logoutLink}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

