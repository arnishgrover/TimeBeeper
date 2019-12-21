import React, {Component} from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {OutlinedTextField} from 'react-native-material-textfield';
import {Button} from 'react-native-elements';

class timeInput extends Component {
    fieldRef = React.createRef();

    formatText = (text) => {
        return text.replace(/[^+\d]/g, '');
    };

    state = {
        color: 'white',
        time: 10,
    };

    startTimer = async () => {
        this.setState({
            color: 'white',
        });
        let {current: field} = this.fieldRef;

        Alert.alert('Time is', field.value());

        await this.startBeeps(field.value());

        this.setState({
            color: 'green',
        });
        console.log('Starting the timer');
    };

    startBeeps = async (time) => {
        this.setState({
            time: time
        });
        console.log("Beeper starting for " + time + " seconds");
    };

    render() {

        return (
            <ScrollView contentContainerStyle={{flex: 1}}>
                <View style={styles.main}>
                    <View style={styles.first}>
                        <View style={[styles.firstOne]}>
                            <Text style={styles.topText}>Welcome to the Interval Beeper</Text>
                        </View>
                        <View style={[styles.firstSecond]}>
                            <Icon.Button name="info-circle" color={'black'} iconStyle={styles.infoButton}
                                         backgroundColor="white" onPress={() => {
                                Alert.alert('Button clicked');
                            }}/>
                        </View>
                    </View>
                    <View style={[styles.second]}>
                        <Text style={styles.secondText}>Enter the time interval for the beeping (seconds)</Text>
                    </View>
                    <View style={[styles.third]}>
                        <OutlinedTextField label='Time' keyboardType='phone-pad' fontSize={32}
                                           formatText={this.formatText} containerStyle={styles.timeInput}
                                           value={this.state.time} ref={this.fieldRef}/>
                        <Text style={[styles.timerStarted, {color: this.state.color}]}>Beeper started, beeping after every {this.state.time} seconds</Text>
                        <Icon name={'minus-circle'} size={30} style={styles.beeperStartIcon} color={this.state.color}/>
                    </View>
                    <View style={[styles.fourth]}>
                        <Button icon={{name: 'check', size: 24, color: 'white'}} title="START" type="solid" raised={true}
                                onPress={ async () => {
                                    await this.startTimer();
                                }}
                                containerStyle={styles.startButtonContainer}
                                buttonStyle={styles.startButton}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default timeInput;
