// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import GoalItem from './components/goal_item';
import GoalInput from './components/goal_input';

export default function App() {
  const [goals, setGoals] = useState([]);


  function goalClickedHandler(enteredGoalText) {
    setGoals((currentGoals) => [...currentGoals, { text: enteredGoalText, key: Math.random().toString() },]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal = {goalClickedHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}/>;
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5,
  },
  text: {
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 16,
  },
});
