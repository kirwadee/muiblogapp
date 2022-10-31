import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, IconButton, InputBase,Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)(()=>({
    display:'flex',
    justifyContent:'space-between'
}));

const SocialBox = styled(Box)({
    display:'flex',
    gap:10
});

const MenuBox = styled(Box)({
    display:'flex',
    gap:30
})

const  SearchBox = styled(Box)(()=>({
    display:'flex',
    gap:5,
    backgroundColor:'inherit',
}))

const MenuItems = [
    {Name:'Home', Link:'/'},
    {Name:'Products', Link:'/products'},
    {Name:'Blog', Link:'/blog'},
    {Name:'About Us', Link:'/about'},
    {Name:'Contact Us', Link:'/contact'},
]

const Navbar = () => {
    const[openMenu, setOpenMenu] = useState(false)
    const[openSearch, setOpenSearch] = useState(false)

  return (
    <AppBar position='fixed'>
        <StyledToolbar>
            <Box>
                <SocialBox>
                  <Facebook />
                  <Instagram />
                  <Twitter />
                  </SocialBox>
            </Box>
            <MenuBox sx={{display:{xs:'none', sm:'none', md:'flex'}}}>
                {MenuItems.map((item)=>(
                    <Typography 
                     sx={{
                        opacity:0.9,
                        cursor:'pointer',
                        '&:hover':{
                            opacity:1,
                            transition:`all 0.2s ease-in-out`
                        }
                     }}
                    >
                        {item.Name}
                    </Typography>
                ))}
            </MenuBox>
            <SearchBox>
                <InputBase
                 placeholder='search...'
                 sx={{width:'100%'}}
                 onClick={()=> setOpenSearch(!openSearch)}
                   />
                <IconButton
                 sx={{display:{md:'none', sm:'block', xs:'block', color:'white'}}}
                 onClick={()=>setOpenMenu(!openMenu)}
                 >
                    <MenuIcon />
                </IconButton>
            </SearchBox>
        </StyledToolbar>

        <Menu
         open={openMenu}
         onClose={() => setOpenMenu(!openMenu)}
         anchorOrigin={{
            vertical:'top',
            horizontal:'right'
         }}
         transformOrigin={{
            vertical:'top',
            horizontal:'right'
         }}
         sx={{'&. MuiPaper-root':{
            backgroundColor:'red'
        }}}
        >
            <Box
             sx={{
                width:{xs:'100%', sm:'100%'},
                height:'max-content',
        
             }} 
            >
                {MenuItems.map((item)=>(
                    <MenuItem>{item.Name}</MenuItem>
                ))}
            </Box>
        </Menu>

        <Menu
         open={openSearch}
         onClose={() => setOpenSearch(!openSearch)}
         anchorOrigin={{
            vertical:'top',
            horizontal:'center'
         }}
         transformOrigin={{
            vertical:'top',
            horizontal:'center'
         }}
         sx={{'&. MuiPaper-root':{
            backgroundColor:'red'
        }}}
        >
            <Box
             sx={{ 
                width:{xs:'400px', sm:'450px', md:'800px'},
                padding:2,
                display:'flex',
                flexDirection:'column'
             }} 
            >
                <InputBase placeholder='search' />
                <Button variant='contained' sx={{width:'100px'}} size='small'>
                    Search
                </Button>
            </Box>
        </Menu>

    </AppBar>
  )
}

export default Navbar