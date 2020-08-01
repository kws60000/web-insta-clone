import React from "react";
import PostForm from "./PostForm";
import { connect } from "react-redux";
import { addPost } from "../modules/postList";

const PostAdd = ({ handleAddPost }) => {
  return (
    <div>
      <PostForm onClickAddPost={handleAddPost} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postList: state.postList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleAddPost: ({ id, imgBase64, author, place, description, hashtags }) =>
    dispatch(addPost({ id, imgBase64, author, place, description, hashtags })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);
