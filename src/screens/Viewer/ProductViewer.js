import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
  SafeAreaView
} from "react-native";



class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    //console.log(this.props.navigation.state.params.id);
  }

  render() {

    let itemData = this.props.navigation.state.params != undefined ? this.props.navigation.state.params.id : ''

    
    return (
      <View>
        <Text>
          { itemData }
        </Text>
      </View>
    );
  }
}

export default ProductViewer;