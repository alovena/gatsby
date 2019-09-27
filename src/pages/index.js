import React from "react"
import NavComponent from "./Nav"
import Footer from "./Footer"
import Body1 from "./Body1"
import Body2 from "./Body2"
import Body3 from "./Body3"
import Body4 from "./Body4"
import Body5 from "./Body5"

class App extends React.Component{
    render(){
        return(
            <div>
        <NavComponent/>
        <Body1/>
        <Body2/>
        <Body3/>
        <Body4/>
        <Body5/>
        <Footer/>
        
        </div>
        )
    }
}
export default App
