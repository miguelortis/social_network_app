"use client";

import PostList from "../../../../components/PostList/PostList";

export default function Profile({ currentUser, userProfile }) {
  return <PostList userData={currentUser} userProfile={userProfile} />;
}
