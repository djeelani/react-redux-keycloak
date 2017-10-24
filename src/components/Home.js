import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Divider from 'react-md/lib/Dividers';
import Button from 'react-md/lib/Buttons/Button';

import '../assets/stylesheets/Home.scss';

const Home = props => {
  return (
    <Card className="card">
      <CardTitle
        title="Keycloak + React-Redux Starter Kit"
      />
      <Divider />
      <CardText>

      <div className="home__feature-title"></div>
      <Button
              label="Service Call"
              onClick={props.onSubmit}
              raised
              primary
              type="submit"
            />
        <Divider />
      </CardText>
    </Card>
  );
};

Home.propTypes = {
  onSubmit: PropTypes.func
}
export default Home;
