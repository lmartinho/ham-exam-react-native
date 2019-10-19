import React from "react";
import { ScrollView, StatusBar } from "react-native";

import categoria2Questions from "../data/categoria_2";
import spaceQuestions from "../data/space";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Space",
          questions: spaceQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Categoria 2"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Categoria 2",
          questions: categoria2Questions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Computers"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
);