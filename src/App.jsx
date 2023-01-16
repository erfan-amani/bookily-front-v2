import useLanguage from "./hooks/App/useLanguage";
import useTheme from "./hooks/App/useTheme";
import AppRoutes from "./routes/Routes";

function App() {
  useTheme();
  useLanguage();

  return <AppRoutes />;
}

export default App;
