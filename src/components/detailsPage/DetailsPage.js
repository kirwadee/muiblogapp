import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import veges from "../../static/veges.jpg";
import Rightbar from "../rightbar/Rightbar";

const DetailsPage = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Container>
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={4}
        >
          <Box flex={3} p={"20px"}>
            <CardMedia
              component={"img"}
              alt="recent news"
              height="300px"
              image={veges}
            />
            <Typography align="center" variant="h4" mt={2}>
              Man arrested for selling illicit brew
            </Typography>
            <Typography m={4} align="justify" paragraph>
              Lorem ipsum si dolor emet yeengi jjsgyak kkd qwi jdjd weet reein
              mmm Lorem ipsum si dolor emet yeengi jjsgyak kkd qwi jdjd weet
              reein mmm Lorem ipsum si dolor emet yeengi jjsgyak kkd qwi jdjd
              weet reein mmm Lorem ipsum si dolor emet yeengi jjsgyak kkd qwi
              jdjd weet reein mmm Lorem ipsum si dolor emet yeengi jjsgyak kkd
              qwi jdjd weet reein mmm Lorem ipsum si dolor emet yeengi jjsgyak
              kkd qwi jdjd weet reein mmm
            </Typography>
          </Box>
          <Box flex={1} sx={{ display: { xs: "none", md: "block" } }}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default DetailsPage;
