import React from "react"

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
class Body2 extends React.Component {
    render(){
        const content = {
            flexGrow: 1,
            backgroundColor: "#f5f5f5",
            width:"100%"
        }
        const container = {
            minHeight: "150px",
            border: "1px solid black;",
        }
        const imageWrap={
            marginLeft:"50px"
        }
        const imagestyle = {
            marginRight: "100px"
        }
        const paper = {
            textAlign: 'center'
        }
        
        return(
            <div style={content}>
                <Grid
                    container
                    alignItems="center"
                    style={container}
                >
                    <Grid item xs={1} style={paper}>
                    </Grid>
                    <Grid item xs={10} >
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justify="flex-start"
                            style={imageWrap}
                        >
                            <img style={imagestyle} src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/airbnb-logo.png" />

                            <img style={imagestyle} src="https://a.slack-edge.com/80588/marketing/img/logos/company/electronic-arts-logo.png" />

                            <img style={imagestyle} src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/target-logo.png" />

                            <img style={imagestyle} src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/ameritrade-logo.png " />

                            <img style={imagestyle} src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/oracle-logo.png" />

                            <img style={imagestyle} src="https://a.slack-edge.com/80588/marketing/img/logos/company/electronic-arts-logo.png" />
                        </Grid>
                    </Grid>
                    <Grid item xs={1} style={paper}>
                     </Grid>

                    {
                        /*
                        두번째
                        */
                    }



                </Grid>
            </div>
        )
    }

}
export default Body2;