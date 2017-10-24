import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';

import { serviceCall } from '../actions/items';
import Header from '../components/Header';
import ListPage from '../components/ListPage';
import Home from '../components/Home';
import '../assets/stylesheets/App.scss';

export class App extends Component {
  onSubmit() {
    this.props.dispatch(serviceCall());
  }

  render() {
    return (
      sessionStorage.kctoken ?
      <div className="app">
        <Header />

        <Route exact path="/" component={() => {
            return (
              <Home
                onSubmit={() => this.onSubmit()}
              />
            );
          }} />
        <Route
          path="/list"
          component={() => {
            return (
              <ListPage
                items={this.props.items}
                addItem={text => this.handleAddItem(text)}
              />
            );
          }}
        />
      </div> : <div></div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  onSubmit: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    items: state.items.list,
  };
}

export default withRouter(connect(mapStateToProps)(App));
