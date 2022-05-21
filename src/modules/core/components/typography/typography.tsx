import styled, { css } from 'styled-components/native';

import type { TypographyProps } from './typography.interface';
import { hPx } from '../../../../styles/pixel-ratio';

const Typography = styled.Text<TypographyProps>`
  font-style: normal;

  ${({ variant }) => {
    switch (variant) {
      case 'title':
        return css`
          font-family: 'Mulish-SemiBold';
          font-weight: 600;
          font-size: ${hPx(18)}px;
          line-height: 30px;
        `;
      case 'subtitle':
        return css`
          font-family: 'Mulish-SemiBold';
          font-weight: 600;
          font-size: ${hPx(16)}px;
          line-height: 24px;
        `;
      case 'body':
        return css`
          font-family: 'Mulish-Regular';
          font-weight: 400;
          font-size: ${hPx(14)}px;
          line-height: 20px;
        `;
      case 'body2':
        return css`
          font-family: 'Mulish-Bold';
          font-weight: 700;
          font-size: ${hPx(12)}px;
          line-height: 14px;
        `;
      case 'small':
        return css`
          font-family: 'Mulish-SemiBold';
          font-weight: 600;
          font-size: ${hPx(12)}px;
          line-height: 16px;
        `;
      case 'small2':
        return css`
          font-family: 'Mulish-Bold';
          font-weight: 700;
          font-size: ${hPx(9)}px;
          line-height: 16px;
        `;
      default:
        return '';
    }
  }}
`;

export { Typography };
