import { createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen/HomeScreen';
import ArticlesScreen from './ArticlesScreen/ArticlesScreen';
import { createStackNavigator } from "react-navigation-stack";
import { DetailedArticleScreen } from './DetailedArticleScreen/DetailedArticleScreen';

const stackNavigationConfig: {[key: string]: any} = {
  headerMode: "none"
}

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  DetailedArticle: { screen: DetailedArticleScreen },
  Articles: { screen: ArticlesScreen },
}, stackNavigationConfig);

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;