import { Provider as PaperProvider } from 'react-native-paper';
import MobileRoutes from './routes/MobileRoutes';

export default function App() {
  return (
    <PaperProvider>
      <MobileRoutes/>
    </PaperProvider>
  );
}


