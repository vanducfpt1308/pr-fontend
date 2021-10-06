import React, { Component } from "react";
import Taskboard from "./views/Taskboard/index.js"
import { ThemeProvider } from "@material-ui/styles";
// import Container from '@mui/material/Container';
// import DefaultHeader from "./components/DefaultHeader.js";

class App extends Component {
  render() {
    // console.log("p: ",this.props);
    return (
      <div>
        {/* <DefaultHeader /> */}
        {/* <Container > */}
          <ThemeProvider >
            <Taskboard />
          </ThemeProvider>

        {/* </Container> */}
      </div>



    )

  }

}

export default App;
