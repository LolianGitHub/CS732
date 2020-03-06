import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

/**
 * The root reducer handles all state updates based on the provided action.
 * 
 * The "state = initialState" syntax means "if no argument is supplied, use initialState as the default".
 * 
 * @param state The current state
 * @param action The action to perform on the current state
 * @returns what the new state should be
 */
export default function rootReducer(state = initialState, action) {

    // Perform different things based on the type of action
    switch (action.type) {

        // Object.assign() Takes the first object ({} in this case), and assigns all properties of all subsequent objects
        // to it. In this use case, it makes a shallow copy of "state", then modifies it by changing the "todos" array.
        case ADD_TODO:
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            });

        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: visibilityFilter(state.visibilityFilter, action)
            });

        default:
            return state;
    }
}

/**
 * This function handles modifications to the "todos" property of the overall state. It handles adding new to-do items,
 * and toggling the "completed" status of existing ones.
 * 
 * @param {*} state the current todos array
 * @param {*} action the modification to make to the array
 * @returns the new todos array
 */
function todos(state = [], action) {
    // Perform different things based on the type of action
    switch (action.type) {

        // To add a to-do item, we create a new array containing all elements in the current array,
        // with the new to-do item added onto the end.
        case ADD_TODO:
            return [
                ...state, /* This syntax means "All items in the state array".
                             It essentially adds all those items to this new array that's being created. */
                {
                    text: action.text,
                    completed: false
                }
            ]

        // To toggle a to-do item...
        case TOGGLE_TODO:
            // Return a new array, where...
            return state.map((todo, index) => {

                // ... if this is the to-do item we're toggling...
                if (index == action.index) {
                    // ... we use a copy of that to-do item with its "completed" status toggled.
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }

                // ... Otherwise, we use the unmodified to-do item.
                return todo;
            })

        default:
            return state;
    }
}

/**
 * This function handles modifications to the "visibilityFilter" property of the overall state.
 * 
 * @param {*} state the current visibility filter
 * @param {*} action the modification to make to the filter
 * @returns the new filter
 */
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {

        case SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return state;
    }
}