import React from 'react';
import ArchiveData from '../components/dashboard/user/ArchiveData';
import Pricing from '../components/Pricing';

import { Router } from "@reach/router"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <ArchiveData />
        </div>
    )
}

export default Dashboard;
