import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// Handle console logs
import 'utils/dropConsole';
// Styles
import 'fontsource-roboto';
// MUI Theme
// import { ThemeSwitch } from "components/ThemeSwitch";
// import { dark, light } from "styles/muiTheme";
import './styles/index.scss';
import './translation/i18n';
// import { useUpdateDocumentTitle } from 'hooks/UI';
import { ScrollContainer } from 'components/Common/ScrollContainer';
import { MediaContextProvider } from 'components/Common/MediaContext';
import { useChangeLanguage } from 'translation';

export const App = () => {
  useChangeLanguage();
  // useUpdateDocumentTitle();

  // const [darkState, setDarkState] = useState(false);
  // const handleThemeChange = () => {
  //   setDarkState(!darkState);
  //   console.log("theme=", darkState ? "dark" : "light");
  // };

  return (
    <HelmetProvider>
      <MediaContextProvider>
        <ScrollContainer>
          {/* <ThemeProvider theme={darkState ? dark() : light()}>
            <ThemeSwitch
              darkState={darkState}
              handleThemeChange={handleThemeChange}
            /> */}

          <Suspense fallback="">
            <Outlet />
          </Suspense>

          {/* </ThemeProvider> */}
        </ScrollContainer>
      </MediaContextProvider>
    </HelmetProvider>
  );
};
