import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesContainer from "./route";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./context/AuthContext";
import UserDetailContext from "./context/UserDetailContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <UserDetailContext>
          <RoutesContainer />
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
          />
        </UserDetailContext>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App;
