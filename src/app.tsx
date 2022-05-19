import React from 'react';
import { Chats } from './navigation/screens/chats';
import { createApiServer } from '__mocks__/server';
import { ReactQueryProvider } from './modules/core/containers/react-query-provider';

createApiServer();

const App = () => {
  return (
    <ReactQueryProvider>
      <Chats />
    </ReactQueryProvider>
  );
};

export default App;
