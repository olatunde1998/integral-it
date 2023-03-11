import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";


const CompanyHero = () => {
  return (
    <motion.div initial={{x:'-100vw'}} animate={{x: 0}} transition={{type:'spring',duration:5, delay:3}}>
      <Grid container spacing={2} style={{ marginTop: "30px" }}>
        <Grid item md={5}>
          <img
            src="https://images.businessnewsdaily.com/app/uploads/2022/04/04074130/teamwork_g-stockstudio_getty.jpg"
            alt="team"
          />
        </Grid>
        <Grid item md={7}>
          <Typography
            variant="h5"
            style={{
              color: "#545454",
              paddingBottom: "20px",
              fontWeight: "600",
            }}
          >
            We are a team who love technology!
          </Typography>
          <Typography style={{ marginBottom: "20px", fontStyle: "italic" }}>
            {" "}
            Integral Information Technologies Ltd (Integral iT) was established
            to provide modern business technology solutions and services
            tailored to meet individual business requirements.{" "}
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            Integral iT offers organisations current, relevant, and
            cost-effective technology solutions and services that give a solid
            platform to exceed their business goals and increase their
            competitive edge.
          </Typography>
          <Typography>
            In accordance with our commitment to offer our clients an unequalled
            quality of service and satisfaction, all our people are
            industry-certified experts who have the experience and knowledge
            required to design and implement the innovative solutions that our
            clients crave.
          </Typography>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default CompanyHero;
