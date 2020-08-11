import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to Cycle Mate</h1>
      <h2>What are we about?</h2>
      <p>
        I’m recently re-learning React framework as it was 3years ago since the
        last time I use React for a production application. In the midst of
        rewriting my Github Pages with React which I previously created using
        raw HTML and CSS only, I encountered a problem where I want to implement
        Google Font — Source Sans Pro in my application. After some delving
        using Google and StackOverflow, I found some of the answers are either
        complicated or out-of-date. Thus, this article will show you how to
        configure and use Google Font with just two lines of code.
      </p>
      <img
        src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/11/18/cycling-guide.jpg?w=990"
        alt="Cycle Mate"
      />
    </div>
  );
}
