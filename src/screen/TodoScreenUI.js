import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TodoScreenUI = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const handleAddTodo = () => {
    if (todo === '') {
      return;
    }

    setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
  };

  const handleDeleteTodo = id => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const renderTodos = ({item, index}) => {
    return (
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{item.title}</Text>
        <FontAwesome name="pencil" color={'red'} fontSize={22} />
        <Ionicons name="trash" color={'red'} fontSize={22} />
      </View>
    );
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a Task"
        value={todo}
        onChageText={userText => setTodo(userText)}
      />

      <TouchableOpacity
        style={styles.button}
        // onPress={() => Alert('Asif')}
        onPress={() => handleAddTodo()}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <FlatList data={todoList} renderItem={renderTodos} />
    </View>
  );
};

export default TodoScreenUI;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    color: 'red',
  },
  buttonText: {
    backgroundColor: 'black',
    color: 'red',
  },
});
