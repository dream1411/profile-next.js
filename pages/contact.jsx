import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";

function Contact() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = useCallback(
    (e) => {
      console.log(name, email, message);
    },
    [name, email, message]
  );
  return (
    <div className="container selector">
      <Head>
        <title>Contact Us | My Site</title>
        <meta name="description" content="Contact us for more information." />
      </Head>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </label>

        <button type="submit">Send</button>
      </form>

      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          max-width: 600px;
          margin: 0 auto;
        }

        label {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }

        input,
        textarea {
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
        }

        button[type="submit"] {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
        }

        button[type="submit"]:hover {
          background-color: #0063cc;
        }
      `}</style>
    </div>
  );
}

export default Contact;
