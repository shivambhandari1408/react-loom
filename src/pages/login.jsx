import React, { useState } from "react";
import "../style/login.css";

function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    if (/^\d{10}$/.test(phone)) {
      setOtpSent(true);
    } else {
      alert("Please enter a valid 10-digit number.");
    }
  };

  const handleVerifyOtp = () => {
    if (/^\d{6}$/.test(otp)) {
      alert("OTP Verified");
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="brand-name">Welcome to <span>Style</span></h1>
        <h2 className="login-heading">Login with OTP</h2>

        {!otpSent ? (
          <>
            <input
              className="login-input"
              type="tel"
              placeholder="Enter your number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={10}
            />
            <button className="login-btn" onClick={handleSendOtp}>
              Request OTP
            </button>
          </>
        ) : (
          <>
            <p className="otp-msg">OTP sent to +91-{phone}</p>
            <input
              className="login-input"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
            />
            <button className="login-btn" onClick={handleVerifyOtp}>
              Verify OTP
            </button>
          </>
        )}

        <p className="terms-text">
          I accept all the <span>terms and conditions</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
