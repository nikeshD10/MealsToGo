import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfoComponent from "../components/RestaurantInfoComponent";

const MainView = styled(View)`
  flex: 1;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantScreen = () => {
  return (
    <MainView>
      <SearchContainer style={styles.search}>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer style={styles.list}>
        <RestaurantInfoComponent />
      </RestaurantListContainer>
    </MainView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "gray",
  },
});
