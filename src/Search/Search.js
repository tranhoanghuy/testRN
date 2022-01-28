import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import SearchReasult from "./SearchReasult";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default Search = ({navigation}) => {
  const [values, setValues] = useState([2700, 25000]);
  const multiSliderValuesChange = (values) => {
    setValues(values);
  };
  return (
    <View style={{ backgroundColor: "#EEEEEE" ,flex:1}}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button}>
            <Feather name="arrow-left" size={25} color="#363636" />
          </TouchableOpacity>
          <Text style={{ fontSize: 25 }}>Search details</Text>
          <TouchableOpacity style={styles.button}>
            <Feather name="bell" size={25} color="#363636" />
          </TouchableOpacity>
        </View>
        <ScrollView>

        <View>
          <Text style={styles.text}>Price range</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text>USD {values[0]}</Text>
            <Text> - </Text>
            <Text>USD {values[1]}</Text>
          </View>
          <MultiSlider
            values={[values[0], values[1]]}
            sliderLength={280}
            onValuesChange={multiSliderValuesChange}
            min={0}
            max={30000}
            step={1}
          />
        </View>
        <View style={styles.option}>
          <Text>Vehicle type</Text>
          <Feather name="arrow-right" size={25} color="#363636" />
        </View>
        <View style={styles.option}>
          <Text>Fuel</Text>
          <Feather name="arrow-right" size={25} color="#363636" />
        </View>
        <View style={styles.option}>
          <Text>Fuel efficiency</Text>
          <Feather name="arrow-right" size={25} color="#363636" />
        </View>
        <View style={styles.option}>
          <Text>Detailed options</Text>
          <Feather name="arrow-right" size={25} color="#363636" />
        </View>
        <View>
          <Text style={styles.text}>Search result</Text>
          <SearchReasult navigation={navigation}/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "#808080",
    height: 40,
    width: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  option: {
    flexDirection: "row",
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: 0.2,
    justifyContent: "space-between",
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
});
