import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const ExpertiseBody = ({ headings, detailsOne, detailsTwo,detailsThree }) => {
  return (
    <div style={{ borderBottom:'0.1px solid gray' }}>
      <Box style={{display:"flex", marginBottom:'20px', alignItems:"center",marginTop:"20px"}}>
        <CheckCircleOutlineOutlinedIcon sx={{color:"red",marginRight:"5px"}}/>
        <Typography variant="h6" style={{fontWeight:"700" }}>{headings}</Typography>
      </Box>

      <Typography style={{ marginBottom: "20px" }}>{detailsOne}</Typography>
      <Typography style={{ marginBottom: "20px" }}>{detailsTwo}</Typography>
      <Typography style={{ marginBottom: "20px" }}>{detailsThree}</Typography>

    </div>
  );
};

export default ExpertiseBody;
