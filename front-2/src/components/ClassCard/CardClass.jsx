import React from "react";
import "./CardClass.css";

function CardClass() {
  return (
    <div className="card-class">
      <div className="card">
        <div className="card-header">
          <h3 className="card-header__title-class">Español</h3>
          <h4 className="card-header__teacher-name">Juan Ramses Meza Martínez</h4>
        </div>
        <div className="card-body">
          <p className="card-header__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur officiis consequuntur optio assumenda dicta molestiae sint illo consequatur animi fugit excepturi voluptatibus nihil, non alias iste deleniti, temporibus, perspiciatis possimus?</p>
        </div>
        <div className="card-footer">
          <button className="btn" >
            Unirse
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardClass;
