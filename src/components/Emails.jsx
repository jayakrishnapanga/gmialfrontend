import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';
import { Box, List, Checkbox, Button, Typography } from '@mui/material';
import Email from './Email';
import { DeleteOutline } from '@mui/icons-material';
import NoMails from './common/NoMails';
import { EMPTY_TABS } from '../constants/constant';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { Sidebar_Datamore } from '../config/sidebarconfig';
import { Sidebar_Datamoreexception } from '../config/sidebarconfig';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
const Emails = () => {
    const [starredEmail, setStarredEmail] = useState(false);
    const [selectedEmails, setSelectedEmails] = useState([]);
    const[select,Setselect]=useState(false)
    const [selectedButton, setSelectedButton] = useState('primary');
    const { openDrawer } = useOutletContext();
    const { type } = useParams();

    const getEmailsService = useApi(API_URLS.getEmailFromType);
    const deleteEmailsService = useApi(API_URLS.deleteEmails);
    const moveEmailsToBin = useApi(API_URLS.moveEmailsToBin);
    const typeExistsInSidebar = Sidebar_Datamoreexception.some(item => item.name === type);
    // useEffect(() => {
    //     getEmailsService.call({}, type);
    // }, [type, starredEmail])
    // const typeExistsInSidebar = Sidebar_Datamore.some(item => item.name === type);

    useEffect(() => {
        if (!typeExistsInSidebar) {
            getEmailsService.call({}, type);
        }
    }, [type, starredEmail]);
    const selectAllEmails = (e) => {
        
        if (e.target.checked) {
         Setselect(true)
            const emails = getEmailsService?.response?.map(email => email._id);
            setSelectedEmails(emails);
        } else {
            Setselect(false)
            setSelectedEmails([]);
        }
    }

    const deleteSelectedEmails = () => {
        if (type === 'bin') {
            deleteEmailsService.call(selectedEmails);
        } else {
            moveEmailsToBin.call(selectedEmails);
        }
        setStarredEmail(prevState => !prevState);
    }
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    }
    return (
        <Box style={openDrawer ? { marginLeft: 250, width: '100%' } : { marginLeft:90,width: '100%' } }>
        <Box style={{display:'flex',justifyContent:'space-between'}}>
        <Box style={{ padding: '20px 10px 0 10px', display: 'flex', alignItems: 'center', backgroundColor: select ? 'white' : 'transparent'  }}>
            <Checkbox  size="small" onChange={(e) => selectAllEmails(e)} /> <ArrowDropDownOutlinedIcon/>
           {!select &&(
             <>
             <RefreshOutlinedIcon style={{marginLeft:20}}/>
             <MoreVertOutlinedIcon style={{marginLeft:10}}/>
             </>
           )}
          
           
            {select && (
    <Box style={{display:'flex',}}>
      <Box >
      <ArchiveOutlinedIcon style={{marginLeft:20,cursor:'pointer'}}/>
        <ReportGmailerrorredOutlinedIcon style={{marginLeft:20 ,cursor:'pointer'}}/>
        <DeleteOutline onClick={(e) => deleteSelectedEmails(e)} style={{marginLeft:20,cursor:'pointer',paddingRight:10}}/>
      </Box>
      <Box style={{ borderLeft: '1px solid #ccc', height: '20px' }}>
      <EmailOutlinedIcon style={{marginLeft:20, cursor:'pointer'}}/>
        <AccessTimeOutlinedIcon style={{marginLeft:20, cursor:'pointer'}}/>
        <AddTaskOutlinedIcon style={{marginLeft:20, cursor:'pointer',paddingRight:10}}/>
      </Box>
       <Box style={{ borderLeft: '1px solid #ccc', height: '20px' }}>
        <DriveFileMoveOutlinedIcon style={{marginLeft:20, cursor:'pointer'}} />
        <LabelOutlinedIcon style={{marginLeft:20, cursor:'pointer'}}/>
        <MoreVertOutlinedIcon style={{marginLeft:20, cursor:'pointer'}}/>
        </Box>
    </Box>
)}
      
        </Box>
        <Box style={{marginTop:30, display :'flex', justifyContent:'center',}}>
            <Typography style={{fontSize:'10px',marginTop:'6px',paddingRight:'6px'}}> 1-50 of 329</Typography>
            <ArrowBackIosNewOutlinedIcon style={{fontSize:'11px',marginTop:'8px',paddingRight:'10px'}}/>
            <ArrowForwardIosOutlinedIcon style={{fontSize:'11px' ,marginTop:'8px', paddingLeft:'10px',paddingRight:'10px'}}/>
            <KeyboardOutlinedIcon/>
            <ArrowDropDownOutlinedIcon />
                    </Box>

        </Box>
        {type === 'inbox' &&
            <Box style={{ display: 'flex', marginLeft: 20, marginTop: 10 }}>
                <Button
                    style={{ textTransform: 'none', marginRight: 90, borderBottom: selectedButton === 'primary' ? '3px solid blue' : 'none', width: 100, color: selectedButton === 'primary' ? 'blue' : 'black' }}
                    onClick={() => handleButtonClick('primary')}
                >
                    <InboxOutlinedIcon sx={{ marginRight: 1, color: selectedButton === 'primary' ? 'blue' : 'inherit' }} />
                    Primary
                </Button>
    
                <Button
                    style={{ textTransform: 'none', marginRight: 100, borderBottom: selectedButton === 'promotions' ? '3px solid blue' : 'none', color: selectedButton === 'promotions' ? 'blue' : 'black' }}
                    onClick={() => handleButtonClick('promotions')}
                >
                    <LocalOfferOutlinedIcon sx={{ marginRight: 1, color: selectedButton === 'promotions' ? 'blue' : 'inherit' }} />
                    Promotions
                </Button>
    
                <Button
                    style={{ textTransform: 'none', marginRight: 100, borderBottom: selectedButton === 'social' ? '3px solid blue' : 'none', width: 100, color: selectedButton === 'social' ? 'blue' : 'black' }}
                    onClick={() => handleButtonClick('social')}
                >
                    <PeopleAltOutlinedIcon sx={{ marginRight: 1, color: selectedButton === 'social' ? 'blue' : 'inherit' }} />
                    Social
                </Button>
            </Box>
        }
        { (selectedButton === 'social' || selectedButton === 'promotions') &&
            <div style={{display:'flex',alignItems:'center',flex: '1',marginTop:100,marginLeft:200 }}>There are no mails to display</div>
        }
        { selectedButton === 'primary' &&
            <List>
                {
                    getEmailsService?.response?.map(email => (
                        <Email 
                            email={email}  
                            key={email.id}
                            setStarredEmail={setStarredEmail} 
                            selectedEmails={selectedEmails}
                            setSelectedEmails={setSelectedEmails}
                            select={select}
                            Setselect={Setselect}
                        />
                    ))
                }
           </List>
        } 
        {
            getEmailsService?.response?.length === 0 &&
                <NoMails message={EMPTY_TABS[type]} />
        }
    </Box>
    
    )
}

export default Emails;