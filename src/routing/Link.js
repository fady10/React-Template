import React from "react";
const Link = ({ href, children }) => {
  const onClick = (event) => {
    //handling ctrl+click
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    // changing the url in the browser
    window.history.pushState({}, "", href);
    // creating event to know the url change
    const navEvent = new PopStateEvent("popstate");
    //dispatch the event to the window
    window.dispatchEvent(navEvent);
  };
  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
};
export default Link;