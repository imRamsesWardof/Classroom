import { Provider as PaperProvider } from 'react-native-paper';
import MobileRoutes from './Routes/MobileRoutes';

export default function App() {
  return (
    <PaperProvider>
      <MobileRoutes/>
    </PaperProvider>
  );
}


