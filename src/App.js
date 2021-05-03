import React from "react";
import {Container, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {theme} from "src/theme/theme";
import Navbar from "src/components/Navbar";
import Sidebar from "src/components/Sidebar";
import ErrorBoundary from "src/components/ErrorBoundaries";
import Main from "src/components/Main";
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
    return (
        <Router >
            <MuiThemeProvider theme={theme}>
                <ErrorBoundary>
                    <CssBaseline/>
                    <Navbar/>
                    <Sidebar/>
                    <Container maxWidth='lg'>
                        <Main/>
                    </Container>
                </ErrorBoundary>
            </MuiThemeProvider>
        </Router>


    );
}

export default App;
