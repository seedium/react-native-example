import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createApiServer } from '@server/server';
// containers
import { NavigationRoot } from 'modules/core/containers/navigation-root';
import { ReactQueryProvider } from 'modules/core/containers/react-query-provider';
import { ThemeProvider } from 'modules/core/containers/theme-provider';

createApiServer();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <ReactQueryProvider>
          <NavigationRoot />
        </ReactQueryProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
