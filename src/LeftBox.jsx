import React from "react";
import { Route, Switch } from "react-router-dom";


// importing design and edit-design components
import Designs from "./Designs";
import EditDesigns from "./Edit-Design";

const LeftBox = () => {
  return (
    <>
    <div className="left_box_style">
      <Switch>
        <Route exact path="/" component={Designs} />
        <Route exact path="/edit" component={EditDesigns} />
      </Switch>
      </div>
    </>
  );
};

export default LeftBox;
