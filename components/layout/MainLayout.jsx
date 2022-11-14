import React from 'react'
import { ToastContainer } from 'react-toastify'
import NavBar from './NavBar'

export default function MainLayout({children}) {
  return (
    <div>

        <NavBar/>
        <ToastContainer
                  position="top-center"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover={false}
                  theme="light"
                />
        <div className='lg:mx-40 md:mx-6'>
            {children}
        </div>
        
    </div>
  )
}
