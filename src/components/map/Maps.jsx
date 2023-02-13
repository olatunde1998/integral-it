import { Container } from "@mui/material";

const Maps = () => {
  return (
    <Container>
      <iframe
        title="map"
        style={{ width: "100%", height:"350px" }}
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=fara%20park%20estate%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </Container>
  );
};

export default Maps;
