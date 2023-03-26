import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { Searchbar, ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoComponent } from "../components/RestaurantInfoComponent";
import Spacer from "../../../components/Spacer";
import { RestaurantContext } from "../../../services/restaurants/restaurantContext";
import { FavouriteContext } from "../../../services/favourites/FavouriteContext";
import SearchComponent from "../components/SearchComponent";
import FavouritesBar from "../../../components/favourites/FavouritesBar";

const MainView = styled(View)`
  flex: 1;
`;

const LoadingIndicator = styled(ActivityIndicator)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RestaurantScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouriteContext);

  return (
    <MainView>
      <SearchComponent
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />

      {isLoading ? (
        <LoadingIndicator animating={true} color={MD2Colors.red800} />
      ) : (
        <>
          {isToggled && (
            <FavouritesBar
              favourites={favourites}
              onNavigate={navigation.navigate}
            />
          )}

          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoComponent restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index}
            contentContainerStyle={{ padding: 16 }}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </MainView>
  );
};

export default RestaurantScreen;
