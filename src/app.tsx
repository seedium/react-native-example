import React from 'react';
import { Chats } from './navigation/screens/chats';
import { createApiServer } from '__mocks__/server';
// containers
import { ReactQueryProvider } from 'modules/core/containers/react-query-provider';
import { ThemeProvider } from 'modules/core/containers/theme-provider';

createApiServer();

const App = () => {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <Chats />
      </ReactQueryProvider>
    </ThemeProvider>
  );
};

export default App;
