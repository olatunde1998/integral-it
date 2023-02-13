import Typography  from "@material-ui/core/Typography"


const Alliance = ({headings, detailsOne}) => {
  return (
    <div>
        <Typography variant="h5" style={{textAlign:"center", fontWeight:"800", marginTop:"80px", marginBottom:"40px"}}>
            {headings}
        </Typography>
        <Typography style={{textAlign:"center"}}>
            {detailsOne}
        </Typography>
    </div>
  )
}

export default Alliance