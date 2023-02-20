import { View } from "react-native";
import React from "react";
import styled, { useTheme } from "styled-components";

// const TopSmall = styled(View)`
//   margintop: ${(props) => props.theme.space[1]};
// `;

// const TopMedium = styled(View)`
//   margintop: ${(props) => props.theme.space[2]};
// `;

// const TopLarge = styled(View)`
//   margintop: ${(props) => props.theme.space[3]};
// `;

// const LeftSmall = styled(View)`
//   margin-left: ${(props) => props.theme.space[1]};
// `;

// const LeftMedium = styled(View)`
//   margin-left: ${(props) => props.theme.space[2]};
// `;

// const LeftLarge = styled(View)`
//   margin-left: ${(props) => props.theme.space[3]};
// `;

// const RightSmall = styled(View)`
//   margin-right: ${(props) => props.theme.space[1]};
// `;

// const RightMedium = styled(View)`
//   margin-right: ${(props) => props.theme.space[2]};
// `;

// const RigthLarge = styled(View)`
//   margin-right: ${(props) => props.theme.space[3]};
// `;

// const Spacer = ({ variant }) => {
//   switch (variant) {
//     case "top.small":
//       return <TopSmall />;
//     case "top.medium":
//       return <TopMedium />;
//     case "top.large":
//       return <TopLarge />;
//     case "left.small":
//       return <LeftSmall />;
//     case "left.medium":
//       return <LeftMedium />;
//     case "left.large":
//       return <LeftLarge />;
//     case "right.small":
//       return <RightSmall />;
//     case "right.medium":
//       return <RightMedium />;
//     case "right.large":
//       return <RigthLarge />;
//     default:
//       return <TopSmall />;
//   }
// };

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

const SpacerView = styled(View)`
  ${({ variant }) => variant}
`;

const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

export default Spacer;
