import todoModule from '../modules/todo';
import { connectModule } from '../../../src/index';
import TodoList from '../components/TodoList';

const mapState = state => ({
  todos: state.todos.toJS(),
});

const Connected = connectModule(
  mapState,
  todoModule
)(TodoList);

export default Connected;
