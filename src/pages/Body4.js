import React from "react"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TextField } from "@material-ui/core";

class Body4 extends React.Component{
    render(){
        const content = {
            flexGrow: 1,
            backgroundColor: "white",
            width:"100%",
            
        }
        const container = {
            minHeight: "150px",
            marginBottom:'70px'
        }
        const imgstyle={
            width:'100%'
        }
       
        
        return(
            <div style={content}>
                <Grid container
                    alignItems="center"
                    style={container}>
                <Grid item xs={1}>
                        
                </Grid>
                <Grid item xs={10} >
                        <img src="backbg.png" alt="icons" style={imgstyle}/>
                </Grid>
                <Grid item xs={1} >
                        
                </Grid>
                </Grid>
            </div>
        )
    }
}
export default Body4;