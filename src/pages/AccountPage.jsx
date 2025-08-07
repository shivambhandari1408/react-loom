import React from "react";
import { FaUserAlt, FaLock, FaHeart, FaStar, FaHome, FaSyncAlt } from "react-icons/fa";import { BsWallet2 } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../style/AccountPage.css"

const accountOptions = [
  { icon: <FaUserAlt />, label: "Profile Settings" },
  { icon: <BsWallet2 />, label: "Wallet" },
  { icon: <FaLock />, label: "Orders" },
  { icon: <FaHeart />, label: "Wishlist" },
  { icon: <FaStar />, label: "Rate & Review" },
  { icon: <FaHome />, label: "Addresses" },
  { icon: <FaSyncAlt />, label: "Refunds" },
];

function AccountPage() {
  const navigate = useNavigate();

  return (
    <div className="account-container">
      <h2 className="account-heading">Welcome to your Account</h2>

      <div className="account-options">
        {accountOptions.map((option, index) => (
          <div key={index} className="account-item" onClick={() => navigate("/")}>
            <div className="account-icon">{option.icon}</div>
            <span className="account-label">{option.label}</span>
            <span className="account-arrow">›</span>
          </div>
        ))}
      </div>

      <div className="logout-section">
        <button className="logout-btn">
          <FiLogOut className="logout-icon" /> Logout
        </button>
      </div>
    </div>
  );
}

export default AccountPage;
