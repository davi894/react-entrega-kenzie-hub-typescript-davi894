import { AppStyled, StyledContainer, GlobalStyled } from "./App.style.js";

import Routes from "./routes";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <AppStyled className="App">
      <GlobalStyled />
      <Routes />
      <StyledContainer />
    </AppStyled>
  );
}

export default App;
