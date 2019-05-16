import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Statehook from "./useStateHook/useStateHook";

class App extends Component {
  myperson = { name: "MAtt", age: 20 };
  isDisplayed = false;

  state = {
    personArray: [{ name: "MAtt", age: 20 }, { name: "Sem", age: 30 }],
    inputText: "something",
    isContentShowed: false,
    divContent: null
  };

  onClick = () => {
    console.log("it is clicked on");
    this.setState({ personArray: [{ name: "MAtt", age: 210 }] }); // it is inherited
    // this.setMyperson({name: 'SSS'}); // it is not existed
  };

  changePersonName = (event, index) => {
    /* dont need deepy copy:
     * const newArray = [...this.state.personArray];
     *
     * Index examination is unwanted,as index come form map function,as
     * the indexes are not out of range
     */
    this.state.personArray[index].name = event.target.value;
    this.setState({
      personArray: this.state.personArray
    });
  };

  hideContent = () => {
    this.isDisplayed = !this.state.isContentShowed;
    this.setState({ isContentShowed: this.isDisplayed });
    if (this.isDisplayed) {
      this.setState({
        divContent: (
          <div>
            <p>This is a content.</p>
          </div>
        )
      });
    } else {
      this.setState({ divContent: null });
    }
  };

  componentDidMount() {
    // document.querySelector('input').focus();
    this.inputElement.focus();
  }

  render() {
    return (
      <div className="App">
        <h1>It is trial</h1>
        <button onClick={this.onClick}>Change age</button>
        <Person
          name={this.state.personArray[0].name}
          age={this.state.personArray[0].age}
        />
        <Statehook />

        <hr />
        <h1>Two Way Binding</h1>
        <div>
          {this.state.personArray.map((person, index) => {
            return (
              <Person key={index} name={person.name} age={person.age}>
                Change name:
                <input
                  ref={inputEl => {
                    this.inputElement = inputEl;
                  }}
                  type="text"
                  value={person.name}
                  onChange={event => this.changePersonName(event, index)}
                />
              </Person>
            );
          })}
        </div>

        <hr />
        <h1>Hide tag from the DOM</h1>
        <button onClick={this.hideContent}>
          {this.state.isContentShowed ? "Hide" : "Show"} content
        </button>
        {
          // show or hide div content
          this.state.divContent
        }
      </div>
    );
  }
}

export default App;
