import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoComponent } from "../components/RestaurantInfoComponent";
import Spacer from "../../../components/Spacer";

const MainView = styled(View)`
  flex: 1;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantScreen = () => {
  return (
    <MainView>
      <SearchContainer style={styles.search}>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={[{ name: "1" }, { name: "2" }, { name: "3" }]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoComponent />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </MainView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
