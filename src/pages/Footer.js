import React from "react"
import Grid from "@material-ui/core/Grid"
class Footer extends React.Component {
    render() {
        const content = {
            flexGrow: 1,
            backgroundColor: "white",
            width: "100%"
        }
        const container = {
            
            minHeight: "150px",
            
        }
        const divstyle = {
            display: 'inline-block',
            float: 'left'
            , marginLeft: '150px',
            marginTop:'40px'
        }
        const div2style = {
            display: 'inline-block',
            float: 'right',
            marginTop:'50px'
        }
        return (
            <div>
                <Grid container
                    alignItems="center" style={content}>
                    <Grid item xs={12} style={container}>

                    <div style={divstyle}>
                                <img src="slack_footer_logo.png" alt="img" />
                    </div>
    
                    <div style={div2style}>
                                <img src="slack_footer_icons.png" alt="img" />
                    </div>
                    </Grid>
                </Grid>

            </div>
        )
    }
}
export default Footer;