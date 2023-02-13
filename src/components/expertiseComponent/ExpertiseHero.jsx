import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const ExpertiseHero = () => {
  return (
    <Grid container spacing={2} style={{marginTop:'30px',marginBottom:"80px"}}>
      <Grid item sm={4}>
        <img
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="team"
        />
      </Grid>
      <Grid item sm={8}>
        <Typography variant="h5" style={{color:"#545454",paddingBottom:"20px", fontWeight:"600"}}>Expertise</Typography>
        <Typography style={{ marginBottom: "20px",fontStyle:"italic" }}>
          {" "}
          Integral iT specialises in bridging the execution gap to deliver
          lasting results in multiple business situations and industries.{" "}
        </Typography>
        <Typography>
          Our expertise is derived from our partners, staff, and network of
          several consulting and industry professionals who are recognised
          experts in their fields. This balance between technology consulting
          and industry expertise ensures that we always deliver pragmatic,
          results-oriented solutions for our clients.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ExpertiseHero;
