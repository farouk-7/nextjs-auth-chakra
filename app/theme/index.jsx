import { extendTheme } from '@chakra-ui/react';
// import { radioTheme } from './components/Radio';
import { radioTheme } from './comp/Radio';


const theme = extendTheme({
  components: {
    Radio: radioTheme,
  },
});

export default theme;