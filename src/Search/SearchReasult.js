import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GetImage from "../Images/GetImage";
import CarDetail from "../Detail/CarDetail";
const DATA = [
  {
    id: 1,
    name: "Ferrari",
    title: "Ferrari model 458 Italia",
    price: "$245,547100",
    image: "ferrari1",
    icon: "ferrari",
  },
  {
    id: 2,
    name: "Ferrari",
    title: "Ferrari model 458 Italia",
    price: "$245,547100",
    image: "ferrari2",
    icon: "ferrari",
  },
  {
    id: 3,
    name: "Ferrari",
    title: "Ferrari model 458 Italia",
    price: "$245,547100",
    image: "ferrari3",
    icon: "ferrari",
  },
];


const Item = ({ item, navigation }) => (

  <View>
    <TouchableOpacity
      style={{
        backgroundColor:"#fff",
        borderRadius: 15,
        margin: 5,
      }}
      onPress={()=>navigation.navigate('CarDetail',{item})}
    >
        <View style={{margin:10}}>
      
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#808080",
            borderRadius: 15,
            height:30,
            width:70,
            marginTop:10,
            marginLeft:10,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#000000',
            
          }}
        >
          <Text style={{color:'white'}}>{item.name}</Text>
          <Image
            source={GetImage(item.icon)}
            style={styles.icon}
          />
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image
            source={GetImage(item.image)}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <Text>{item.title}</Text>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontWeight:'bold', fontSize:20 }}>{item.price}</Text>
        <TouchableOpacity 
        style={styles.button}
        >
        <Feather name="plus-circle" size={25} color="#808080" />
      </TouchableOpacity>
      </View>

      </View>
      

    </TouchableOpacity>
  </View>
);

const SearchResult = ({navigation}) => {

  const renderItem = ({ item }) => {
    console.log(item)
    return <Item item={item} navigation={navigation}/>;
  };

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  icon: {
    height: 20,
    width: 20,
  },
  button: {
    borderWidth: 0.5,
    borderColor: "#808080",
    height: 40,
    width: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default SearchResult;
