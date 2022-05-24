import styled, { css } from 'styled-components/native';
// components
import { Typography } from 'modules/core/components/typography';
import { Box } from 'modules/core/components/box';
// utils
import { hPx } from 'styles/pixel-ratio';

export const Root = styled(Box)<{ isMy: boolean }>`
  align-self: flex-start;
  padding: ${hPx(10)}px;
  margin: ${hPx(6)}px 0;
  box-shadow: 0 0.5px 4px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.isMy
      ? css`
          margin-left: auto;
          border-top-left-radius: ${props.theme.shape.borderRadius.large}px;
          border-top-right-radius: ${props.theme.shape.borderRadius.large}px;
          border-bottom-left-radius: ${props.theme.shape.borderRadius.large}px;
          background-color: ${props.theme.colors.primary};
        `
      : css`
          margin-left: 0;
          border-top-left-radius: ${props.theme.shape.borderRadius.large}px;
          border-top-right-radius: ${props.theme.shape.borderRadius.large}px;
          border-bottom-right-radius: ${props.theme.shape.borderRadius.large}px;
          background-color: ${props.theme.colors.white};
        `};
`;

export const Text = styled(Typography).attrs({
  variant: 'body',
})<{ isMy: boolean }>`
  color: ${({ isMy, theme }) =>
    isMy ? theme.colors.white : theme.colors.dark};
`;

export const Time = styled(Typography).attrs({
  variant: 'small2',
})<{ isMy: boolean }>`
  font-size: 10px;
  font-weight: 400;

  ${(props) =>
    props.isMy
      ? css`
          margin-left: auto;
          color: ${props.theme.colors.white};
        `
      : css`
          margin-left: 0;
          color: ${props.theme.colors.gray};
        `}
`;
