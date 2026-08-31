import React from "react";
import "./css/QuoteForm.scss";

function QuoteForm() {
  return (
    <div className="quoteformsec">
      <div className="quoteform">
        <h1>Quote Form</h1>
        <div className="fields">
          <p>Name</p>
          <input type="text" name="name" id="" />
        </div>
        <div className="fields">
          <p>Email</p>
          <input type="email" name="email" id="" />
        </div>
        <div className="fields">
          <p>Phone no#</p>
          <input type="tel" name="number" id="" />
        </div>
        <div className="fields">
          <p>Address</p>
          <input type="text" name="" id="" />
        </div>
        <button className="quote_btn">Submit</button>
      </div>
    </div>
  );
}

export default QuoteForm;
