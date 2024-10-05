import React from 'react'
import "./SideBar.css"
import SideBarRow from './SideBarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


function SideBar() {
    
    return (
        <div className="SideBar">
            
            <SideBarRow title="Dharmil Gandhi" />
            
            <SideBarRow Icon={LocalHospitalIcon} title = "Covid-19 Information center"/>
            <SideBarRow Icon={EmojiFlagsIcon} title = "Pages"/>
            <SideBarRow Icon={PeopleIcon} title = "Friends"/>
            <SideBarRow Icon={ChatIcon} title = "Messanger "/>
            <SideBarRow Icon={StorefrontIcon} title = " MarketPlace"/>
            <SideBarRow Icon={VideoLibraryIcon} title = "Videos "/>
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title = "More"/>
        </div>
    )
}

export default SideBar
