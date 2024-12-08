import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

function Layout() {

    const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
        <header>
        {/* <input
          type="text"
          placeholder="Search brands"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
      </header>
      <Outlet context={{ searchTerm }} />
    </div>
  )
}

export default Layout