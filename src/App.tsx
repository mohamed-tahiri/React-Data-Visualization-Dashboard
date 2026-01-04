import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { modernTheme } from './theme/modernTheme';
import DashboardLayout from './layout/DashboardLayout';
import MonitoringPage from './pages/MonitoringPage';
import OverviewPage from './pages/OverviewPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SecurityPage from './pages/SecurityPage';
import SettingsPage from './pages/SettingsPage';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div style={{ padding: '20px' }}><h1>{title}</h1><p>Contenu en cours de développement...</p></div>
);

function App() {
  return (
    <ThemeProvider theme={modernTheme}>
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            {/* Redirection automatique vers le dashboard au démarrage */}
            <Route path="/" element={<Navigate to="/overview" replace />} />
            
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/infrastructure" element={<MonitoringPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            
            {/* 404 - Optionnel mais pro */}
            <Route path="*" element={<PlaceholderPage title="Page non trouvée" />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;