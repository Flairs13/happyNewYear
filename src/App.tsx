import {MainComponent} from "./pages/main";
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';


function App() {

  return (
    <MantineProvider>
      <MainComponent/>
    </MantineProvider>
  )
}

export default App
