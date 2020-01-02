import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableNativeFeedback
      /* opacity ketika item di click */
      activeOpacity={0.8}
      onPress={() => props.onDelete(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10, // margin between item in list
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
