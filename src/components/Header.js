import React  from 'react';
import Search from './Search';
import Navmenu from './Navmenu';

const Header = ({onSearch}) => (
  <div>
    <h1>Flickr React Gallery</h1>
    <Search onSearch={onSearch}/>
    <Navmenu />
  </div>
);

export default Header;
