import React, { Component } from "react";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddedPerson} />
        {this.props.pers.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onRemovedPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pers: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddedPerson: () => dispatch({ type: actionTypes.ADD_PERSON }),
    onRemovedPerson: (id) =>
      dispatch({ type: actionTypes.REMOVE_PERSON, personId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
