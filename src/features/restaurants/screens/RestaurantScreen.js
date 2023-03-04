import { FlatList, StyleSheet, View, Text } from "react-native";
import React, { useContext } from "react";
import { Searchbar, ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoComponent } from "../components/RestaurantInfoComponent";
import Spacer from "../../../components/Spacer";
import { RestaurantContext } from "../../../services/restaurants/restaurantContext";

const MainView = styled(View)`
  flex: 1;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const LoadingIndicator = styled(ActivityIndicator)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  return (
    <MainView>
      <SearchContainer style={styles.search}>
        <Searchbar />
      </SearchContainer>
      {isLoading ? (
        <LoadingIndicator animating={true} color={MD2Colors.red800} />
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoComponent restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item, index) => index}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
        />
      )}
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
