import React from "react"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TextField } from "@material-ui/core";

class Body4 extends React.Component{
    render(){
        const content = {
            flexGrow: 1,
            backgroundColor: "white",
            width:"100%"
        }
        const container = {
            minHeight: "200px",
            border: "1px solid black;",
        }
        
        const paper = {
            textAlign: 'center'
        }
        
        return(
            <div style={content}>
                <Grid container
                    alignItems="center"
                    style={container}>
                <Grid item xs={12} style={paper}>
                        js Images
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Body4;