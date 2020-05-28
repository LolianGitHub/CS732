import React from 'react';
import { AppBar, Toolbar, Typography, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';
import GalleryPage from './pages/gallery-page';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import ImageIcon from '@material-ui/icons/Image';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import {store} from './redux/reducers/config-reducers';
import {setShowOnlyFavourites} from './redux/actions'
/** 
 * Main app component. Hooks up the Redux store and provides the app bar. The main app logic is all handled
 * within the ToDoManager.
 */
function App() {

  const classes = useStyles();

  return (
    // <Provider store = {store}>
    <Router>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <ImageIcon fontSize="large" className={classes.icon} />
            <Typography variant="h6" className={classes.title}>Yet Another Image Gallery</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<StarBorderIcon />}
                  checkedIcon={<StarIcon />}
                  checked={store.getState().showOnlyFavourites}
                  onChange={event => {
                    store.dispatch(setShowOnlyFavourites(event.target.checked));
                    console.log(`TODO: Dispatch a Redux action to set "show only favorites" to ${event.target.checked}`)
                  }
                  }
                  color="secondary"
                />
              }
              label="Show only favourites"
            />
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <GalleryPage />
        </div>
      </MuiPickersUtilsProvider>
    </Router>
    // </Provider>    
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1)
  },
  appBar: {
    marginBottom: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  container: {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr'
  }
}));

export default App;