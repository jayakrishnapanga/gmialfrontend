// import React, { useState } from 'react'
// import Header from '../components/Header'
// import Sidebar from '../components/sidebar'
// import Emails from '../components/Emails';
// const Main = () => {
//     const[openDrawer,setopenDrawer]=useState(true);

//     const toggledrawer=()=>{
//         setopenDrawer(prevState=>!prevState)
//     }
//   return (
//     <div>
//         <Header toggledrawer={toggledrawer}/>
//          <Sidebar openDrawer={openDrawer}/> 
//          {/* <Emails/> */}
      
//     </div>
//   )
// }

// export default Main

import { useState, Suspense } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/sidebar';
import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../components/common/SuspenseLoader';

const Wrapper = styled(Box)`
    display: flex;
`;

const Main = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
    
    return (
        <>
          <Header toggledrawer={toggleDrawer} />
            <Wrapper>
                <Sidebar toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
                <Suspense fallback={<SuspenseLoader />} >
                    <Outlet context={{ openDrawer }} />
                </Suspense>
            </Wrapper>
        </>
    )
}
 export default Main