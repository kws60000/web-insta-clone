import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./PostForm.css";

const PostForm = ({ onClickAddPost }) => {
  let history = useHistory();

  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [imgBase64, setImageBase64] = useState("");

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
  const onChangeFile = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImageBase64(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <div id="Post-Form">
      <div className="img_upload">
        <div className="img_add">
          <input
            type="file"
            name="imgFile"
            id="ex_file"
            className="ex_file"
            onChange={onChangeFile}
          />
        </div>
      </div>

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
            place,
            author,
            description,
            hashtags,
            imgBase64,
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
