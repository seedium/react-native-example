import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// stacks
import HomeStack from 'navigation/stacks/home.stack';

type RootStackParamList = {
  home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const NavigationRoot: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={HomeStack} />
    </Stack.Navigator>
  );
};

export { NavigationRoot };
