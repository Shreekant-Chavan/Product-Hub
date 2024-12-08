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

      <main className="flex-1 overflow-y-auto bg-gray-400">
        
        </main>
    </div>
  )
}

export default Layout