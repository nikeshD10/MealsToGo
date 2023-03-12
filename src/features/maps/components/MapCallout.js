import React from "react";
import CompactRestaurantInfo from "../../../components/CompactRestaurantInfo";
import WebView from "react-native-webview";

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} webView={WebView} />;
};

export default MapCallout;
