import styled from 'styled-components/native';
import {
  Platform,
  SafeAreaView as RNSafeAreaView,
  StatusBar,
} from 'react-native';

const SafeAreaView = styled(RNSafeAreaView)`
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0};
`;

export { SafeAreaView };
