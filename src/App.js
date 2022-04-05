import InputData from "./components/Input_data";
import OutputList from "./components/Output_list";
import {Nav, WrapperApp} from "./styled/AppStyle";
import Footer from "./components/Footer";
import {Provider} from "./context/context";

function App() {

    return (
        <Provider>
            <Nav>
                <h1>Web application for calculating the costs of equipment</h1>
            </Nav>
            <WrapperApp>
                <InputData/>
                <OutputList/>
            </WrapperApp>
            <Footer/>
        </Provider>
    );
}

export default App;
