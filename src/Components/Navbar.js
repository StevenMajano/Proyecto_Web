import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes , faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    
    const [active, isActive] = useState(false);

    return (
        <nav className="w-screen flex flex-col items-end relative">
            <div className="w-full flex justify-between items-center bg-green-500 text-white">
                <h1 className="pl-4 font-medium text-2xl">Bienvenido</h1>
            {
                active
                ? <FontAwesomeIcon icon={faTimes} size="2x" className="mr-5 mt-3 mb-3" onClick={() => isActive (!active)}/> 
                : <FontAwesomeIcon icon={faEllipsisV} size="2x" className="mr-5 mt-3 mb-3" onClick={() => isActive (!active)} />
            }
            </div>
            <ul className={`${ active ? '' : 'hidden'} options bg-green-400 w-screen h-screen max-w-xs absolute mt-10 z-10 lg:mt-14`}>
                <li className="font-bold text-xl h-24 flex justify-center items-center hover:bg-green-600 hover:text-white">Inicio</li>
                <li className="font-bold text-xl h-24 flex justify-center items-center hover:bg-green-600 hover:text-white">Perfil</li>
                <li className="font-bold text-xl h-24 flex justify-center items-center hover:bg-green-600 hover:text-white">Post</li>
            </ul>    
        </nav>
    );
};

export default Navbar;