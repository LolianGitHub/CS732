import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoExpansionPanel from '../todo-expansion-panel';
import moment from 'moment';

let threeMonthsAgo, oneMonthAgo, oneMonthFromNow;

let todoOverdue, todoIncomplete, todoComplete;

beforeEach(() => {

    threeMonthsAgo = moment().subtract(3, 'months');
    oneMonthAgo = moment().subtract(1, 'month');
    oneMonthFromNow = moment().add(1, 'month');

    todoOverdue = {
        title: 'Overdue item',
        description: 'Overdue description',
        created: threeMonthsAgo.toDate(),
        modified: threeMonthsAgo.toDate(),
        due: oneMonthAgo.toDate(),
        isComplete: false,
        priority: 'High'
    };

    todoIncomplete = {
        title: 'Incomplete item',
        description: 'Incomplete description',
        created: threeMonthsAgo.toDate(),
        modified: threeMonthsAgo.toDate(),
        due: oneMonthFromNow.toDate(),
        isComplete: false,
        priority: 'Medium'
    };

    todoComplete = {
        title: 'Complete item',
        description: 'Complete description',
        created: threeMonthsAgo.toDate(),
        modified: threeMonthsAgo.toDate(),
        due: oneMonthAgo.toDate(),
        isComplete: true,
        priority: 'Low'
    };
})


it('displays the correct data with overdue item', () => {
    const { container } = render(<TodoExpansionPanel expanded={false} todo={todoOverdue} />);

    // Make sure items with these text are on-screen
    screen.getByText('Overdue item');
    screen.getByText('Overdue description');
    screen.getByText('High priority');
    screen.getByText(threeMonthsAgo.calendar());
    screen.getByText(`Overdue! Was due ${oneMonthAgo.fromNow()}`);
    
    expect(screen.queryByText('Due in')).toBeNull();
    expect(screen.queryByText('Done!')).toBeNull();
});