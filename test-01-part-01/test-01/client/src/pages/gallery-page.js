import React from 'react';

import { connect } from 'react-redux';
import { listGalleryItemsThunk } from '../redux/actions';
import { withRouter, useParams, Switch, Route, Redirect } from 'react-router-dom';

import ImageGallery from '../components/image-gallery';

/**
 * A "page-level" component that's hooked into the Redux store to get the gallery items. When this component
 * mounts, it will also trigger an API call for the most recent items.
 */
class GalleryPage extends React.Component {

    constructor(props) {
        super(props);
        props.dispatchListGalleryItems();
    }

    render() {
        const { galleryItems } = this.props;

        return (
            <Switch>
                <Route exact path="/">
                    <ImageGallery> galleryItems={galleryItems} </ImageGallery>
                </Route>
                <Route path="*">
                    <Redirect to={`/${galleryItems[0] ? galleryItems[0]._id : ''}`} />
                </Route>
            </Switch>
        );
    }
}

/**
 * Give the ToDoManager access to the todos from the Redux store
 */
const mapStateToProps = state => {
    return {
        galleryItems: state.galleryItems
    }
}

/**
 * Give the ToDoManager access to these Redux actions which dispatch API calls
 */
const mapDispatchToProps = {
    dispatchListGalleryItems: listGalleryItemsThunk.thunk
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GalleryPage));