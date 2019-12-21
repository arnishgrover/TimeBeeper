import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import timeInput from './src/components/timeInput/main';

const rootStack = createStackNavigator({
    timeInput: {
        screen: timeInput,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
});

const app = createAppContainer(rootStack);
export default app;
