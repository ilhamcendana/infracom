import Button from 'components/Button';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.scss';

//GLOBAL UTILS
import { LOG_OUT } from 'utils/utils';

const Navbar = () => {
    const [scrollPos, scrollPosSet] = useState(window.scrollY);
    useEffect(() => {
        function scrollDetect() {
            scrollPosSet(window.scrollY)
        }
        window.addEventListener('scroll', scrollDetect);
        return () => window.removeEventListener('scroll',scrollDetect);
    }, [])
    return (
        <div
            style={{ transform: `translateY(${scrollPos > 20 ? 0 : -60}px)` }}
            className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to='/'>Cendana</NavLink>
            </div>
            <div className={styles.linkContainer}>
                <NavLink exact activeClassName={styles.activeLink} to='/'>Home</NavLink>
                <NavLink exact activeClassName={styles.activeLink} to='/profile'>Profile</NavLink>
                <Button
                    text='Logout'
                    variant='secondary'
                    className={styles.logoutButton}
                    onClick={LOG_OUT}
                />
            </div>
        </div>
    );
}

export default Navbar;