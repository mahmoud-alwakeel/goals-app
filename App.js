import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import GoalItem from './components/goal_item';
import GoalInput from './components/goal_input';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setshowModal] = useState(false);

  function showModalHandler() {
    setshowModal(true);
  }

  function closeModalHandler() {
    setshowModal(false);
  }

  function goalClickedHandler(enteredGoalText) {
    setGoals((currentGoals) => [...currentGoals, {
      text: enteredGoalText,
      id: Math.random().toString()
    },]);
    closeModalHandler();
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title='Add Goal'
        color='purple'
        onPress={showModalHandler}
      />
      {showModal ? <GoalInput visible={showModal} onAddGoal={goalClickedHandler} onCancel={closeModalHandler} /> : null}
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(itemData) => {
          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} />
          );
        }}
          keyExtractor={(item, index) => { return item.id }}
        />
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
