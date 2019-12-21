import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

class timeInput extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={[styles.first]}>
                    <Text>The main screen</Text>
                </View>
                <View style={[styles.second]}>
                    <Text>This would be the first piece</Text>
                </View>
                <View style={[styles.third]}>
                    <Text>This would be the second piece</Text>
                </View>
                <View style={[styles.fourth]}>
                    <Text>This would be the final piece</Text>
                </View>

            </View>
        );
    }
}

export default timeInput;
