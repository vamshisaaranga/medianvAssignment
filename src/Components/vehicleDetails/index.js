import React, { useState } from 'react';
import { MdLocationSearching,MdOutlineLocationOn } from "react-icons/md";
import { GiSuitcase } from "react-icons/gi";
import { RiTruckFill } from "react-icons/ri";
import { BsBoxes } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import "./index.css"

 const VehicleDetails = (props) => {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const {details} = props 
    const { id,
        bidCreatedById ,
        bidCreateByName ,
        startDate ,
        stateTime ,
        bidTimeRemaining ,
        fromCity ,
        toCity ,
        vehicleType ,
        vehicleSize ,
        vehicleBody ,
        vehicleNumber ,
        materialWeight ,
        response ,
        assignedStaffId ,
        assignedStaffName ,
        bidNo,
        loadingPoint,
        unLoadingPoint,
        vehicleLoadingDate,
        material,
        requestDate,
        ExpiryDate,
        remarks,
        assignedStaff,
        phoneNo,
        TargetPrice ,
        numberOfBrider } = details
    return(
        <div className="vehicle-details-card">
        <div className="vehicle-details-container">
           <p className="id">{id}</p>
           <p className="veh"> {bidCreatedById} <br/> {bidCreateByName}</p>
           <p className="veh">{startDate} <br/> <span> {stateTime}</span></p>
           <p className="veh">{bidTimeRemaining}</p>
           <p className="veh">{fromCity} {toCity}</p>
           <p className="veh">{vehicleType}, {vehicleSize}, {vehicleBody}, {vehicleNumber}</p>
           <p className="veh">{materialWeight},000 kg</p>
           <p className="veh">{response}</p>
           <p className="veh">{assignedStaffId} <br/> {assignedStaffName}</p>
           <button type="button" className="viewDetails-button" onClick={() => setIsToggleOn(!isToggleOn)}>view Details</button>
        </div>
        {
            isToggleOn&&
        
        <div className="viewless">
        <div className="vehicle-complete-details-container">
            <div className="vehicle-location-details-container">
            <p> <span className='bidnoHead'> Bid No. </span>{bidNo} ({bidCreateByName}) </p>
            <p> {<MdLocationSearching className='locationSearch'/>} <span className='location'>{fromCity}</span> <br/> <span className='loadingpoint'>Loading Point : </span> {loadingPoint}</p>
            <p>   {<MdOutlineLocationOn className='locationOn'/>}<span  className='location'>{toCity}</span> <br/> <span className='unloadingpoint'> UnloadingPoint </span>: {unLoadingPoint}</p>
            </div>
            <div  className="vehicle-location-details-container">
                <div className='alignment'> 
                    <GiSuitcase className='suitcase'/>
                <p className='vehicle-loading-date'> Vehicle Loading Date : {vehicleLoadingDate}</p>
                </div>
                <div className='alignment'>
                <RiTruckFill className='truck'/>
                <p><span className='vehicle-type'>Vehicle Type : </span> <span className='vehicletype'>{vehicleSize} ft {vehicleType} {vehicleBody}</span></p>
                </div>
                <div className='alignment'>
                    <BsBoxes className='truck'/>
                <p><span className='vehicle-type'> Material :</span><span className='vehicletype'> {material} </span><span className='vehicle-type'> <br/>Weight : </span> <span className='vehicletype'> {materialWeight}Tons</span></p>
                </div>
                <p><span  className='vehicle-type'> Request Date : </span> <span  className='vehicletype'></span>{requestDate} <span className='vehicle-type'>ExpiryDate : </span> <span className='vehicle-type'>{ExpiryDate}</span></p>
                <p><span className='vehicle-type'>Remarks :</span> <span className='vehicletype'>{remarks}</span></p>
            </div>
            <div  className="vehicle-location-details-container">
                <div className='alignment'>
                    <FaUser className='truck'/>
                <p><span className='vehicle-type'>AssignedStaff : </span> <span className='vehicletype'>{assignedStaff}</span></p>
                </div>
                <div className='alignment'>
                    <FaPhone className='truck'/>
                <p><span className='vehicle-type'>Phone Number : </span><span  className='vehicletype'>{phoneNo}</span></p>
                </div>
                <p><span  className='vehicle-type'>TargetPrice : </span><span  className='vehicletype'>{TargetPrice}</span></p>
                <span  className='vehicle-type'>NumberOfBrider : </span><span  className='vehicletype'>{numberOfBrider}</span>
                
            </div>
            </div>
            <div className="viewlessbuttoncontainer">
            <button type="button" className="viewless-button" onClick={() => setIsToggleOn(!isToggleOn)}>view less</button>
            </div>
        </div>
 }
        </div>
 
    )

 }

 export default VehicleDetails