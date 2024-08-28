"use client";

import PostList from "../../../../components/PostList/PostList";

export default function Profile({ currentUser = {} }) {
  return <PostList userData={currentUser} />;
}
