import { Box, styled, Typography } from '@mui/material'
import veges from '../../static/veges.jpg'

const StyledCategory = styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
}))

const StyledImage = styled(Box)(({theme})=>({
    backgroundPosition:'center',
    backgroundColor:'blue',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    height:'100px',
    cursor:'pointer',
    '&:hover':{
        opacity:0.8,
        transition:`all 0.5s ease`
    },
    [theme.breakpoints.down('md')]:{
        height:'70px',
        width:'70px'
    },
    width:'100px',
    borderRadius:'50%'
}))

const Hero = () => {
  return (
    <Box>
        <Typography align='center' variant='h4' sx={{fontWeight:800}}>
            InstantNews<b style={{color:'blue'}}>Blog</b>
        </Typography>
        <Typography variant='body2' align='center' fontWeight={100} mb={2}>
            Get the news as it happen
        </Typography>
        <Box
         sx={{
            backgroundImage:`url(${veges})`,
            backgroundPosition:'center',
            backgroundColor:'blue',
            backgroundAttachment:'fixed',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            height:'500px',
            width:'100%'
         }}
        >
          <Box sx={{overflow:'auto'}}>
            <Box sx={{
                  background:'white',
                  opacity:'0.7',
                  display:'flex',
                  gap:8,
                  overflow:'auto',
                  justifyContent:'center',
                  p:2
                   }}>
                <StyledCategory>
                    <StyledImage sx={{backgroundImage:`url(${veges})`,}} />
                    <Typography variant='caption'>Politics</Typography>
                </StyledCategory>
                <StyledCategory>
                    <StyledImage sx={{backgroundImage:`url(${veges})`,}} />
                    <Typography variant='caption'>Health</Typography>
                </StyledCategory>
                <StyledCategory>
                    <StyledImage sx={{backgroundImage:`url(${veges})`,}} />
                    <Typography variant='caption'>Games</Typography>
                </StyledCategory>
                <StyledCategory>
                    <StyledImage sx={{backgroundImage:`url(${veges})`,}} />
                    <Typography variant='caption'>Agriculture</Typography>
                </StyledCategory>
                <StyledCategory>
                    <StyledImage sx={{backgroundImage:`url(${veges})`,}} />
                    <Typography variant='caption'>Technology</Typography>
                </StyledCategory>
                <StyledCategory>
                    <StyledImage sx={{backgroundImage:`url(${veges})`,}} />
                    <Typography variant='caption'>Business</Typography>
                </StyledCategory>
                <StyledCategory>
                    <StyledImage sx={{backgroundImage:`url(${veges})`,}} />
                    <Typography variant='caption'>Law</Typography>
                </StyledCategory>
                <StyledCategory>
                    <StyledImage sx={{backgroundImage:`url(${veges})`,}} />
                    <Typography variant='caption'>International</Typography>
                </StyledCategory>
            </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Hero