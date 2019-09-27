import React from "react"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class NavComponent extends React.Component {
    render() {
        const content = {
            flexGrow: 1,
            backgroundColor: "white",
            borderBottom:"2px solid rgba(0,0,0,0.1)"
        }
        const container = {
            minHeight: "50px",
            
        }
        const logoStyle={
            marginLeft:"150px",
        }
        const RightBtnStyle={
            marginRight:"150px",
            backgroundColor:"purple",
            color:"white",
            width:"130px"
        }
        const RightTextStyle={
            marginRight:"30px",
        }
        return (
            <div style={content}>
                <Grid container
                    spacing={10}
                    direction="row"
                    alignItems="center"
                    justify="flex-start"
                    style={container}>
                    <Grid item xs={6} >
                    <img  src="slacklogo.png" alt="logo" style={logoStyle} />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container
                            direction="row"
                            alignItems="center"
                            justify="flex-end"
                            style={container}>
                            <div style={RightTextStyle}>
                                Sign in
                            </div>
                            <Button  color="secondary" style={RightBtnStyle}>
                                Get STARTED
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default NavComponent