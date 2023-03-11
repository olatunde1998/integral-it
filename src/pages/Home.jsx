import CardComponent from "components/card/CardComponent";
import GroupIcon from "@mui/icons-material/Group";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import Slider from "components/imageSlider/Slider";
import { Typography } from "@mui/material";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import { motion } from "framer-motion";


const homeVariants = {
  hidden:{
    opacity: 0,
    x: '100vw'
  },
  visible:{
    opacity:1,
    x: 0,
    transition:{type:'spring', duration: 3, delay: 0.5}
  },
  exit:{
    y:'100vw',
    transition:{ease: 'easeInOut', duration: 3}
  }
}

const Home = () => {
  return (
    <motion.div variants={homeVariants} initial='hidden' animate='visible' exit='exit'>
      <motion.div initial={{x:'100vw'}} animate={{x: 0}} transition={{type:'spring',duration:3, delay:3}} >
      <Slider />
      </motion.div>
      <Container>
        <motion.div initial={{x:'-100vw'}} animate={{x: 0}} transition={{type:'spring',duration:5, delay:3}} style={{ marginTop: "70px" }}>
          <Typography
            variant="h5"
            style={{
              textAlign: "center",
              marginBottom: "50px",
              marginTop:"250px",
              fontWeight: "600",
            }}
          >
            Expertise
          </Typography>
          <Grid container spacing={2} style={{ display: "flex" }}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CardComponent
                detail="At integral iT, we can help you chart your own roadmap to business process automation success that meets your businesses unique needs, on budget and on time."
                icon={
                  <ChairAltOutlinedIcon
                    sx={{
                      marginLeft: "20px",
                      color: "#259ad0",
                      fontSize: "50px",
                    }}
                  />
                }
                heading="Business Process Automation & Management"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CardComponent
                detail="Our Alliance partnerships with Atlassian, Microsoft, and others give us a solid platform to offer you best in classname collaboration solutions."
                icon={
                  <GroupIcon
                    sx={{
                      marginLeft: "20px",
                      color: "#259ad0",
                      fontSize: "50px",
                    }}
                  />
                }
                heading="Collaboration Management"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CardComponent
                detail="To optimize workforce productivity, employees should be provided with the integrated tools he or she needs to access information and work efficiently."
                icon={
                  <SignalCellularAltOutlinedIcon
                    sx={{
                      marginLeft: "20px",
                      color: "#259ad0",
                      fontSize: "50px",
                    }}
                  />
                }
                heading="Workforce Productivity Management"
              />
            </Grid>
          </Grid>
        </motion.div>
        <motion.div initial={{x:'100vw'}} animate={{x: 0}} transition={{type:'spring',duration:5, delay:5, yoyo: Infinity}} style={{ marginTop: "70px" }}>
          <Typography
            variant="h5"
            style={{
              textAlign: "center",
              marginBottom: "50px",
              fontWeight: "600",
            }}
          >
            Services
          </Typography>
          <Grid container spacing={2} style={{ display: "flex" }}>
            <Grid item sm={6}>
              <CardComponent
                detail="Integral iT offers a comprehensive suite of custom software development services to help you grow your business and attain your digital transformation goals."
                icon={
                  <CollectionsBookmarkOutlinedIcon
                    sx={{
                      marginLeft: "20px",
                      color: "#259ad0",
                      fontSize: "50px",
                    }}
                  />
                }
                heading="Application/Software Development"
              />
            </Grid>
            <Grid item sm={6}>
              <CardComponent
                detail="Integral IT assigns every client with a virtual chief technical officer without the expense. Your Virtual CTO will evaluate your technology, IT infrastructure ..."
                icon={
                  <SystemUpdateAltIcon
                    sx={{
                      marginLeft: "20px",
                      color: "#259ad0",
                      fontSize: "50px",
                    }}
                  />
                }
                heading="Digital strategy development & Implementation"
              />
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Home;
