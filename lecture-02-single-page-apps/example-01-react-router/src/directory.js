import React from 'react';
import styles from './master-detail.module.css';

class Directory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            staff: [
                { id: 1, name: "Ash Ketchum", department: "Training", phNumber: "021 1234567", email: "ash@silphco.biz" },
                { id: 2, name: "Misty", department: "Leadership", phNumber: "021 1549810", email: "misty@silphco.biz" },
                { id: 3, name: "Brock", department: "Leadership", phNumber: "021 9876543", email: "brock@silphco.biz" },
                { id: 4, name: "May", department: "Training", phNumber: "021 9048378", email: "may@silphco.biz" }
            ]
        };
    }

    /**
     * TODO Complete this as a class exercise. Links should be displayed in the <aside> - one for each staff member.
     * When clicked, the user should be routed to an appropriate URL for that staff member - whose details should appear
     * in the <main>. You may display a staff member using the <StaffDetails> component.
     */
    render() {
        return (
            <div className={styles.container}>
                <aside>

                </aside>
                <main>

                </main>
            </div>
        );
    }

}