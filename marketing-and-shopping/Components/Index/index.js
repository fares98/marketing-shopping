import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import HeaderLanding from "../common/HeaderLandingPage";

export class Index extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <HeaderLanding />
        </View>
      </SafeAreaView>
    );
  }
}

export default Index;
