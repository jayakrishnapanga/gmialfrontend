import { DeleteOutline, InsertDriveFileOutlined, MailOutline, Photo, SendOutlined, StarOutline, StartOutlined } from "@mui/icons-material";
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
export const Sidebar_Data=[
    {
        name:'inbox',
        title:'Inbox',
        icon:Photo
    },
    {
        name:'starred',
        title:'Starred',
        icon:StarOutline
    },
    {
        name:'sent',
        title:'Sent',
        icon:SendOutlined
    },
    {
        name:'snoozed',
        title:'Snoozed',
        icon:AccessTimeOutlinedIcon
    },
    {
        name:'drafts',
        title:'Drafts',
        icon:InsertDriveFileOutlined
    },
    {
            name:'allmail',
            title:'Allmails',
            icon:MailOutline
        },
    
    // {
    //     name:'bin',
    //     title:'Bin',
    //     icon:DeleteOutline
    // },

]


export const Sidebar_Datamore=[
    {
        name:'allmail',
        title:'Allmails',
        icon:MailOutline
    },
    {
        name:'important',
        title:'Important',
        icon:LabelImportantOutlinedIcon
    },
    {
        name:'chats',
        title:'Chats',
        icon:SmsOutlinedIcon
    },
    {
        name:'schedule',
        title:'Schedule',
        icon:ScheduleSendOutlinedIcon
    },
    // {
    //     name:'allmail',
    //     title:'Allmails',
    //     icon:MailOutline
    // },
    {
        name:'spam',
        title:'Spam',
        icon:ReportOutlinedIcon
    },
    {
        name:'bin',
        title:'Bin',
        icon:DeleteOutline
    },
  

]