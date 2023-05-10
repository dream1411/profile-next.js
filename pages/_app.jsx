import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/boostrap.css";
import "../styles/theme.css";
import "../styles/bootstrap-icons.css";
import "../styles/globals.css";
import Layout from "../componants/Layout";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  setTimeout(function () {
    setIsLoading(false);
  }, 1000);
  useEffect(() => {
    router.push("/");
    // Perform authentication check here
    // const authToken = localStorage.getItem("authToken");

    // if (!authToken && router.pathname !== "/login") {
    //   // Redirect to login page if not authenticated and not on the login page
    //   router.push("/login");
    // } else {
    //   console.log("getUserProfile");
    //   // Fetch user profile if authenticated
    //   getUserProfile()
    //     .then((profile) => {
    //       if (profile != undefined) {
    //       setUserProfile(profile);
    //       }else{
    //         router.push("/login");
    //       }
    //     })
    //     .catch((error) => {

    //       console.error("Error fetching user profile:", error);
    //     });
    // }
  }, []);

  return (
    <>
      <Head></Head>
      <Layout userProfile={userProfile}>
        <div>
          <Component {...pageProps} />
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous"
        ></script>
      </Layout>
    </>
  );
}
// async function getUserProfile() {
//   try {
//     const authToken = localStorage.getItem("authToken");
//     const response = await axios.get(
//       "http://localhost:8081/api/users/profile",
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${authToken}`,
//         },
//       }
//     );
//     if (response.data.status == "ok") {
//       return response.data.user;
//     }
//   } catch (error) {
//     console.error("Error fetching user profile:", error);
//     throw error;
//   }
// }
