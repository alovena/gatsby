import React from "react"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TextField } from "@material-ui/core";

class Body5 extends React.Component{
    render(){
        const content = {
            flexGrow: 1,
            backgroundColor: "#441345",
            width:"100%",
            
        }
        const container = {
            minHeight: "350px",
            border: "1px solid black;",
        }
     
        const paper = {
            textAlign: 'center'
        }
        const itemstyle={
            fontSize:'30px',
            fontWeight:'bold',
            color:'white'
        }
        const wrapStyle={
            marginTop:"50px"
        }
        const btn1Style={
            width:'170px',
            height:'55px',
            background:'white',
            fontWeight:'500',
            color:'#441345',
            marginRight:'15px'
        }
        const btn2Style={
            width:'170px',
            height:'55px',
            border:'1px solid white',
            background:'#441345',
            fontWeight:'500',
            color:'#ffffff'
        }
        return(
            <div style={content}>
                <Grid container
                    alignItems="center"
                    style={container}>
            
                    <Grid item xs={12} style={paper}>
                        <div style={itemstyle}>
                        Try Slack with your team for free
                        </div>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justify="center"
                            style={wrapStyle}
                        >
                            <form>
                                <Button color="secondary" style={btn1Style}>
                                    GET STARTED
                                </Button>
                                <Button color="secondary" style={btn2Style}>
                                    CONTACT SALES
                                </Button>
                            </form>
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Body5;