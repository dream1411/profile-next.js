import React, { useEffect } from "react";
import Head from "next/head";

import axios from "axios";
function About({ data }) {
  return (
    <div className="container selector">
      <Head>
        <title>My Site</title>
        <meta name="description" content="This is my site." />
      </Head>

      <h1>Welcome to My Site</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
        tortor ut sodales porttitor, ex ipsum fringilla turpis, nec pellentesque
        odio magna sit amet metus. Sed a magna purus.
      </p>
      {data.map((data,index) => {
        return <li key={index}>{data}</li>;
      })}
      <style jsx>{`
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps() {
  // const options = {
  //   headers: {
  //     'Authorization': `Bearer ` ,
  //     'Content-Type': 'application/json'
  //   }
  // };
  // const response = await axios.get('http://localhost:8081/api/users/profile',options);
  const data = ["test1", "test2", "test3"];
  return { props: { data } };
}

export default About;
