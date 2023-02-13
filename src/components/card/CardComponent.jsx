import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  cardBgColor: {
    "&:hover": {
      backgroundColor: "rgba(76, 152, 203, 1)",
      color: "white",
      boxShadow: "0px 2px 15px rgb(0 0 0 / 15%)",
    },
  },
});

const CardComponent = ({ heading, detail, icon }) => {
  const classnames = useStyles();
  return (
    <Card className={classnames.cardBgColor}>
      <CardActionArea
        sx={{ boxShadow: "0px 2px 15px rgb(0 0 0 / 15%)", height: "250px" }}
      >
        {icon}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body2">{detail}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
