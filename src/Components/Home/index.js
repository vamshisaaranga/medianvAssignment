import { MdOutlineSearch } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import Header from "../Header"
import SideBar from "../SideBar"
import VehicleDetails from "../vehicleDetails";
import "./index.css"

const vehicleDetails = [
    {
        id : 1,
        bidCreatedById : "#234457434",
        bidCreateByName : "Krishna",
        startDate : "14/03/2020",
        stateTime : "05:30 Pm",
        bidTimeRemaining : "7hr 34min",
        fromCity : "Hyderabad",
        toCity : "Delhi",
        vehicleType : "Truck",
        vehicleSize : "20",
        vehicleBody : "CloseBody",
        vehicleNumber : "Ts08TE4566",
        materialWeight : "5",
        response : "5",
        assignedStaffId : 546785456778,
        assignedStaffName : "robin",
        bidNo : 123456789,
        loadingPoint : "Ramchandranivas Oilmill, Alwal, Rajasthan",
        unLoadingPoint : "Ramchandranivas Oilmill, Alwal, Rajasthan",
        vehicleLoadingDate : "04/02/2024",
        fuleType : "CNG",
        material : "Agricultural Products",
        requestDate : "22/02/2024",
        ExpiryDate : "25/02/2024",
        remarks : "Immediate Delivery",
        assignedStaff : "Saaranga",
        phoneNo : 9876543213,
        TargetPrice : 10000,
        numberOfBrider : 34

    },
    {
        id : 2,
        bidCreatedById : "#234457434",
        bidCreateByName : "Krishna",
        startDate : "14/03/2020",
        stateTime : "05:30 Pm",
        bidTimeRemaining : "7hr 34min",
        fromCity : "Hyderabad",
        toCity : "Delhi",
        vehicleType : "Truck",
        vehicleSize : "20",
        vehicleBody : "CloseBody",
        vehicleNumber : "Ts08TE4566",
        materialWeight : "5",
        response : "5",
        assignedStaffId : 546785456778,
        assignedStaffName : "robin",
        bidNo : 123456789,
        loadingPoint : "Ramchandranivas Oilmill, Alwal, Rajasthan",
        unLoadingPoint : "Ramchandranivas Oilmill, Alwal, Rajasthan",
        vehicleLoadingDate : "04/02/2024",
        fuleType : "CNG",
        material : "Agricultural Products",
        requestDate : "22/02/2024",
        ExpiryDate : "25/02/2024",
        remarks : "Immediate Delivery",
        assignedStaff : "Saaranga",
        phoneNo : 9876543213,
        TargetPrice : 10000,
        numberOfBrider : 34

    }
]

const Home = () => (
    <>
       <Header/>
       <div className="home-container">
       <div className="home-side-bar">
        <SideBar/>
       </div>
       <div className="home-right-container">
       <div className="right-top-container">
            <div className="right-top-container-tabs">
            <p className="home-top-tab-item">Live</p>
            <p className="home-top-tab-item">Results</p>
            <p className="home-top-tab-item">History</p>
            <div className="search-input-container">
                <MdOutlineSearch className="search-icon"/>
            <input type="search" placeholder="Search" className="search-input"/>
            </div>
            </div>
            <div className="create-container">
                <p className="create">Create</p>
                <FaSquarePlus className="plus-icon"/>
            </div> 
        </div>
        <div className="home-right">
        <div className="home-status-container">
            <div className="status-container">
                <p className="status-live">Live (30)</p>
                <p className="status-responded">Responded(30)</p>
                <p className="status-unresponded">Unresponded(30)</p>
            </div>
            <div className="status-date-container">
                <p className="date-bidcreated">Bid Created</p>
                <p className="date-today">Today</p>
                <p className="date-today">Yesterday</p>
                <input type="date" placeholder="Calender" style={{margin : "20px"}}/>
                <FaFilter className="filter-icon"/>
            </div>
        </div>
        <div className="home-vehicle-header-details-container">
            <div className="vehicle-header-container">
                <p className="sno">S No.</p>
                <p className="v">Bid Number Created By</p>
                <p className="v">State Date & Time</p>
                <p className="v">Bid Time Remaining</p>
                <p className="v">From city to city</p>
                <p className="v">Vehicle Type, Size Body, No. of Vehicles</p>
                <p className="v">Material Weight (in Kg)</p>
                <p className="v">Response</p>
                <p className="v">Assigned Staff</p>
                <p className="sno">Details</p>
            </div>
            <div className="home-vehicle-details">
                {
                    vehicleDetails.map((each) => (
                        <VehicleDetails key={each.id} details={each}/>
                    ))
                }
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
)

export default Home