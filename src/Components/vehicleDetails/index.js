import React, { useState } from 'react';
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
        fuleType,
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
           <p className="veh">{bidCreateByName}</p>
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
            <p> Bid No.{bidNo} </p>
            <p>{fromCity} <br/> Loading Point : {loadingPoint}</p>
            <p>{toCity} <br/> UnLoadingPoint : {unLoadingPoint}</p>
            </div>
            <div  className="vehicle-location-details-container">
                <p>Vehicle Loading Date : {vehicleLoadingDate}</p>
                <p>Vehicle Type : {vehicleType}</p>
                <p>Material : {materialWeight} Weight : {materialWeight}</p>
                <p>Request Date : {requestDate} ExpiryDate : {ExpiryDate}</p>
                <p>Remarks : {remarks}</p>
            </div>
            <div  className="vehicle-location-details-container">
                <p>AssignedStaff : {assignedStaff}</p>
                <p>Phone Number : {phoneNo}</p>
                <p>TargetPrice : {TargetPrice}</p>
                <p>NumberOfBrider : {numberOfBrider}</p>
            </div>
            </div>
            <button type="button" className="viewless-button" onClick={() => setIsToggleOn(!isToggleOn)}>view less</button>
        </div>
 }
        </div>
 
    )

 }

 export default VehicleDetails