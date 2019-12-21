import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    main: {
        flex: 1,
        borderColor: "white",
        borderWidth: 1,
        margin: 5
    },
    first: {
        flex: 1,
        borderColor: "white",
        borderWidth: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 15
    },
    second: {
        flex: 1,
        borderColor: "white",
        borderWidth: 1
    },
    third: {
        flex: 2,
        borderColor: "white",
        borderWidth: 1
    },
    fourth: {
        borderColor: "white",
        borderWidth: 1
    },
    topText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-light',
        color: "rgba(12,12,12,0.81)",
        textAlign: 'center',
        paddingTop: 20
    },
    infoButton: {
        paddingTop: 25,
        paddingLeft: 15
    },
    secondText: {
        fontSize: 30,
        textAlign: "center",
        paddingTop: 20,
        fontFamily: 'sans-serif-thin'
    },
    timeInput: {
        alignContent: 'center',
        padding: 15,
        paddingTop: 80,
    },
    startButtonContainer: {
        margin: 10
    },
    startButton: {
        padding: 20
    },
    firstOne: {
        flex: 4
    },
    firstSecond: {
        flex: 1
    },
    timerStarted: {
        textAlign: 'center',
        fontSize: 24
    },
    beeperStartIcon : {
        alignSelf: 'center'
    }
});
