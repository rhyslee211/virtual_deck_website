import React, { useState } from "react";
//import { Form } from "react-router-dom";



const Contact = () => {

  const [emailForm, setEmailForm] = useState({
    name: "",
    subject: "",
    type: "",
    email: "",
    message: ""
  });

  const [result, setResult] = useState(null);

  const [status, setStatus] = useState("Submit");

  function resetEmailForm() {
    setEmailForm({ name: '', subject: '', type: '', email: '', message: '' });
    setResult(null);
  }

  const handleChange = async (e) => {
    setEmailForm({ ...emailForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if(status === "Sending...") return;

    if(!emailForm.type || !emailForm.subject || !emailForm.message) {
      setResult({ error: "* Please fill out all required fields" });
      setStatus("Submit");
      return;
    }

    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/.netlify/functions/emailServer", {
      method: "POST",
      body: JSON.stringify(emailForm),
    });
    //const result = await res.json();
    const statusCode = await res.status;

    //console.log(result);
    if (statusCode === 200) {
      setResult(null);
    }
    else {
      setResult({ error: "* There was an error sending the email. Please try again." });
    }
    setStatus("Submitted");
    resetEmailForm();
  };

  return (
    <div className="lg:flex lg:justify-center lg:m-4 rounded-lg">
      <div className="justify-evenly flex flex-col items-center border border-2 border-gray-800 bg-slate-800 rounded-lg mx-6 my-4 lg:w-1/3 shadow-lg p-1 lg:p-4">
        <h1 className="text-lg font-bold p-2">Report a Bug or Request a Feature</h1>
        {result !== null && (
          <div className="text-red-400 text-sm">
            {result.error}
          </div>
        )}
        {status === "Sending..." && (
            <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>
        )}
        {status === "Submitted" && (
          <div className="text-green-700 text-sm">
            Message sent successfully!
          </div>
        )}
        <div className="items-center w-full px-8">
          <div>Name:</div>
          <input onChange={handleChange} value={emailForm.name} type="text" id="name" name="name" placeholder="Your name...(Optional)" className="bg-gray-700 text-white shadow-inner w-full rounded-md px-1" />
        </div>
        <div className="items-center w-full px-8">
          <div>Email:</div>
          <input onChange={handleChange} value={emailForm.email} type="text" id="email" name="email" placeholder="Your email...(Optional)" className="shadow-inner bg-gray-700 text-white w-full rounded-md px-1" />
        </div>
        <div className="items-center w-full px-8">
          <div>Report Type:</div>
          <select id="dropdown" name="type" value={emailForm.type} onChange={handleChange} className="shadow-inner bg-gray-700 text-white w-full rounded-md px-1">
            <option value="" disabled>
              -- Select an option --
            </option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feature Request">Feature Request</option>
            <option value="General Support">General Support</option>
          </select>
        </div>
        <div className="items-center w-full px-8">
          <div>Subject:</div>
          <input onChange={handleChange} value={emailForm.subject} type="text" id="subject" name="subject" placeholder="Subject Line" className="shadow-inner bg-gray-700 text-white w-full rounded-md px-1" />
        </div>
        <div className="items-center w-full px-8">
          <div>Message:</div>
          <textarea onChange={handleChange} value={emailForm.message} type="text" id="message" rows="5" name="message" placeholder="Your message..." className="shadow-inner resize-none bg-gray-700 text-white w-full rounded-md px-1" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" id="submitButton" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;