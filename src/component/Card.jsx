import React from 'react'
import {BsDatabaseAdd} from 'react-icons/bs'
import {MdCallToAction} from 'react-icons/md'
import {PiCubeTransparent} from 'react-icons/pi'
import {FcElectricity} from 'react-icons/fc'

const Card = () => {
  return (
    <>
    <h1 className='text-light text-center'>Services</h1>
    <div id='container' className='container rounded text-center bg-secondary'>
    <div className='row'>
        <div className='col-lg-3 text-center'>
            <p><BsDatabaseAdd/></p>
            <p>Data Bundle</p>
        </div>
        <div className='col-lg-3'>
            <p><MdCallToAction/></p>
            <p>Airtime</p>
        </div>
        <div className='col-lg-3'>
            <p><PiCubeTransparent/></p>
            <p>Betking</p>
        </div>
        <div className='col-lg-3'>
            <p><FcElectricity/></p>
            <p>Electricity</p>
        </div>
    </div>

    <div className='row'>
        <div className='col-lg-3'>
            <p><BsDatabaseAdd/></p>
            <p>Data Bundle</p>
        </div>
        <div className='col-lg-3'>
            <p><MdCallToAction/></p>
            <p>Airtime</p>
        </div>
        <div className='col-lg-3'>
            <p><PiCubeTransparent/></p>
            <p>Betking</p>
        </div>
        <div className='col-lg-3'>
            <p><FcElectricity/></p>
            <p>Electricity</p>
        </div>
    </div>
    <div className='row'>
        <div className='col-lg-3'>
            <p><BsDatabaseAdd/></p>
            <p>Data Bundle</p>
        </div>
        <div className='col-lg-3'>
            <p><MdCallToAction/></p>
            <p>Airtime</p>
        </div>
        <div className='col-lg-3'>
            <p><PiCubeTransparent/></p>
            <p>Betking</p>
        </div>
        <div className='col-lg-3'>
            <p><FcElectricity/></p>
            <p>Electricity</p>
        </div>
    </div>
    </div>


    
    </>
  )
}

export default Card