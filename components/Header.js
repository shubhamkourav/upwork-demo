import { AppBar, Box, Button, Toolbar } from "@mui/material";
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="transparent">
        <Toolbar disableGutters >
          <img className='h-[30px] ml-5' src={logo.src} />
          <Box sx={{ flexGrow: 0 }}>
            <button className="absolute rounded-full transition duration-200 h-10 w-10 flex 
                justify-center cursor-pointer items-center sm:w-[120px] sm:h-12 right-20 mr-8 top-1">
              Login
            </button>
            <div className='absolute rounded-full transition duration-200 bg-[#14a800] hover:bg-[#3c8224] h-10 w-10 flex 
                justify-center cursor-pointer items-center sm:w-[120px] sm:h-12 right-2 top-1'
            >
              <p className='text-white hidden sm:inline-block font-bold'>Sign Up</p>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;