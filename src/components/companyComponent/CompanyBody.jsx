import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const CompanyBody = ({ headings, detailsOne, detailsTwo }) => {
  return (
    <div>
      <Box style={{display:"flex", marginBottom:'20px'}}>
        <CheckCircleOutlineOutlinedIcon sx={{color:"red",marginRight:"5px"}}/>
        <Typography>{headings}</Typography>
      </Box>

      <Typography style={{ marginBottom: "20px" }}>{detailsOne}</Typography>
      <Typography style={{ marginBottom: "20px" }}>{detailsTwo}</Typography>
      
    </div>
  );
};

export default CompanyBody;
