import { Box, Stack } from '@mui/material';
import { Container } from '@mui/system';
import Hero from '../hero/Hero';
import RecentsNews from '../recents/RecentsNews';
import Rightbar from '../rightbar/Rightbar';


const Home = () => {
  return (
    <Box >
        <Hero />
        <Container>
            <Stack direction={{xs:'column', md:'row'}} spacing={2} >
                <Box flex={3}>
                    <RecentsNews />
                </Box>
                <Box flex={1} my={4}>
                    <Rightbar />
                </Box>
            </Stack>
        </Container>
    </Box>
  )
}

export default Home