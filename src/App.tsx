import {MainComponent} from "./pages/main";
import '@mantine/core/styles.css';

import { MantineProvider, createTheme } from '@mantine/core';
import {Game} from "./pages/game";

const theme = createTheme({

});

function App() {


  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <MainComponent/>
      <Game/>
    </MantineProvider>
  )
}

export default App
