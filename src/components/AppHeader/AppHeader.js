import React from "react";
import HeaderContainer from "./HeaderContainer";

const AppHeader = (props) => {
  const { onAdd } = props;
  return (
    <div className="form-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col col-8 mx-auto">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mx-auto">Add new task</h5>
                <HeaderContainer onAdd={onAdd} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
