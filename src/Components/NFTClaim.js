import React, { useState } from "react";
import "../App.css";
function NFTClaim() {
  const [address, setAddress] = useState("");

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleClaim = () => {
    console.log("Claim button clicked for address:", address);
    // Add logic for claiming NFTs here
  };

  const handleCheck = () => {
    console.log("Check button clicked for address:", address);
    // Add logic for checking NFTs here
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "200px",
  };

  const inputContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px", // Increase this value for more space between input and buttons
  };

  const inputStyle = {
    position: "relative",
    fontSize: "0.9em",
    background: "black",
    padding: "0.9px",
    display: "inline-block",
    border: "2px solid pink blue", // Set multiple border colors (blue and pink)
    outline: "none",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    lineHeight: "2.5",
    color: "ivory",
    width: "20em",
    placeholder: "#cbd0d5",
    marginRight: "10px",
    borderRadius: "50px", // Apply a border radius for a semi-circle effect
  };

  const buttonStyle = {
    padding: "12px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "25px",
  };

  const whiteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "white",
    color: "black",
    marginRight: "50px",
  };

  return (
    <div className="claim-container" style={containerStyle}>
      <div
        className="inputDiv"
        style={{
          marginLeft: "10px",
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <div style={{ borderRadius: "60px" }} className="gradient-border">
          <input
            style={{ width: "400px", borderRadius: "50px" }}
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter Wallet Address"
            className="gradient-border-input"
          />
        </div>
        <button className="whiteButton" onClick={handleCheck} style={whiteButtonStyle}>
          Check
        </button>
      </div>

      {/* <div style={inputContainerStyle}>
        <input
          type="text"
          placeholder="   Enter Wallet Address"
          value={address}
          onChange={handleAddressChange}
          style={inputStyle}
        />
        
      </div> */}
      <button onClick={handleClaim} style={buttonStyle}>
        Claim COM Airdrop
      </button>
    </div>
  );
}

export default NFTClaim;
