import React from "react";

const ReactContext = React.createContext({
    activeTab : "",
    clickedOnTab : () => {}
})

export default ReactContext