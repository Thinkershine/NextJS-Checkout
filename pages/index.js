import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/site.css";

class Index extends Component {
  render() {
    return (
      <div>
        <h1>Hello from Next.js!</h1>
      </div>
    );
  }
}

export default Index;

// Method 2

// const indexPageContent = <p>This is the about page</p>

// export default function About() {
//   return <Layout content={aboutPageContent} />;
//}
