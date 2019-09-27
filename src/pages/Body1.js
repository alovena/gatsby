import React from "react"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TextField } from "@material-ui/core";


class Body1 extends React.Component {
    render() {
        const content = {
            flexGrow: 1,
            backgroundColor: "white",
            width:"100%"
        }
        const container = {
            minHeight: "200px",
        }
        const divstyle={
            display:"inline-block",
            overflow: "hidden",
        }
        const mimageStyle={
            width:"100%",
            marginLeft:"100px",
            marginTop:"30px",
            
        }
        const titleStyle={
            fontSize:"50px",
            fontWeight:"bold"
        }
        const contentStyle={
            marginTop:"10px",
            fontSize:"18px",
            fontWeight:"500"
        }
        const btnStyle={
            backgroundColor:"purple",
            width:"160px",
            height:"55px",
            color:"white",
            marginLeft:"10px"
        }
        const wrapStyle={
            marginTop:"50px"
        }
        return (
            <div style={content}>
                <Grid
                    container
                    alignItems="center"
                    style={container}
                >
                    <Grid item xs={1} >
                    </Grid>
                    <Grid item xs={4} >
                        <div style={titleStyle}>
                        Slack is where work<br /> happens<br />
                        </div>
                        <div style={contentStyle}>
                        Slack is a collaboration hub, where the right people and<br /> the right information come together, helping everyone<br /> get work done.
                        </div>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justify="flex-start"
                            style={wrapStyle}
                        >
                            <form>
                                <TextField
                                    id="outlined-bare"
                                    defaultValue="Email address"
                                    variant="outlined"
                                />
                                <Button color="secondary" style={btnStyle}>
                                    Get Start
                                </Button>
                            </form>
                        </Grid>


                    </Grid>
                    <Grid item xs={7} >
                        <div style={divstyle}>
                        <img 
                        src="https://a.slack-edge.com/80588/marketing/img/features/desktop/devices.png"
                        style={mimageStyle}
                        />
                        </div>
                    </Grid>
                    {
                        /*
                        Hello
                        */
                    }

                </Grid>
            </div>
        );
    }
}
export default Body1;