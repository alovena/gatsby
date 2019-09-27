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
            border: "1px solid black;",
        }
        const divstyle = {
            textAlign: 'center',
            display: 'inline',
            float: 'left'
            , marginLeft: '150px'
        }
        const div2style = {
            textAlign: 'center',
            display: 'inline',
            float: 'right'
        }
        return (
            <div>
                <Grid container
                    alignItems="center" style={content}>
                    <Grid item xs={12} style={container}>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justify="flex-start"
                           
                        >
                            <div style={divstyle}>
                                <img src="slacklogo.png" alt="img" />
                            </div>
                        </Grid>


                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justify="flex-end"
                            
                        >
                            <div style={div2style}>
                                Foooter
                            </div>
                        </Grid>









                    </Grid>
                </Grid>

            </div>
        )
    }
}
export default Footer;