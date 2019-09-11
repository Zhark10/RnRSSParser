import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen/HomeScreen';
import ArticlesScreen from './ArticlesScreen/ArticlesScreen';
import DetailedArticleScreen from './DetailedArticleScreen/DetailedArticleScreen';

const MainNavigator = createSwitchNavigator({
  Home: { screen: HomeScreen },
  DetailedArticle: { screen: DetailedArticleScreen },
  Articles: { screen: ArticlesScreen }
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;