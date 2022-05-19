import React, { FC } from 'react';
import { Platform } from 'react-native';
import {
  QueryClient,
  QueryClientProvider,
  onlineManager,
  focusManager,
} from 'react-query';
import NetInfo from '@react-native-community/netinfo';
import useAppState from 'react-native-appstate-hook';

export const queryClient = new QueryClient();

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    if (typeof state.isConnected === 'boolean') {
      setOnline(state.isConnected);
    }
  });
});

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient });
  });
}

const ReactQueryProvider: FC = ({ children }) => {
  useAppState({
    onChange: (status) => {
      if (Platform.OS !== 'web') {
        focusManager.setFocused(status === 'active');
      }
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { ReactQueryProvider };
