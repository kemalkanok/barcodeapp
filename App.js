import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import Login from "./src/screens/Login/Login";
import Home from "./src/screens/Home/Home";
import BarCodeScanner from "./src/screens/BarcodeScanner/BarcodeScanner";
import ProductViewer from "./src/screens/Viewer/ProductViewer";

// App Stack
const HomeStack = createStackNavigator({
  HomeScreen: Home,
  BarcodeScannerScreen: BarCodeScanner,
  ProductViewer: ProductViewer,

  
},
  {
    initialRouteName: "HomeScreen"
  });

const App = createSwitchNavigator({
  LoginScreen: Login,
  HomeScreen: HomeStack
},
  {
    initialRouteName: "LoginScreen"
  }
);

export default createAppContainer(App);
