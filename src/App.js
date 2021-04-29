import React, { Component } from "react";
import Headercomponent from "./components/HeaderComponent";
import Register from "./components/Register";
class App extends Component {
  render() {
    return (
      <section>
        <article>
          <header>
            <Headercomponent />
          </header>
          <main>
            <Register />
          </main>
          <footer></footer>
        </article>
      </section>
    );
  }
}
export default App;
