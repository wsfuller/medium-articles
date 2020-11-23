import React, { useState } from 'react';

import { ThemeProvider } from '@fluentui/react-theme-provider';
import { PrimaryButton, Stack, Toggle } from '@fluentui/react';

import { darkTheme, lightTheme } from '../../themes';

const App: React.FC = () => {
  const [useDarkMode, setUseDarkMode] = useState(false);

  return (
    <ThemeProvider applyTo="body" theme={useDarkMode ? darkTheme : lightTheme}>
      <Stack>
        <Stack.Item>
          <PrimaryButton
            text="Alert"
            onClick={() => alert('I am an alert')}
          />
        </Stack.Item>
        <Stack.Item>
          <Toggle
            label="Change themes"
            onText="Dark Mode" offText="Light Mode"
            onChange={() => setUseDarkMode(!useDarkMode)}
          />
        </Stack.Item>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
