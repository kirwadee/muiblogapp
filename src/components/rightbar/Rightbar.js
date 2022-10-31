import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import veges from "../../static/veges.jpg";

const Rightbar = () => {
  return (
    <Box my={4}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        bgcolor={"blue"}
        borderRadius={2}
        color="white"
        padding={1}
      >
        Most Popular
      </Typography>
      <List sx={{ width: "100%", height: "100%", bgColor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Mesh"
              src={veges}
              sx={{ width: 80, height: 80, mr: 2 }}
              variant="square"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Omanyala Wins in Tokyo!"
            secondary=" He broke world record by competing in...."
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Mesh"
              src={veges}
              sx={{ width: 80, height: 80, mr: 2 }}
              variant="square"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Omanyala Wins in Tokyo!"
            secondary=" He broke world record by competing in...."
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Mesh"
              src={veges}
              sx={{ width: 80, height: 80, mr: 2 }}
              variant="square"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Omanyala Wins in Tokyo!"
            secondary=" He broke world record by competing in...."
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Mesh"
              src={veges}
              sx={{ width: 80, height: 80, mr: 2 }}
              variant="square"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Omanyala Wins in Tokyo!"
            secondary=" He broke world record by competing in...."
          />
        </ListItem>
        <Divider variant="inset" component={"li"} />
      </List>
    </Box>
  );
};

export default Rightbar;
