import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState("Appreciation");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Please enter a message before submitting.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="feedback">
      <h1>We Value Your Feedback</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="feedback-form">
          <label>Type of Feedback</label>
          <select value={feedbackType} onChange={(e) => setFeedbackType(e.target.value)}>
            <option value="Appreciation">Appreciation</option>
            <option value="Complaint">Complaint</option>
          </select>

          <label>Your Message</label>
          <textarea
            placeholder="Write your feedback here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="thank-you">
          <h2>Thank you for your {feedbackType.toLowerCase()}!</h2>
          <p>We appreciate your input and will take it into account.</p>
          <button onClick={() => setSubmitted(false)}>Submit Another</button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
