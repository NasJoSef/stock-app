import React from 'react'
import SidedbarMenu from '../components/SidedbarMenu'
import Header from '../components/Header'
import MainLayout from '../components/MainLayout'

export default function Dashboard() {
  return (
    <div className=''>
      <div className=''>
        <SidedbarMenu />
      </div>
      <div className=''>
        <div>
          <Header />
        </div>
        <div>
          <MainLayout />
        </div>
      </div>
    </div>
  )
}
