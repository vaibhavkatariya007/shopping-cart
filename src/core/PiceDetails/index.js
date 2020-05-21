import React from 'react';
import './pricedetails.css';
const PiceDetails = ({priceData, count}) => {
  return (
    <div className="price-details">
      <div className="header">Price Details</div>
      <div className="price-container">
        <span className="price-label">Price (items {count})</span>:
        <span className="price-unit">&#8377; {priceData.totalPrice}</span>
      </div>
      <div className="discount-container">
        <span className="discount-label">Discount</span>:
        <span className="discount-unit">&#8377; {priceData.totalDiscount}</span>
      </div>
      <div className="total-payable-container">
        <span className="total-label">Total Payable</span>
        <span className="total-unit">&#8377; {priceData.totalPayable}</span>
      </div>
    </div>
  );
};

export default PiceDetails;
