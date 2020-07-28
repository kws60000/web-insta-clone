import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const Main = ({ postList }) => {
  return (
    <div>
      {postList.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          image={post.image}
          author={post.author}
          place={post.place}
          description={post.description}
          hashtags={post.hashtags}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postList: state.postList,
  };
};

export default connect(mapStateToProps)(Main);
