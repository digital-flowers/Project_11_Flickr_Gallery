import React  from 'react';
import Search from './Search';
import Navmenu from './Navmenu';

const Header = () => (
  <div>
    <h1>Flickr React Gallery</h1>
    <Search data={this.performSearch}/>
    <Navmenu />
  </div>
);

export default Header;
