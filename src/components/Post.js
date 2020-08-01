import React from "react";
import "./Post.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

const Post = ({ id, imgBase64, author, place, description, hashtags }) => {
  return (
    <div>
      <section id="post-list">
        <article key={id}>
          <header>
            <div className="user-info">
              <span>{author}</span>
              <span>{place}</span>
            </div>
            <img src={more} alt={more} />
          </header>
          <img src={imgBase64} alt={imgBase64} />
          <footer>
            <div className="actions">
              <button type="button">
                <img src={like} alt={like} />
              </button>
              <img src={comment} alt={comment} />
              <img src={send} alt={send} />
            </div>

            <strong>12명이 좋아합니다.</strong>
            <p>
              {description}

              <span>{hashtags}</span>
            </p>
          </footer>
        </article>
      </section>
    </div>
  );
};

export default Post;
