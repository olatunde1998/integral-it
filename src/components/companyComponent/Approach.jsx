import { Typography } from '@material-ui/core'
import React from 'react'

const Approach = ({headings, detailsOne, detailsTwo}) => {
  return (
    <div style={{borderTop: '0.1px solid gray'}}>
        <Typography variant='h5' style={{marginBottom: "20px", fontWeight:"800", color:"gray",paddingTop:"20px" }}>
            {headings}
        </Typography>
        <Typography style={{marginBottom: "20px"}}>
            {detailsOne}
        </Typography>
        <Typography>
            {detailsTwo}
        </Typography>
    </div>
  )
}

export default Approach