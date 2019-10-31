import React from 'react';
import './App.scss';

import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <header className="header">
            <h1>Header</h1>
          </header>
        </div>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      <div className="App">
        <header className="header">
          <h1>Header</h1>
        </header>

        <main className="main">
          <section className="left">
            <Button color="primary" variant="contained">
              Hello
            </Button>
          </section>
          <section className="right">
            <Button>Hello</Button>
          </section>
        </main>

        <footer className="footer">
          <p>Footer</p>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
