import React, {useState} from 'react';
import Burger from "../UI/Burger/Burger";
import Navbar from "../UI/Navbar/Navbar";
import styles from './BurgerMenu.module.css'

const BurgerMenu = ({children}) => {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <Burger onClick={() => setIsMenu(!isMenu)}/>
            </div>
            {isMenu &&
                <div className={styles.menu}>
                    <Navbar/>
                    {children}
                </div>
            }
        </div>
    );
};

export default BurgerMenu;