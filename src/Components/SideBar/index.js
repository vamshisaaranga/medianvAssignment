import { MdApps } from "react-icons/md";
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


const SideBar = () => (
    <ReactContext.Consumer>
        {
            value => {
                const {activeTab,clickedOnTab} = value
                return (
                    <div className="sidebar-container">
                        {
                            headerTab.map((each) => {
                                const activeTabClass = activeTab === each.tabName ? "sidebar-active-item-container" : "sidebar-item-container"

                                const clickTab = () => {
                                    clickedOnTab(each.tabName)
                                }

                                return(
                                    <div className={activeTabClass} key={each.tabId} onClick={clickTab}>
                                        <MdApps className="sideBar-icon"/>
                                        <p className="sidebar-item-name">{each.tabName}</p>
                                    </div>
                                )
                            })
                        }
                    
                  </div>
                )
            }
        }
    </ReactContext.Consumer>
    
)

export default SideBar