import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../components/AccountStyles";
import { ActivityIndicator } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authenticationContext";
import Spacer from "../../../components/Spacer";
import CustomText from "../../../components/Text";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const { error, onRegister, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          // both of these two bottom lines ensures that the keyboard will be an email keyboard
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
        />
        <AuthInput
          label="password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(password) => setPassword(password)}
          mode="outlined"
        />
        <AuthInput
          label="retype password"
          value={retypePassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(retypePassword) => setRetypePassword(retypePassword)}
          mode="outlined"
        />
        {error && (
          <Spacer size="large">
            <CustomText variant="error">{error}</CustomText>
          </Spacer>
        )}
        <Spacer size="large">
          {isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, retypePassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color="#e91e63" />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

export default RegisterScreen;
