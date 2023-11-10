import React from "react";
import {AppBar,Toolbar,styled,InputBase, Box} from '@mui/material'
import {AccountCircleOutlined, AppsOutlined, HelpOutlineOutlined, Menu as MenuIcon,Search, SettingsOutlined, Tune} from '@mui/icons-material';
import { gmaillogo } from "../constants/gmaillogo";
import { useState } from "react";
const StyledAppBar=styled(AppBar)({
    background:'#F5F5F5',
    boxShadow:'none'
})

const Styledsearchwapper=styled(Box)({
    background:'#EAF1FB',
    marginLeft:150,
    minWidth:690,
    maxWidth:720,
    height:40,
    borderRadius:30,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 20px',
    '&>div':{
        width:'100%'
    }
})
const Optionswapper=styled(Box)({
 
    display:'flex',
    alignItems:'center',
    justifyContent:'end',
    width:'100%',
    '&>svg':{
        marginLeft:20
    }
})
const Header=({toggledrawer})=>{
    const [menuIconClicked, setMenuIconClicked] = useState(false);

    const handleMenuIconClick = () => {
      setMenuIconClicked(!menuIconClicked);
      // Call your toggledrawer function here if needed
      toggledrawer();
    };
   
    return(
        <StyledAppBar position="static">
            <Toolbar>
             <MenuIcon color="action"   onClick={handleMenuIconClick} style={{cursor:'pointer'}}/>
             <img src={gmaillogo} alt='logo' style={{width:120,marginLeft:20}}/>
            <Styledsearchwapper>
                <Search color="action"/>
                <InputBase placeholder="Search mail" style={{paddingLeft:6}}/>
                <Tune color="action"/>
            </Styledsearchwapper>

            <Optionswapper>
                <HelpOutlineOutlined color="action"/>
                <SettingsOutlined color='action'/>
                <AppsOutlined color='action'/>
                <AccountCircleOutlined color='action'/>
            </Optionswapper>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;