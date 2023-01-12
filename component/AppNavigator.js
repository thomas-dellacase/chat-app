import { createStackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen';

const AppNavigator = createStackNavigator({
    Chat: {
        screen: ChatScreen,
    },
});

export default AppNavigator;