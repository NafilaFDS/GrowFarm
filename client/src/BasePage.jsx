import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Training from "./pages/Training";
import MyProfile from "./pages/MyProfile";

// ------------Buyer Pages----------------
import PostAdvertise from "./pages/buyer/PostAdvertise";
import MyAdvertise from "./pages/buyer/MyAdvertise";
import CropReceived from "./pages/buyer/CropReceived";

// ------------Farmer Pages----------------
import ComplainStatus from "./pages/farmer/ComplainStatus";
import FarmingTips from "./pages/farmer/FarmingTips";
import CropAdvertise from "./pages/farmer/CropAdvertise";
import SellCrop from "./pages/farmer/SellCrop";

// ------------Admin Pages----------------
import UserList from "./pages/admin/UserList";
import Dashboard from "./pages/admin/Dashboard";
import ComplainList from "./pages/admin/ComplainList";
import AdvApproval from "./pages/admin/AdvApproval";
import AdvResponse from "./pages/admin/AdvResponse";

const BasePage = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />

                {/* ----------- Login Routes------- */}
                <Route path="/login" element={<Login />} />

                {/* ----------- Login Routes------- */}
                <Route path="/signup" element={<SignUp />} />

                {/* ----------- User Routes------- */}
                <Route path="/my-profile" element={<MyProfile />} />

                {/* ----------- Buyer Routes------- */}
                <Route path="/post-advertise" element={<PostAdvertise />} />
                <Route path="/my-advertise" element={<MyAdvertise />} />
                <Route path="/crop-received/:name/:id" element={<CropReceived />} />

                {/* ----------- Farmer Routes------- */}
                <Route path="/complain-status" element={<ComplainStatus />} />
                <Route path="/farming-tips" element={<FarmingTips />} />
                <Route path="/crop-advertise" element={<CropAdvertise />} />
                <Route path="/sell/:id" element={<SellCrop />} />

                {/* ----------- Admin Routes------- */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/farmer-list" element={<UserList />} />
                <Route path="/buyer-list" element={<UserList />} />
                <Route path="/complain-list" element={<ComplainList />} />
                <Route path="/advertise-approval" element={<AdvApproval />} />
                <Route path="/advertise-response/:id" element={<AdvResponse />} />

                {/* ----------- System Routes------- */}
                <Route path="/about" element={<About />} />
                <Route path="/training" element={<Training />} />

            </Routes>
        </Router>
    )
}

export default BasePage