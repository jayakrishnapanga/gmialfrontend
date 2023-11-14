// import React from "react";
// import {Box,Button,styled,List,ListItem} from '@mui/material'
// import { CreateOutlined } from "@mui/icons-material";
// import { Sidebar_Data } from "../config/sidebarconfig";
// import ComposeMail from "./composemail";
// import { useState } from "react";


// const Composebutton=styled(Button)({
//     background:'#c2e7ff',
//     color:'#001d35',
//     width:'60%',
//     padding:15,
//     borderRadius:10,
//     marginLeft:10,
//     textTransform:'none'

// })
// const Container=styled(Box)({
//     padding:4,
//     '& > ul':{
//        padding:'10px 0 0 20px',
//        fontSize:14,
//        fontWeight:500,
//        cursor:'pointer'
//     },
//     '& > ul > li > svg':{
//       marginRight:20
//     }
// })
// const SidebarContent=()=>{
   
//     const [openDrawer, setOpenDrawer] = useState(false);

//     // const { type } = useParams();

//     const onComposeClick = () => {
//         setOpenDrawer(true);
//     }

//     return(
//       <Container>
//         <Composebutton onClick={() => onComposeClick()}>
//             <CreateOutlined style={{marginRight:15}}/>  compose</Composebutton>

//             <List>
//                 {
//                     Sidebar_Data.map(data=>(
//                         <ListItem>
//                             <data.icon/>{data.title}
//                         </ListItem>
//                     ))
//                 }
//             </List>
//         <ComposeMail openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
//       </Container>
      
//     )
// }

// export default SidebarContent




import { useState } from 'react';
import { Button, List, ListItem, Box, styled } from '@mui/material';
import ComposeMail from './composemail';
// import { SIDEBAR_DATA } from '../config/sidebar.config';
import { Sidebar_Data ,Sidebar_Datamore} from "../config/sidebarconfig";
import { CreateOutlined } from '@mui/icons-material';
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../routes/routes';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Container = styled(Box)`
    padding: 8px;
    & > ul {
        padding: 10px 0 0 5px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        & > a {
            text-decoration: none;
            color: inherit;
        }
        & > a > li > svg {
            margin-right: 20px;
        }
    }
`

// const ComposeButton = styled(Button)`
//     background: #c2e7ff;
//     color: #001d35;
//     border-radius: 16px;
//     padding: 15px;
//     min-width: 140px;
//     text-transform: none;
// `
const ComposeButton = styled(Button)`
  background: ${({ openSidebar }) => (openSidebar ? "#c2e7ff" : "#c2e7ff")};
  color: #001d35;
  border-radius: ${({ openSidebar }) => (openSidebar ? "16px" : "16px")};
  padding: 15px;
  min-width: ${({ openSidebar }) => (openSidebar ? "140px" : "40px")};
  text-transform: none;
  transition: none;
`;

// const SidebarContent = () => {

  

  

//     const [openDrawer, setOpenDrawer] = useState(false);

//         const { type } = useParams();
    
//         const onComposeClick = () => {
//             setOpenDrawer(true);
//         }

//     return (
//         <Container>
//             <ComposeButton onClick={() => onComposeClick()}>
//                 <CreateOutlined style={{ marginRight: 10 }} />Compose
//             </ComposeButton>
//             <List>
//                 {
//                     Sidebar_Data.map(data => (
//                         <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
//                             <ListItem style={ type === data.name.toLowerCase() ? {
//                                 backgroundColor: '#d3e3fd',
//                                 borderRadius: '0 16px 16px 0'
//                             } : {}}><data.icon fontSize="small" />{data.title}</ListItem>
//                         </NavLink>
//                     ))
//                 }
//             </List>
            
//             <ComposeMail openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
//         </Container>
//     )
// }

const SidebarContent = ({openSidebar}) => {
    const [showMoreData, setShowMoreData] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const { type } = useParams();

    const onComposeClick = () => {
                    setOpenDrawer(true);
                }

    const onMoreClick = () => {
        setShowMoreData(!showMoreData);
    }

    return (
        <Container>
          <ComposeButton openSidebar={openSidebar} onClick={() => onComposeClick()}>
  <CreateOutlined style={{ marginRight: openSidebar ? 10 : 0 }} />
  {openSidebar ? "Compose" : null}
</ComposeButton>
            <List>
                {Sidebar_Data.map(data => (
                    <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                        <ListItem style={type === data.name.toLowerCase() ? {
                            backgroundColor: '#d3e3fd',
                            borderRadius: openSidebar ? '0 16px 16px 0' : '40%', 
                        } : {}}><data.icon fontSize="small" />{data.title}</ListItem>
                    </NavLink>
                ))}
            </List>

            <Box>
    <Button 
        onClick={onMoreClick} 
        style={{
            backgroundColor: showMoreData ? '#d3e3fd' : 'transparent',
            borderRadius: '0 16px 16px 0', 
            textTransform: 'none',
            width: '100%',
            display: 'flex',
            color:'black',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '16px', 
            paddingRight: '16px' 
        }}
    >
&nbsp;&nbsp;{showMoreData ? '▲' : '▼'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{showMoreData ? "Less" : "More"}

    </Button>
</Box>

            {showMoreData && (
                <List>
                    {Sidebar_Datamore.map(data => (
                        <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`} >
                            <ListItem style={type === data.name.toLowerCase() ? {
                                 backgroundColor: '#d3e3fd',
                                //  borderRadius: '0 16px 16px 0'
                                borderRadius: openSidebar ? '0 16px 16px 0' : '40%',
                                   
                            } : {}}><data.icon fontSize="small" />{data.title}</ListItem>
                        </NavLink>
                    ))}
                </List>
              
            )}
   <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, marginLeft: 20 }}>
  {openSidebar && (
    <>
      Labels
      <div><AddOutlinedIcon style={{ marginRight: 10 }} /></div>
    </>
  )}
  {!openSidebar && <div><AddOutlinedIcon style={{ marginRight: 10 }} /></div>}
</div>

<ComposeMail openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
        </Container>
    )
}

export default SidebarContent