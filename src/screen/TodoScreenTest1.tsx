import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Fallback} from '../components';
import {SVG} from '../assets/svg';

const TodoScreenTest1 = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const handleAddTodo = () => {
    setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
    setTodo('');
  };

  const handleDeleteTodo = id => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const handleEditTodo = todo => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

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
    return (
      <View style={styles.todoItem}>
        <Text style={styles.todoTitle}>{item.title}</Text>

        <TouchableOpacity
          onPress={() => handleEditTodo(item)}
          style={styles.editdelte}>
          {/* <FontAwesome
            name="pencil"
            color={'#fff'}
            size={22}
            style={styles.editdelte}
          /> */}
          <SVG.Pencil />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDeleteTodo(item.id)}
          style={styles.editdelte}>
          {/* <FontAwesome6
            name="trash-can"
            color={'#fff'}
            size={22}
            style={styles.editdelte}
          /> */}
          <SVG.TrashCan />
        </TouchableOpacity>
      </View>
    );
  };
  console.log('fff', todo);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={todo}
        onChangeText={userText => setTodo(userText)}
      />

      {editedTodo ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleUpdateTodo()}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => handleAddTodo()}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      )}

      {/* Render todo list */}

      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreenTest1;

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
