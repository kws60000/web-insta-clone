export const ADDPOST = "postList/ADDPOST";

export const addPost = ({ id, author, place, description, hashtags }) => ({
  type: ADDPOST,
  id,
  author,
  place,
  description,
  hashtags,
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
        },
      ];
    default:
      return state;
  }
}
