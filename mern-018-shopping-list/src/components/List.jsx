import React from "react";

const List = ({ cart, delItemFromCart }) => {
  return !!cart.length ? (
    <div className="card">
      <div className="card-header bg-dark text-light">My list</div>
      {cart.map((item, i) => {
        return (
          <div key={i} className="card-body">
            <div className="card">
              <div key={i} className="card">
                <div
                  key={i}
                  className="card-body"
                  style={{ backgroundColor: item.color }}
                >
                  {item.name}
                  <button
                    className="close"
                    onClick={(e) => {
                      delItemFromCart(i);
                    }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
};

export default List;
