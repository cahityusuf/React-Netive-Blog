import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from "./src/context/BlogContext";
import ShowScreem from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";


const navigator = createStackNavigator({
  IndexScreen,
  ShowScreem,
  CreateScreen,
  EditScreen
}, {
  initialRouteName:"IndexScreen",
  defaultNavigationOptions:{
    title:"Blogs"
  }
});

const App = createAppContainer(navigator);

export default ()=>{
  return <BlogProvider><App /></BlogProvider>

}