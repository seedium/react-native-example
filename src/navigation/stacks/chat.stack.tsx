import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import { Chats } from '../screens/chats';
import { Chat } from '../screens/chat';

type ChatStackParamList = {
  chats: undefined;
  chat: undefined;
};

const Stack = createStackNavigator<ChatStackParamList>();

const ChatStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='chats' component={Chats} />
      <Stack.Screen name='chat' component={Chat} />
    </Stack.Navigator>
  );
};

export default ChatStack;
