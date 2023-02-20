import styled from "styled-components";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.body};
  flex-wrap : wrap;
  margin-top :  0px;
  margin-bottom : 0px;
`;

const body = (theme) => `
  font-size :  ${theme.fontSizes.body};
`;

const hint = (theme) => `
  font-size :  ${theme.fontSizes.body};
`;
const error = (theme) => `
  color : ${theme.colors.text.error};
`;
const caption = (theme) => `
  font-size :  ${theme.fontSizes.caption};
  font-weight : ${theme.fontWeights.bold};
`;

const label = (theme) => `
  font-size :  ${theme.fontSizes.body};
  font-weight : ${theme.fontWeights.medium};
  font-family : ${theme.fonts.heading};
`;

const variants = {
  body,
  hint,
  caption,
  label,
  error,
};

const Text = styled(Text)`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};

export default Text;
