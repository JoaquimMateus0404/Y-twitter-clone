import React, { useState } from "react";
import CreateTweet from "./CreateTweet";
import Posts from "./Posts";

const Twittes = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (newTweet) => {
    setTweets([{ text: newTweet, id: Date.now() }, ...tweets]);
  };

  return (
    <div className="posts">
      <div className="posts__home">Para você</div>
      <CreateTweet addTweet={addTweet} />
      {tweets.map((tweet) => (
        <div key={tweet.id} className="post fade-in">
          <Posts text={tweet.text} date={Date(tweet.id)} />
        </div>
      ))}
    </div>
  );
};

export default Twittes;
