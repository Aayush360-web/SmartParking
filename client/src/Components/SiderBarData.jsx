import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import LogoutIcon from '@mui/icons-material/Logout';
export const SiderBarData = [
   {     
    title: "Home",
    icon:   <HomeIcon/>,
    link:  "/home"
   },
   {     
    title: "Create new parking spot",
    icon:   <AddCircleIcon/>,
    link:  "/NewSpot"
   },
   {     
      title: "Reservations",
      icon:<AssignmentIcon/>,
      link:  "/AvailSpots"
     },
   {     
    title: "Surveillance",
    icon:   <LinkedCameraIcon/>,
    link:  "/Surveillance"
   },  
   {
      title: "Logout",
    icon:   <LogoutIcon/>,
    link:  "/logout"
   },
  
   
]
