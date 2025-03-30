import { useState } from "react";
import { createMessage } from "../api/api";

export const Contact = () => {
  const [message, setMessage] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageData = new FormData();
    Object.entries(message).forEach(([key, value]) => {
      messageData.append(key, value);
    });

    try {
      await createMessage(messageData);
    } catch (error) {
      console.log(error);
    }
    setMessage({
      username: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <main className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pb-3">
            <h1>Get In Touch!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="contact-card p-3 border-0 rounded-0">
              <form onSubmit={handleSubmit}>
                <h5 className="mb-4">Connect With Us!</h5>
                <input
                  type="text"
                  name="username"
                  className="form-control mb-3"
                  placeholder="Full Name"
                  value={message.username}
                  onChange={handleInput}
                />
                <input
                  type="email"
                  name="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  value={message.email}
                  onChange={handleInput}
                />
                <input
                  type="number"
                  name="phone"
                  className="form-control mb-3"
                  placeholder="Contact Number"
                  value={message.phone}
                  onChange={handleInput}
                />
                <textarea
                  name="message"
                  placeholder="Message..."
                  className="form-control mb-3"
                  value={message.message}
                  onChange={handleInput}
                ></textarea>
                <input
                  type="submit"
                  className="btn btn-secondary w-100 rounded-0"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
