import React from "react";
import { View, StyleSheet } from "react-native";
import RNLinearGradient from "react-native-linear-gradient";
import * as Expo from "expo";

import generateGradient from "./generator";

export { generateGradient };

const LinearGradientCss = ({ gradient, children, style }) => {
  const LinearGradient =
    Expo && Expo.LinearGradient ? Expo.LinearGradient : RNLinearGradient;

  const generated = generateGradient(gradient, {
    width: style.width,
    height: style.height
  });

  if (generated.length > 1) {
    return (
      <View style={[style, { position: "relative" }]}>
        {generated.map((obj, i) => (
          <LinearGradient style={[StyleSheet.absoluteFill]} {...obj} key={i} />
        ))}
        {children || null}
      </View>
    );
  }

  return (
    <LinearGradient style={style} {...generated[0]}>
      {children || null}
    </LinearGradient>
  );
};

export default LinearGradientCss;
