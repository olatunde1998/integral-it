import { Grid } from "@mui/material";
import CardComponent from "components/card/CardComponent";
import Maps from "components/map/Maps";
import { Container } from "@mui/system";
import Form from "components/form/Form";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import PageTitle from "components/pageTitle/PageTitle";
import { motion } from "framer-motion";


const contactVariants = {
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

const Contact = () => {
  return (
    <motion.div variants={contactVariants} initial='hidden' animate='visible' exit='exit'>
      <PageTitle currentPage="Contact"/>
      <Container>
        <Grid container spacing={3} style={{ marginTop: "40px" }}>
          <Grid item sm={12} md={6}>
            <CardComponent
              detail="Plot 7 Block 52A Omorinre Johnson street, Lekki Phase one, Lagos, Nigeria"
              icon={
                <PlaceOutlinedIcon
                  sx={{
                    marginLeft: "20px",
                    color: "#259ad0",
                    fontSize: "50px",
                  }}
                />
              }
              heading="Our Address"
            />
          </Grid>
          <Grid item sm={6} md={3}>
            <CardComponent
              detail="Plot 7 Block 52A Omorinre Johnson street, Lekki Phase one, Lagos, Nigeria"
              icon={
                <EmailOutlinedIcon
                  sx={{
                    marginLeft: "20px",
                    color: "#259ad0",
                    fontSize: "50px",
                  }}
                />
              }
              heading="Our Address"
            />
          </Grid>
          <Grid item sm={6} md={3}>
            <CardComponent
              detail="Plot 7 Block 52A Omorinre Johnson street, Lekki Phase one, Lagos, Nigeria"
              icon={
                <WifiCalling3OutlinedIcon
                  sx={{
                    marginLeft: "20px",
                    color: "#259ad0",
                    fontSize: "50px",
                  }}
                />
              }
              heading="Our Address"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop:"20px"}}>
          <Grid item sm={12} md={6}>
            <Maps />
          </Grid>
          <Grid item sm={12} md={6}>
            <Form/>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Contact;
