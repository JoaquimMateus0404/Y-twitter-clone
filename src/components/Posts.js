import React, { useState } from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";

// Função para formatar timestamp para um formato legível
const formatDate = (timestamp) => {
  const dateObj = new Date(timestamp);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
  const year = dateObj.getFullYear();
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const Posts = ({ text, date }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(3); // Valor inicial de curtidas

  const handleLike = () => {
    if (liked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="/images/logo.png" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Duarte Gauss</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @duartegauss <span>{date ? formatDate(date) : "1s"}</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          <p>{text}</p>
        </div>
        <div className="postss__details__img">
          <img src="/images/post.jpg" alt="post" />
        </div>
        <div className="reactions">
          <span className="comment-icon">
            <FaComment className="re" /> 45
          </span>
          <span className="chart-icon">
            <FaRegChartBar className="re" /> 4
          </span>
          <span
            className={`heart-icon ${liked ? "liked" : ""}`}
            onClick={handleLike}
          >
            <FaHeart className="re" /> {likes}
          </span>
          <span className="leaf-icon">
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
