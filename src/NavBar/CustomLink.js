import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink=({ children, to, ...props }) =>{
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div className='p-7'>
          <Link
            style={{ color: match ? "yellow" : "white" }}
            to={to}
            {...props}
          >
            {children}
          </Link>
        </div>
    )
};

export default CustomLink;