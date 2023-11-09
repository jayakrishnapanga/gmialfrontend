// import { Close,  } from "@mui/icons-material";
// import { Dialog, Typography,Box,styled, InputBase,TextField ,Button} from "@mui/material"
// import { useState } from "react";
//         const dialogstyle = {
//             height: '70%',
//             width: '40%',
//             maxWidth: '100%',
//             position: 'absolute',
//             bottom: 0,
//             right: 0,
//         boxShadow:'none',
//         borderRadius:'10px 10px 0 0'
//         };
//         const Header=styled(Box)({
//             display:'flex',
//             justifyContent:'space-between',
//             padding:'10px 15px',
//             background:'#f2f6fc',
//             '& > p':{
//                 fontsize:14,
//                 fontWeight:500

//             }
//         })
//         const RecipientWrapper = styled(Box)`
//             display: flex;
//             flex-direction: column;
//             padding: 0 15px;
//             & > div {
//                 font-size: 14px;
//                 border-bottom: 1px solid #F5F5F5;
//                 margin-top: 10px;
//             }
//         `;
// const ComposeMail=()=>{
  

//     return(
//         <Dialog 
//         open={true}
//         PaperProps={{sx:dialogstyle}}
      
//         >
//             <Header>
//                 <Typography>New Message</Typography>
//                <Close fontSize="small" style={{cursor:'pointer'}}></Close>
//             </Header>
//             <RecipientWrapper>
//               <InputBase placeholder="Recipents"></InputBase>
//               <InputBase placeholder="subject"></InputBase>
//             </RecipientWrapper>
//             <TextField 
//                 multiline
//                 rows={20}
//                 sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
//                 name="body"
               
//             />
           

//         </Dialog>
//     )
    
// }
import { Dialog, Typography, Box, styled, InputBase, TextField, Button } from "@mui/material";
import {  Close,DeleteOutline,} from "@mui/icons-material";
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useState } from "react";
import useApi from "../hooks/useApi"; 
import { API_URLS } from "../services/api.urls";

const dialogstyle = {
    height: '70%',
    width: '40%',
    maxWidth: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    boxShadow:'none',
    borderRadius:'10px 10px 0 0',
    // background: '', 
    boxShadow: 'none', 
};
const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`;

const SendButton = styled(Button)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`
const Header = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    background:'#f2f6fc',
    '& > p':{
        fontSize:14,
        fontWeight:500
    }
});

const RecipientWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`;

const ComposeMail = ({openDrawer,setOpenDrawer}) => {
    
   const  sentEmailService=useApi(API_URLS.saveSentEmails)
    const [data,setData]=useState()
 console.log(process.env.REACT_APP_USERNAME)
    const config = {
    
        Username: process.env.REACT_APP_USERNAME,
        Password: process.env.REACT_APP_PASSWORD,
        Host: 'smtp.elasticemail.com',
        Port: 2525,
    }
    function closeComposemail(e){

        e.preventDefault();
        setOpenDrawer(false)
    }
    const sendEmail=()=>{
        if(window.Email){

         window.Email.send({
                ...config,
                To : data.to,
                From : "pangajk3@gmail.com",
                Subject : data.subject,
                Body : data.body
            }).then(
              message => alert('email sent sucessfully ')
            );

        }
        const payload = {
            to : data.to,
            from : "pangajk3@gmail.com",
            subject : data.subject,
            body : data.body,
            date: new Date(),
            image: '',
            name: 'testing',
            starred: false,
            type: 'sent'
        }

        sentEmailService.call(payload);

        if (!sentEmailService.error) {
            setOpenDrawer(false);
            setData({});
        } else {

        }
       
        setOpenDrawer(false)
    }

    const onValueChange = (e) => {
        console.log(e)
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return(
        <Dialog 
            open={openDrawer}
            PaperProps={{sx: dialogstyle}}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e)=>closeComposemail(e)} style={{cursor:'pointer'}} />
            </Header>
            <RecipientWrapper>
                <InputBase placeholder="Recipients" name='to' onChange={(e)=>onValueChange(e)} />
                <InputBase placeholder="Subject" name='subject'  onChange={(e)=>onValueChange(e)}/>
            </RecipientWrapper>
            <Box width="95%" p={1} >
                <TextField 
                    multiline
                    rows={10}
                    fullWidth
                    variant="outlined"
                    sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                    // placeholder="Type your message here"
                    onChange={(e)=>onValueChange(e)}
                    name='body'
                />
            </Box>
            <Footer>
                <SendButton onClick={()=>sendEmail()} style={{cursor:'pointer'}}>Send</SendButton>

                 <FormatColorTextOutlinedIcon/>
                <AttachFileOutlinedIcon/>
                <InsertLinkOutlinedIcon/>
                <InsertEmoticonOutlinedIcon/>
                <AddToDriveOutlinedIcon/>
                <LockClockOutlinedIcon/>
                <DriveFileRenameOutlineOutlinedIcon/>
                 <MoreVertOutlinedIcon/>
                <DeleteOutline  onClick={()=>setOpenDrawer(false)} style={{cursor:'pointer', marginLeft:60}} />
             
            </Footer>
        </Dialog>
    );
}


export default ComposeMail