import PropTypes from 'prop-types';
import React from 'react';

const Main = ({ name, updateName }) => (
  <div>
    <h3>
      Hello, {name}!
    </h3>
    <hr />
    <form >
      <div className="field">
        <div className="control">
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            className="input"
            id="name"
            type="text"
            value={name}
            onChange={(e) => updateName(e.target.value)}
          />
        </div>
      </div>
    </form>
  </div>
);

Main.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default Main;
