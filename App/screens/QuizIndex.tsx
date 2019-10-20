import React from "react";
import { ScrollView, StatusBar } from "react-native";

import category1Questions from "../data/category_1";
import category2Questions from "../data/category_2";
import category3Questions from "../data/category_3";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Categoria 3"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Categoria 3",
          questions: category3Questions,
          color: "#49475B"
        })
      }
    />
    <RowItem
      name="Categoria 2"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Categoria 2",
          questions: category2Questions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Categoria 1"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Categoria 1",
          questions: category1Questions,
          color: "#36b1f0"
        })
      }
    />
  </ScrollView>
);