export const ADDPOST = "postList/ADDPOST";

export const addPost = ({
  id,
  author,
  place,
  description,
  hashtags,
  imgBase64,
}) => ({
  type: ADDPOST,
  id,
  author,
  place,
  description,
  hashtags,
  imgBase64,
});

export default function postList(state = [], action) {
  switch (action.type) {
    case ADDPOST:
      console.log(action);
      return [
        ...state,
        {
          id: action.id,
          author: action.author,
          place: action.place,
          description: action.description,
          hashtags: action.hashtags,
          imgBase64: action.imgBase64,
        },
      ];
    default:
      return state;
  }
}
