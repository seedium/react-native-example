export type Theme = {
  colors: {
    primary: string;
    dark: string;
    gray: string;
    graySemiLight: string;
    grayLight: string;
    green: string;
    white: string;
  };
  shape: {
    borderRadius: {
      large: number;
      medium: number;
      small: number;
    };
  };
  spacing: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
  };
};

export const theme: Theme = {
  colors: {
    primary: '#002DE3',
    dark: '#0F1828',
    gray: '#ADB5BD',
    graySemiLight: '#EDEDED',
    grayLight: '#F7F7FC',
    green: '#2CC069',
    white: '#ffffff',
  },
  shape: {
    borderRadius: {
      large: 16,
      medium: 10,
      small: 4,
    },
  },
  spacing: {
    x1: 4,
    x2: 8,
    x3: 12,
    x4: 16,
    x5: 20,
    x6: 24,
  },
};
