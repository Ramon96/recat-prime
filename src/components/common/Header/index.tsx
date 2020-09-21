
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface headerProps {
    favoriteCount: number | undefined;
}

const Header: React.FC<headerProps> = (props) => {
  return(
    <>
      <Link to={'/'}>Home</Link>
      <Link to={'/favorites'}>Favorieten: {props.favoriteCount}</Link>
  </>
  )
}


export default Header;



