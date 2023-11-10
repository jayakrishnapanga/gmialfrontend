import { Drawer } from "@mui/material";
import React from "react";
import SidebarContent from "./sidebarContent";
const Sidebar=({openDrawer})=>{
    return(
        <Drawer 
        anchor='left'
        open={true}
        hideBackdrop={true}
        ModalProps={{
            keepMounted:true
        }}
        variant="persistent"
        sx={{
            '& .MuiDrawer-paper':{
                marginTop:'64px',
                width: openDrawer ? 250 : 65, 
                background:'white',
                borderRight:'none',
                height:'calc(100vh-64px'
            }
        }}
         >
   <SidebarContent openSidebar={openDrawer}/>
        </Drawer>
    )
}

export default Sidebar