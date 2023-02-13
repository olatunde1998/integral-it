import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const PageTitle = ({currentPage}) => {
  return (
    <Box pl={3} style={{marginTop:"20px",marginBottom:"40px",paddingTop:"20px",paddingBottom:"20px", backgroundColor:"#f7f7f7", borderBottom:"1px solid #ededed"}}>
        <Typography><Link to="/" style={{textDecoration: "none"}}> <span style={{marginRight: "10px",color: "#02046b"}}>Home</span></Link>/<span style={{marginLeft:"10px"}}>{currentPage}</span></Typography>
        <Typography variant="h5" style={{color:"#545454", fontWeight: "700"}}>{currentPage}</Typography>
    </Box>
  )
}

export default PageTitle