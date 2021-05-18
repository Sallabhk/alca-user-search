import React from 'react';

import './SearchBox.css';

export const SearchBox = props => (
<div style={{textAlign: "center", marginTop: "2rem"}}>
<input
    className='search-box'
    type='search'
    placeholder='search name or profile name'
    onChange={props.onSearchChange}
  />
</div>
);