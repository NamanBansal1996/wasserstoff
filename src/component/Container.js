import React from 'react'
import { Map,tileLayer} from 'leaflet'

export default function Container() {
  return (
      <div className='container1'>
        <div className='sidebar'>
            <div className='totalusers'>
                All u sers
            </div>
            <div className='count'></div>
            <div className='earning'></div>
            <div className='users'></div>
        </div>
        <div className='map'>
        {/* <Map center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <tileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map> */}
        </div>
      </div>
    
  )
}
