import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, userProfile }) {
  return (
    <div>
      <Header userProfile={userProfile} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
