import { View, ImageBackground } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
import CustomText from "../../../components/Text";

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/home-bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[1]};
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const Title = styled(CustomText)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: bold;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;
