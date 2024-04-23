// yarn add react-native-paper
// yarn add react-native-safe-area-context
// yarn cache clean
// yarn add react-native-vector-icons

import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fallback from '../components/Fallback';

// const dummyData = [
//   {
//     id: '01',
//     title: 'Wash Car',
//   },
//   {
//     id: '02',
//     title: 'Read a book',
//   },
// ];

//console.log(Date.now().toString());

const TodoScreen = () => {
  // init local states
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  // Handle Add Todo

  const handleAddTodo = () => {
    // console.log('jjj');
    // structure of a single todo item
    // {
    //   id:
    //   tiltle:
    // }

    if (todo === '') {
      return; // early return
    }
    // ... : is called spread operator. Which give us previous data in the form of object
    // console.log('list', [...todoList]);
    setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
    // console.log('afterlist', ...todoList);
    setTodo('');
  };

  // Handle Delete
  const handleDeleteTodo = id => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);

    setTodoList(updatedTodoList);
  };

  // Handle Edit todo

  const handleEditTodo = todo => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  // Handle Update todo

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map(item => {
      if (item.id === editedTodo.id) {
        return {...item, title: todo};
      }

      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo('');
  };

  // Render Todo
  const renderTodos = ({item, index}) => {
    // console.log('index', index);
    return (
      <View style={styles.todoItem}>
        <Text style={styles.todoTitle}>{item.title}</Text>

        <FontAwesome
          name="pencil"
          color={'#fff'}
          size={22}
          onPress={() => handleEditTodo(item)}
          style={styles.editdelte}
        />
        <FontAwesome6
          name="trash-can"
          color={'#fff'}
          size={22}
          onPress={() => handleDeleteTodo(item.id)}
          style={styles.editdelte}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={todo}
        //onChangeText={(userText) => Console.log(userText)}
        onChangeText={userText => setTodo(userText)}
      />

      {editedTodo ? (
        <TouchableOpacity
          style={styles.button}
          //onPress={() => Alert('hi')}
          onPress={() => handleUpdateTodo()}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          //onPress={() => Alert('hi')}
          onPress={() => handleAddTodo()}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      )}

      {/* Render todo list */}

      {/* <FlatList data={dummyData} renderItem={renderTodos} /> */}
      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: '#1e90ff',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 6,
    paddingVertical: 12,
    marginVertical: 34,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  todoItem: {
    backgroundColor: '#1e90ff',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    flex: 1,
  },
  editdelte: {
    paddingHorizontal: 8,
  },
});
