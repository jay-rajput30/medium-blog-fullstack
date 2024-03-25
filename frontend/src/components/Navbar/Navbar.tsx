import React from "react";
import Avatar from "../Avatar/Avatar";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between items-center border-b">
      <div className="flex justify-evenly items-center gap-2">
        <h1>MEDIUM</h1>
        <p>draft in kirags</p>
        <p>saved</p>
      </div>
      <div className="flex justify-evenly items-center gap-2">
        <button>publish</button>
        <div></div>
        <div></div>
        <Avatar authorName={"Jay Rajput"} />
      </div>
    </nav>
  );
};

export default Navbar;
