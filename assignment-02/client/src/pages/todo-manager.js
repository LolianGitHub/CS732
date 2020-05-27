import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import { listTodosThunk, createTodoThunk, updateTodoThunk, deleteTodoThunk } from '../redux/actions';
import TodoList from '../components/todo-list';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Switch, Route } from 'react-router-dom';
import TodoDetailsDialog from '../components/todo-details-dialog';

/**
 * A "page-level" component that's hooked into the Redux store to get the list of todo items. When this component
 * mounts, it will also trigger an API call for the most recent items.
 * 
 * This component contains the logic to toggle completed status, and initiate the creation / update / delete of items.
 */
class ToDoManager extends React.Component {

    /**
     * When an instance of this is created, dispatch an API call to load the most recent todos
     */
    constructor(props) {
        super(props);
        this.props.dispatchListTodos();
    }

    /**
     * Called when a todo item's "toggle complete" icon is clicked. Dispatches the appropriate update action.
     */
    handleToggleComplete(todo) {
        this.props.dispatchUpdateTodo({ ...todo, isComplete: !todo.isComplete, modified: new Date() });
    }

    /**
     * Called when a todo item's "edit" icon is clicked.
     * 
     * Navigates appropriately to show the "edit" dialog for the correct todo
     */
    handleEdit(todo) {
        this.props.history.push(`/edit/${todo._id}`);
    }

    /**
     * Called when the "add" FAB is clicked.
     * 
     * Navigates appropriately to show the "add" dialog
     */
    handleAdd() {
        this.props.history.push('/add');
    }

    /**
     * Called when a todo has been successfully edited by the dialog.
     * 
     * Dispatches that change to the server and redirects the user away from the dialog box.
     */
    handleTodoEdited(todo) {
        this.props.dispatchUpdateTodo(todo);
        this.props.history.push("/");
    }

    /**
     * Called when a todo has been created by the dialog.
     * 
     * Dispatches the new todo to the server and redirects the user away from the dialog box.
     */
    handleTodoAdded(todo) {
        this.props.dispatchCreateTodo(todo);
        this.props.history.push("/");
    }

    /**
     * Called when a todo item's "delete" icon is clicked.
     * 
     * Dispatches an action that will delete this todo from the server.
     */
    handleDelete(todo) {
        this.props.dispatchDeleteTodo(todo);
    }

    /**
     * Render logic. If there are any todos, renders a ToDoList to display them. Otherwise, renders a message letting the user
     * know they should add some items.
     * 
     * Also renders a heading, and an "add" button.
     * 
     * Finally, renders the "add" / "edit" dialog box if required.
     */
    render() {
        const { classes, todos, history } = this.props;

        return (
            <div>
                <Typography variant="h4" className={classes.header}>Stuff to get done</Typography>
                {(todos && todos.length > 0) ? (
                    <TodoList
                        todos={todos}
                        onToggleCompleteClick={todo => this.handleToggleComplete(todo)}
                        onEditClick={todo => this.handleEdit(todo)}
                        onDeleteClick={todo => this.handleDelete(todo)} />
                )
                    : (
                        <Typography>
                            You have nothing to do <span role="img" aria-label="sad">😿</span> But fear not! You can start organizing
                            yourself using the <span role="img" aria-label="add">➕</span> button below! <span role="img" aria-label="happy">😺</span>
                        </Typography>
                    )
                }
                <div className={classes.addBox}>
                    <Fab color="primary" aria-label="add" title="Add" onClick={() => this.handleAdd()}><AddIcon /></Fab>
                </div>
                <Switch>
                    <Route path="/edit/:id">
                        <TodoDetailsDialogWithParams todos={todos} onOk={todo => this.handleTodoEdited(todo)} onCancel={() => history.goBack()} />
                    </Route>
                    <Route path="/add">
                        <TodoDetailsDialog open title="What do you need to do?" onOk={todo => this.handleTodoAdded(todo)} onCancel={() => history.goBack()} />
                    </Route>
                </Switch>
            </div>
        );
    }
}

/**
 * Renders a TodoDetailsDialog with its todo prop set to the todo whose _id matches the :id route param.
 * 
 * If no such todo exists, the browser will be sent "backwards" in the history.
 */
function TodoDetailsDialogWithParams({ todos, title, onOk, onCancel }) {
    const { id } = useParams();
    const todo = todos.find(t => t._id === id);
    const history = useHistory();
    if (todo) {
        return <TodoDetailsDialog open title={title} todo={todo} onOk={onOk} onCancel={onCancel} />
    }
    else {
        history.goBack();
        return <div></div>;
    }
}

/**
 * Give the ToDoManager access to the todos from the Redux store
 */
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

/**
 * Give the ToDoManager access to these Redux actions which dispatch API calls
 */
const mapDispatchToProps = {
    dispatchListTodos: listTodosThunk.thunk,
    dispatchCreateTodo: createTodoThunk.thunk,
    dispatchUpdateTodo: updateTodoThunk.thunk,
    dispatchDeleteTodo: deleteTodoThunk.thunk
}

/**
 * Defines CSS classes with styles used by this component
 */
const styles = theme => ({
    header: {
        marginBottom: '20px'
    },
    addBox: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row-reverse'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(ToDoManager)));