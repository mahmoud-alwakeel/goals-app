import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal_img.png')} />
                <TextInput
                    placeholder='Your course goal!'
                    style={styles.inputText}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons} >
                    <Button title='Add goal' onPress={addGoalHandler} color='#b180f0'/>
                    </View>
                    <View style={styles.buttons} >
                    <Button title='Cancel' onPress={props.onCancel} color='#5e0acc'/>
                    </View>
                </View>
            </View>

        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        marginRight: 8,
        padding: 8,
        marginTop: 24,
        borderRadius: 6,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    buttons: {
        width: '30%',
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
    },
});