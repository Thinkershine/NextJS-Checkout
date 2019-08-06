import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/site.css";

class Index extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col margintopbottom">
              <h1>Hello from Next.js!</h1>
              <h6 className="margintopbottom20">
                So, here we are Getting Bigger Each DAY!
              </h6>
            </div>
          </div>
        </div>
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
