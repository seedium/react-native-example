import type { NavigationProp } from '@react-navigation/native';

export type ScreenProps<ParamList extends {}> = {
  navigation: NavigationProp<ParamList>;
  route: {
    params: ParamList;
  };
};
