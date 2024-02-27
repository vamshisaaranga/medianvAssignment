import { FaCircleUser } from "react-icons/fa6";
import ReactContext from "../Context/reactContext";
import "./index.css"


const headerTab = [
    {
        tabId : 1,
        tabName : "BID"
    },{
        tabId : 2,
        tabName : "POD"
    },{
        tabId : 3,
        tabName : "Vendor"
    },{
        tabId : 4,
        tabName : "User"
    }
]

const Header = () => (
      <ReactContext.Consumer>
        {
            value => {
                const {activeTab, clickedOnTab} = value

                
                return (
                    <div className="header-container">
        <div>
            <img src="https://softwareprofessionals.co.in/public/uploads/employer/JOBPORTAL-1646899824.png" alt=""
             className="header-logo"
            />
        </div>
        <div  className="header-tab-container" >
            {
                headerTab.map((each) => {
                    const activeTabClass = each.tabName === activeTab ? "active-class" : "header-tab-name"

                    const clickedTab = () => {
                        clickedOnTab(each.tabName)
                    }

                    return (
                        <div key={each.tabId} className={activeTabClass} onClick={clickedTab}>
                            <p >{each.tabName}</p>
                        </div>
                    )
                })
            }
            <div className="profile-container">
                <FaCircleUser className="user-icon"/>
                <p className="user-name">Frieght EG</p>
            </div>
        </div>
    </div>
                )
            }
        }
      </ReactContext.Consumer>

    
)

export default Header