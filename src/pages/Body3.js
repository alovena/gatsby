import React from "react"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Body3 extends React.Component {
    render() {
        const content = {
            flexGrow: 1,
            backgroundColor: "white",
            width: "100%"
        }
        const girdstyle = {
            marginTop: "100px"
        }
        const imagestyle = {
            width: "100%",
            height: "325px"
        }
        const imagestyle2={
            width:"100%"
        }
        const item_content={
            fontSize:"30px",
            fontWeight:"bold"
        }
        const item_button={
            color:"purple"
        }
        const item_content2={
            fontSize:"30px",
            fontWeight:"bold"
        }
        const item_content3={
            marginTop:"10px",
            fontWeight:"500"
        }
        const item_content4={
            marginTop:"10px"
        }
        const item_content5={
            marginTop:"15px",
            fontWeight:"500"
            ,fontSize:"17px"
        }
        const imagestyle3={

            width:"40px",
            height:"40px",
            overflow:"auto",
            display:"inline-block",
            marginTop:"20px",
            marginRight:"10px"
        }
        const item_content6={
            marginTop:'150px',
            marginBottom:'30px',
            fontSize:'30px',
            fontWeight:'bold',
            textAlign:'center'
        }
        return (

            <div style={content}>
                <Grid
                    container
                    alignItems="center"
                    style={girdstyle}
                >
                    {
                        /*
                        세번째
                        */
                    }
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={4} >
                        <img src="https://a.slack-edge.com/8913f/marketing/img/three/video-still.png"
                            style={imagestyle} />
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={4} >
                        <div style={item_content}>
                        Discover a better way of working
                        </div>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justify="flex-start"
                            
                        >
                            <form>
                            <Button color="secondary" style={item_button}>
                                    WATCH VIDEO
                            </Button>
                            </form>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} ></Grid>




                    <Grid item xs={1} ></Grid>
                    <Grid item xs={4} >
                        <div style={item_content2}>
                        Create a channel for every<br />conversation<br />
                        </div>
                        <div style={item_content3}>
                        In Slack, conversations happen in channels — <br />organized by topic, project, team, or whatever makes<br /> sense for your company. With channels, the right<br /> people don’t get left out and information doesn’t get <br />lost.
                    
                        </div>

                        <div style={item_content4}>
                        <a href="#">See the demo →</a>
                        </div>
                        
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={4} >
                    <img src="resbg.png" alt="resbg" style={imagestyle2}/>
                    </Grid>
                    <Grid item xs={2} ></Grid>



                    


                    <Grid item xs={1} ></Grid>
                    <Grid item xs={4} >
                        <img src="https://a.slack-edge.com/80588/marketing/img/three/img-integrations.png" />
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={4} >
                    <div style={item_content2}>
                    Integrate with the services you already use
                    </div>
                    <div style={item_content5}>
                        Slack integrates with the apps and services you and your team already use every day. Information flows into the stream of conversation so everyone can see it — or act on it — inside Slack.

                    </div>
                    <div>
                        <img src="https://a.slack-edge.com/80588/marketing/img/logos/apps/gdrive@2x.png" style={imagestyle3}alt="img1"/>
                        <img src="https://a.slack-edge.com/80588/marketing/img/logos/apps/dropbox_alt@2x.png"style={imagestyle3} alt="img1"/>
                        <img src="https://a.slack-edge.com/80588/marketing/img/logos/apps/asana@2x.png" style={imagestyle3} alt="img1"/>
                        <img src="https://a.slack-edge.com/80588/marketing/img/logos/apps/zoom_alt@2x.png" style={imagestyle3} alt="img1"/>
                        <img src="https://a.slack-edge.com/80588/marketing/img/logos/apps/trello@2x.png" style={imagestyle3} alt="img1"/>
                    </div>
                    <div>
                        <img src="https://a.slack-edge.com/80588/marketing/img/logos/apps/salesforce_alt@2x.png" style={imagestyle3} alt="img1"/>
                        <img src="https://a.slack-edge.com/80588/marketing/img/logos/apps/github@2x.png" style={imagestyle3} alt="img1"/>
                        <img src="https://a.slack-edge.com/80588/marketing/img/logos/apps/jira_alt@2x.png" style={imagestyle3} alt="img1"/>
                        <img src="https://a.slack-edge.com/80588/marketing/img/logos/apps/marketo@2x.png" style={imagestyle3} alt="img1"/>
                        <img src="https://a.slack-edge.com/80588/marketing/img/logos/apps/zendesk_alt@2x.png" style={imagestyle3} alt="img1"/>
                    </div>
                    </Grid>
                    <Grid item xs={2} ></Grid>


                    <Grid item xs={1} ></Grid>
                    <Grid item xs={4} >
                    <div style={item_content2}>
                    Find what you need quickly
                    </div>
                    <div style={item_content5}>
                        Everything in public channels — including messages, files, and integrations — become searchable in Slack. Find what you need to get up to speed, catch up on past decisions, and tap into your company's collective knowledge.
                    
                    </div>
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={4} >
                    
                    <img src="https://a.slack-edge.com/80588/marketing/img/three/search.png" />
                    </Grid>
                    <Grid item xs={2} ></Grid>




                    <Grid item xs={12} >
                        <div style={item_content6}>
                        Companies that collaborate in Slack
                        </div>
                       
                    </Grid>

                </Grid>
            </div>
        )
    }
}
export default Body3;