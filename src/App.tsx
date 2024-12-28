import {MainComponent} from "./pages/main";
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import {Game} from "./pages/game";


function App() {

  return (
    <MantineProvider>
      <MainComponent/>
      <Game/>
    </MantineProvider>
  )
}

export default App
