import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (<nav>
  {/* display an <a> tag for each link here */}
  {links.map((link, index)=>{
    console.log('====================================');
    console.log(index);
    console.log('====================================');
    console.log(link);
    return(
      <a key={index} href="hh">{link}</a>
    )})}
  </nav>);
}

export default NavBar;
