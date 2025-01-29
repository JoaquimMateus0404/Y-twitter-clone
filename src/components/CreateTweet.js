import React, { useState } from "react";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";

const CreateTweet = ({ addTweet }) => {
  const [tweet, setTweet] = useState("");
  const maxChars = 280;

  const handleChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setTweet(e.target.value);
    }
  };

  const handlePost = () => {
    if (tweet.trim()) {
      addTweet(tweet);
      setTweet("");
    }
  };

  const charsLeft = maxChars - tweet.length;
  const charsLeftStyle = {
    color: charsLeft < 20 ? "red" : "black",
  };

  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img src="/images/profile.jfif" alt="profile img" />
        </div>
        <div className="create__input">
          <textarea
            type="text"
            className="create__control"
            value={tweet}
            onChange={handleChange}
            placeholder="O que esta acontecendo?"
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icons">
          <FaRegImage className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <div className="chars__left" style={charsLeftStyle}>
            {charsLeft}
          </div>
        <div className="create__btn">
          <button onClick={handlePost} disabled={!tweet.trim()}>
            Postar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;


