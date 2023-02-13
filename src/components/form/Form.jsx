import { Button, Container, FormControl, TextField } from "@mui/material"


const Form = () => {
    const handleSubmit = ()=>{
        console.log('Thank you')
    }
  return (
    <Container style={{display:"flex"}}>
        <FormControl>
            <form onSubmit={handleSubmit}>
            <TextField sx={{marginBottom: "20px"}} placeholder="Your Name" variant="outlined" color="secondary" fullWidth required/>
            <TextField sx={{marginBottom: "20px"}} placeholder="Your Email" variant="outlined"  color="secondary" fullWidth required/>
            <TextField sx={{marginBottom: "20px"}} placeholder="Subject" variant="outlined" color="secondary" fullWidth required/>
            <TextField sx={{marginBottom: "20px"}} placeholder="Message" variant="outlined"  color="secondary" fullWidth required/>
            
            <Button type="submit" variant="outlined">Submit</Button>
            </form>
        </FormControl>
    </Container>
  )
}

export default Form