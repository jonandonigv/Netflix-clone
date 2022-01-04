import React from 'react'
import './sidebar.scss'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyleIcon className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon'/>
                            Analitycs
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className='sidebarIcon'/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PermIdentityIcon className='sidebarIcon'/>
                            User
                        </li>
                        <li className="sidebarListItem">
                            <StorefrontIcon className='sidebarIcon'/>
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className='sidebarIcon'/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartIcon className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineOutlinedIcon className='sidebarIcon'/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedOutlinedIcon className='sidebarIcon'/>
                            Feed
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlinedIcon className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineOutlinedIcon className='sidebarIcon'/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon'/>
                            Analitycs
                        </li>
                        <li className="sidebarListItem">
                            <ReportIcon className='sidebarIcon'/>
                            Reposrts
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
