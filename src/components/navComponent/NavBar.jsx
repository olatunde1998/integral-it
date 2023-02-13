import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem
          sx={{ display: "flex", flexDirection: "column" }}
          disablePadding
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <Button sx={{ textTransform: "capitalize", marginRight: "20px" }}>
              Home
            </Button>
          </Link>
          <Link to="company" style={{ textDecoration: "none" }}>
            <Button sx={{ textTransform: "capitalize", marginRight: "20px" }}>
              Company
            </Button>
          </Link>
          <Link to="expertise" style={{ textDecoration: "none" }}>
            <Button sx={{ textTransform: "capitalize", marginRight: "20px" }}>
              Expertise
            </Button>
          </Link>
          <Link to="services" style={{ textDecoration: "none" }}>
            <Button sx={{ textTransform: "capitalize", marginRight: "20px" }}>
              Services
            </Button>
          </Link>
          <Link to="careers" style={{ textDecoration: "none" }}>
            <Button sx={{ textTransform: "capitalize", marginRight: "20px" }}>
              Careers
            </Button>
          </Link>
          <Link to="contact" style={{ textDecoration: "none" }}>
            <Button sx={{ textTransform: "capitalize", marginRight: "20px" }}>
              Contact
            </Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    
      
      <Box sx={{ display: "flex"}}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 10%)",
          }}
        >
          <Toolbar>
            <IconButton
              color="#545454"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#545454",
                display: { xs: "none", sm: "block" },
              }}
            >
              Integral IT
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "#545454",
                    textTransform: "capitalize",
                    marginRight: "20px",
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link to="company" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "#545454",
                    textTransform: "capitalize",
                    marginRight: "20px",
                  }}
                >
                  Company
                </Button>
              </Link>

              <Link to="expertise" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "#545454",
                    textTransform: "capitalize",
                    marginRight: "20px",
                  }}
                >
                  Expertise
                </Button>
              </Link>
              <Link to="services" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "#545454",
                    textTransform: "capitalize",
                    marginRight: "20px",
                  }}
                >
                  Services
                </Button>
              </Link>
              <Link to="careers" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "#545454",
                    textTransform: "capitalize",
                    marginRight: "20px",
                  }}
                >
                  Careers
                </Button>
              </Link>
              <Link to="contact" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "#545454",
                    textTransform: "capitalize",
                    marginRight: "20px",
                  }}
                >
                  Contact
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{ p: 3 }}></Box>
      </Box>
    
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
