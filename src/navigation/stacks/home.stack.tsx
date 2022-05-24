import React, { FC, Fragment } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screens & stacks
import ChatStack from 'navigation/stacks/chat.stack';

export type HomeStackParamList = {
  'chat-stack': undefined;
};

const Tab = createBottomTabNavigator<HomeStackParamList>();

const HomeStack: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={() => <Fragment />}
      initialRouteName='chat-stack'
    >
      <Tab.Screen name='chat-stack' component={ChatStack} />
    </Tab.Navigator>
  );
};

export default HomeStack;
