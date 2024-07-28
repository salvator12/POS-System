
import FormView from './pages/FormView.jsx';
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
  HStack,
} from '@chakra-ui/react'
import './App.css';
import SummaryFormView from './pages/SummaryFormView.jsx';

function App() {
  return (
    <ChakraBaseProvider>
    <div className="App">
      <HStack align='top' spacing='59'>
        <FormView/>
        <SummaryFormView/>
      </HStack>
    </div>
    </ChakraBaseProvider>
  );
}

export default App;
