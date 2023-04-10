import React from "react";

const Grid = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="box col1 box1">col1 box1</div>
        <div className="box col1 box2">col1 box2</div>
        <div className="box col1 box3">col1 box3</div>
        <div className="box col1 box4">col1 box4</div>

        <div className="box col2 box1">col2 box1</div>
        <div className="box col2 box2">col2 box2</div>
        <div className="box col2 box3">col2 box3</div>

        <div className="box col3 box1">col3 box1</div>
        <div className="box col3 box2">col3 box2</div>
        <div className="box col3 box3">col3 box3</div>
        <div className="box col3 box4">col3 box4</div>
      </div>
    </div>
  );
};

export default Grid;
