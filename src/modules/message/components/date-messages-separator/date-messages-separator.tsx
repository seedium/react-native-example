import React, { FC, memo } from 'react';

import type { DateMessagesSeparatorProps } from './date-messages-separator.interface';
import { Root } from './date-messages-separator.styled';

const DateMessagesSeparator: FC<DateMessagesSeparatorProps> = memo(
  ({ date }) => {
    if (!date) {
      return null;
    }

    return <Root />;
  }
);

export { DateMessagesSeparator };
