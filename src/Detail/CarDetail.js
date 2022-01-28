import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import GetImage from "../Images/GetImage";
export default CarDetail = ({ navigation, route }) => {
  const { item } = route.params;
  const tableHead= ['Method', 'Price', 'Date'],
 tableData= [
    ['Rent', '$192,000,000', '6-12-2021'],
    ['Cash', '$192,000,000', '6-12-2021'],
    ['Lease', '$192,000,000', '6-12-2021'],
  ]  
  return (
    <View style={{flex:1}}>
      
        <View style={{backgroundColor:'#fff'}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.pop();
            }}
          >
            <Feather name="arrow-left" size={25} color="#363636" />
          </TouchableOpacity>
          <Text style={{ fontSize: 25 }}>Car details</Text>
          <TouchableOpacity style={styles.button}>
            <Feather name="bell" size={25} color="#363636" />
          </TouchableOpacity>
        </View>
        </View>
        <ScrollView>
        <View style={{ backgroundColor: "#ffffff" }}>

          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#808080",
                borderRadius: 15,
                height: 30,
                width: 70,
                marginTop: 10,
                marginLeft: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000000",
                marginTop: 30,
              }}
            >
              <Text style={{ color: "white" }}>{item.name}</Text>
              <Image source={GetImage(item.icon)} style={styles.icon} />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 25 }}>{item.title}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Image source={GetImage(item.image)} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignSelf: "stretch",
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="instagram" size={25} color="#363636" />
                <Text>Cash pricing bidding</Text>
              </View>
              <View
                style={{
                  height: 100,
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="home" size={25} color="#363636" />
                <Text>Manufacture financial price bidding</Text>
              </View>
              <View
                style={{
                  height: 100,
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="user" size={25} color="#363636" />
                <Text>Third party financial price bidding</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Done Deal</Text>
          <Image
            source={require("../Images/chart.png")}
            style={{ margin: 30 }}
          />
        </View>
        
       
        <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Deal Method</Text>
        </View>
        <Table >
        <Row data={tableHead} textStyle={styles.text1}/>
          {
            tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex =cellData} textStyle={{margin:5}}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
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
  icon: {
    height: 20,
    width: 20,
  },
  container: { flex: 1, paddingBottom:15,backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#fff' },
  text1: {textDecorationLine:'underline', fontWeight:'bold',margin:5},
  row: { flexDirection: 'row', backgroundColor: '#fff' },
});
