import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./PostForm.css";

const PostForm = ({ onClickAddPost }) => {
  let history = useHistory();

  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");

  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };
  const onChagneAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangePlace = (e) => {
    setPlace(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeHashtags = (e) => {
    setHashtags(e.target.value);
  };
  const goHome = () => {
    history.push("/");
  };

  return (
    <div id="Post-Form">
      <input
        type="file"
        accept="image/jpg, image/png, image/jpeg, image/gif"
        onChange={onChangeImage}
      />

      <input
        type="text"
        placeholder="이름을 입력하세요"
        onChange={onChagneAuthor}
        value={author}
      />

      <input
        type="text"
        placeholder="장소를 입력하세요"
        onChange={onChangePlace}
        value={place}
      />

      <input
        type="text"
        placeholder="내용을 입력하세요"
        onChange={onChangeDescription}
        value={description}
      />

      <input
        type="text"
        placeholder="해시태그를 입력하세요"
        onChange={onChangeHashtags}
        value={hashtags}
      />

      <button
        onClick={() => {
          onClickAddPost({
            id: Math.random(),
            image,
            place,
            author,
            description,
            hashtags,
          });
          goHome();
        }}
      >
        추가
      </button>
    </div>
  );
};

export default PostForm;
