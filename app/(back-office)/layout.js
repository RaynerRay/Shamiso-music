import Navbar from '@/components/backoffice/Navbar'
import Sidebar from '@/components/backoffice/Sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex '>
        <div>
          <Sidebar />
        </div>
        <div className="lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen">
        {/* <Navbar 
        showSidebar={showSidebar} setShowSidebar={setShowSidebar}
         /> */}
            <main className=''>{children}</main>
        </div>
      
    </div>
  )
}

export default layout