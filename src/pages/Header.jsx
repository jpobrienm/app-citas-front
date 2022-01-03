import React, { Fragment, useState } from 'react';
import './Header.css';
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <h1 className='myHref'><a href="/citasReactivas">Citas</a></h1>
            <h1 className='myHref'><a href="/padecimientos">Padecimientos</a></h1>
        </>
    );
}

export default Navbar;