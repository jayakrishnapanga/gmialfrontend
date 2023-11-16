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
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MinimizeIcon from '@mui/icons-material/Minimize';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import useApi from "../hooks/useApi"; 
import { API_URLS } from "../services/api.urls";

import TextFieldsIcon from '@mui/icons-material/TextFields';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

// const dialogstyle = {
//     height: '70%',
//     width: '40%',
//     maxWidth: '100%',
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     boxShadow:'none',
//     borderRadius:'10px 10px 0 0',
//     // background: '', 
//     boxShadow: 'none', 
// };


const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
    margin: 0;
    position: absolute;
    bottom: 0;
    width: 97%;
`;

const SendButton = styled(Button)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`


const RecipientWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 10px 0 10px; /* Adjusted padding to remove bottom padding */
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`;

const ComposeMail = ({openDrawer,setOpenDrawer}) => {
   
    const[bgcolor,Setbgcolor]=useState(false)
    const[sFormatBarActive,setsFormatBarActive]=useState(false)
    const [fullscreen, setFullscreen] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const  sentEmailService=useApi(API_URLS.saveSentEmails)
    const [data,setData]=useState()

    const toggleFullscreen = () => {
        setFullscreen(!fullscreen);
        Setbgcolor(true)
        setMinimized(false); // Make sure minimized is false when toggling fullscreen
      };
      const toggleopenFullscreen = () => {
          Setbgcolor(false)
          setFullscreen(!fullscreen);
          setMinimized(false);
      };
    
      const toggleMinimize = () => {
       
        if(fullscreen){
            Setbgcolor(!bgcolor)
            setMinimized(!minimized);
        }
        else{
            Setbgcolor(bgcolor)
        }
        setMinimized(!minimized);
      };

      const dialogStyle = {
        height: minimized ? '50px' : '90%',
        width: minimized ? '400px' : '80%',
        position: 'fixed',
        top: minimized ? 'auto' : '50%',
        left: minimized ? 'auto' : '50%',
        transform: minimized ? 'none' : 'translate(-50%, -50%)',
        bottom: minimized ? '0' : '2%',
        right: minimized ? '0' : '2%',
        maxWidth: '100%',
        maxHeight: '100%',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        paddingBottom: 0,
        margin: minimized ? '0px' : '10px',
        padding: minimized ? '0px' : '10px',
        borderRadius: minimized ? '0' : fullscreen ? '0' : '10px 10px 0 0',
      };
      
    const dialogstyle = {
        height: minimized ? 'auto' : fullscreen ? '100%' : '75%',
        width: minimized ? '30%' : fullscreen ? '100%' : '40%',
        position: 'fixed',
        bottom: '0',
        right: '2%',
        transition: 'all 0.3s ease',
        boxShadow: 'none',
        borderRadius: minimized ? '0' : fullscreen ? '0' : '10px 10px 0 0',
        margin: 0,
        padding: 0,
      };
    
      const Header = styled(Box)(({ minimized }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        padding: minimized ? '10px' : '10px 15px', // Adjust padding for minimized state
        background: '#f2f6fc',
        '& > p': {
          fontSize: 14,
          fontWeight: 500,
          display: minimized ? 'none' : 'block',
        },
      }));
   
 console.log(process.env.REACT_APP_USERNAME)
    const config = {
    
        Username: process.env.REACT_APP_USERNAME,
        Password: process.env.REACT_APP_PASSWORD,
        Host: 'smtp.elasticemail.com',
        Port: 2525,
    }
    function closeComposemail(e){

        e.preventDefault();
        setFullscreen(false)
        Setbgcolor(false)
        setMinimized(false)
        setOpenDrawer(false)
    }
    const sendEmail = () => {
        // Check if required fields are filled
        if (!data) {
            alert('Data is undefined. Please fill in all required fields.');
            return;
          }
        
        if (!data.to || !data.subject || !data.body) {
          alert('Please fill in all required fields.');
          return;
        }
      
        // Check if window.Email is available
        if (window.Email) {
          window.Email.send({
            ...config,
            To: data.to,
            From: "pangajk3@gmail.com",
            Subject: data.subject,
            Body: data.body
          }).then(
            message => alert('Email sent successfully')
          );
        }
      
        const payload = {
          to: data.to,
          from: "pangajk3@gmail.com",
          subject: data.subject,
          body: data.body,
          date: new Date(),
          image: '',
          name: 'testing',
          starred: false,
          type: 'sent'
        };
      
        sentEmailService.call(payload);
      
        if (!sentEmailService.error) {
          setOpenDrawer(false);
          setData({});
        } else {
          // Handle the error, e.g., show an alert
          alert('Failed to send email. Please try again.');
        }
      
        setOpenDrawer(false);
      }
      const formatButton=()=>{
        setsFormatBarActive(true)
      }
      

    const onValueChange = (e) => {
        console.log(e)
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return(
        <Dialog open={openDrawer} PaperProps={{ sx: fullscreen ? dialogStyle : dialogstyle , margin: 0,
            padding: 0,}} BackdropProps={{
            style: {
              backgroundColor: bgcolor ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
            },
          }}>
        <Header minimized={minimized}>
        <Box><Typography>New Message</Typography></Box>
        <Box>
        {minimized ? (
        <>
        <MinimizeIcon onClick={toggleMinimize} style={{ cursor: 'pointer' }} />
        </>
        ) : (
        <>
        {fullscreen ? (
        <>
        <MinimizeIcon onClick={toggleMinimize} style={{ cursor: 'pointer' }} />
        <CloseFullscreenIcon onClick={toggleopenFullscreen} style={{ cursor: 'pointer',fontSize: '16px' }} />
        </>
        ) : (
        <>
        <MinimizeIcon onClick={toggleMinimize} style={{ cursor: 'pointer' }} />
        <OpenInFullIcon onClick={toggleFullscreen} style={{ cursor: 'pointer' ,fontSize: '16px'}} />
        </>
        )}
        </>
        )}
        <Close fontSize="small" onClick={(e) => closeComposemail(e)} style={{ cursor: 'pointer' }} />
        </Box>
        </Header>


       
        {!minimized && (
          <>
           <RecipientWrapper>
       <InputBase placeholder='Recipients' name="to" onChange={(e) => onValueChange(e)} value={data?.to || ''} />
<InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)} value={data?.subject || ''} />
        </RecipientWrapper>
            <Box width="95%" p={1}>
              <TextField
                multiline
                rows={10}
                fullWidth
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                onChange={(e) => onValueChange(e)}
                name="body"
              />
            </Box>
                <Footer>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <div className='compose__footerLeft'>
                            <button type='submit' onClick={(e) => sendEmail(e)}>
                                Send <ArrowDropDownIcon/>
                            </button>
                        </div>
        <Box sx={{ display: 'flex', gap: '15px' }}>
        <FormatColorTextOutlinedIcon onClick={formatButton} style={{paddingLeft:10,PaddingRight:6}} />
        <AttachFileOutlinedIcon style={{paddingLeft:6}} />
        <InsertLinkOutlinedIcon style={{paddingLeft:6}}/>
        <InsertEmoticonOutlinedIcon style={{paddingLeft:6}}/>
        <AddToDriveOutlinedIcon style={{paddingLeft:6}}/>
        <LockClockOutlinedIcon style={{paddingLeft:6}}/>
        <DriveFileRenameOutlineOutlinedIcon style={{paddingLeft:6}} />
        <MoreVertOutlinedIcon />
        </Box>

    </Box>
    <DeleteOutline onClick={() => setOpenDrawer(false)} style={{ cursor: 'pointer', marginLeft: '8px' }} />
    </Footer>

          </>
        )}
      </Dialog>
      
    );
}


export default ComposeMail