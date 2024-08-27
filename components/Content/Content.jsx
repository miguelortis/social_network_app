import PostList from "../PostList/PostList";
import SendPost from "../SendPost/SendPost";

const Content = ({ currentUser }) => {
  return (
    <div>
      <SendPost userData={currentUser} />
      <PostList userData={currentUser} />
    </div>
  );
};

export default Content;
