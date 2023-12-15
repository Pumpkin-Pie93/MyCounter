import React from 'react';
import {NavLink} from "react-router-dom";

export const NavLinks = () => {
    return (
      // <div className={'wrapper'}>
      //       <div className={'title'}>
      //           <h1>Counter</h1>
      //       </div>
            <div className={'navLinks'}>
                {/*<NavLink to={'/'}>Change counter type</NavLink>*/}
                {/*<NavLink to={'/counterOne'}>Simple Counter</NavLink>*/}
                <NavLink to={'/counterTwo'}>Advanced counter</NavLink>
                <NavLink to={'/counterWithRedux'}>Simple Counter with Redux</NavLink>
            </div>
    );
};

