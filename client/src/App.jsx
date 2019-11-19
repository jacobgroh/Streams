import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./components/streams/streamCreate";
import StreamEdit from "./components/streams/streamEdit";
import StreamShow from "./components/streams/streamShow";
import StreamDelete from "./components/streams/streamDelete";
import StreamList from "./components/streams/streamList";
import Header from "./components/header";
import history from "./history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/:id" component={StreamShow} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
