import { addTodoLoading, addTodoSuccess, addTodoError, loadTodosLoading, loadTodosSuccess, loadTodosError, loadEventsLoading, loadEventsSuccess, loadEventsError } from '..';
import Api from '../../../api';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

export function addTodo(text) {
    return dispatch => {

        const todo = {
            id: uuid(),
            text,
            completed: false,
            modified: moment().format()
        };

        dispatch(addTodoLoading(todo));

        Api.addTodo(todo)
            .then(

                response => {
                    if (response.status === 200) {
                        dispatch(addTodoSuccess(todo));
                    }
                    else {
                        dispatch(addTodoError(todo, "Incorrect status received"));
                    }
                },

                error => dispatch(addTodoError(todo, error.message ? error.message : "Unknown error"))

            );

    }
}

export function loadTodos() {
    return dispatch => {

        // First, dispatch the LOAD_TODOS_LOADING action, allowing the rest of our app to detect when
        // we've started loading todos.
        dispatch(loadTodosLoading());

        // Now, start loading the todos.
        Api.getTodos()
            .then(

                // If the todos were loaded successfully, dispatch the LOAD_TODOS_SUCCESS action allowing the todos to be added to the store
                todos => dispatch(loadTodosSuccess(todos)),

                // If there was an error loading todos, dispatch the LOAD_TODOS_ERROR action providing details of the error
                error => dispatch(loadTodosError(error.message || "Unexpected error!")));

    }
}

export function loadEvents() {
    return dispatch => {

        dispatch(loadEventsLoading());

        Api.getEvents()
            .then(
                events => dispatch(loadEventsSuccess(events)),

                error => dispatch(loadEventsError(error.message || "Unexpected error!")));

    }
}