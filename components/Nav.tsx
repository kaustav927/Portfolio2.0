import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="text-lg">Kaustav Sharma</div>
        <div>
          <a>Home</a>
          <a>Projects</a>
          <a>About</a>
          <a>Contact</a>
          <a>Resume</a>
        </div>
      </div>
    </header>
  );
}

export default Nav;