import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import veges from "../../static/veges.jpg";

const RecentNewsCard = () => {
  return (
    <Box>
      <Link to="/details" style={{ textDecoration: "none", color: "inherit" }}>
        <CardMedia
          component={"img"}
          alt="recent news"
          height="100%"
          image={veges}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" align="start" component={"div"}>
            Election Petition
          </Typography>
          <Typography gutterBottom paragraph align="left" component={"div"}>
            Election Petitions are usually held after elections when a
            disattisfied petitioner feels that the elections held were not fair
            or the elections were affected by irregulaties and hence need to go
            to court.
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            align="left"
            component={"div"}
          >
            Beau Freedom
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default RecentNewsCard;
