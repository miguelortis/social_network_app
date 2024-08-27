"use client";

import { useEffect, useState } from "react";
import Post from "../Post/Post";
import { useParams } from "next/navigation";

const posts = [
  {
    user: {
      _id: "asda76asd86a456d9a333sdi",
      name: "Marcos Daniel",
      lastName: "Mariño Díaz",
      profilePic:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    post: {
      comment: "Divierte conmigo.!",
      postDate: new Date(),
    },
  },
  {
    user: {
      _id: "asda76asd8fjd856adkasdi",
      name: "Rey Frank",
      lastName: "Lugo Jimenez",
      profilePic:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    post: {
      comment:
        "Mi paisaje favorito soñado, alguien que le guste este sitio???...!!!!!!",
      image:
        "https://media.istockphoto.com/id/472831484/es/foto/gama-de-monta%C3%B1a-en-el-parque-nacional-de-komodo-en-indonesia.jpg?s=1024x1024&w=is&k=20&c=PXxU3Wn4aRN6IZjwhhlZptqcvy0c0fp6AqmsiVHCTTs=",
      postDate: new Date(),
    },
  },
  {
    user: {
      _id: "asda790sdo34asd9adkasdi",
      name: "Juan David",
      lastName: "Hernández Sanchez",
      profilePic:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    post: {
      comment: "Mi Corazón también es tuyo!!!!!!",
      image: "corazon.jpg",
      postDate: new Date(),
    },
  },
  {
    user: {
      _id: "asda76asd8043jf9adkasdi",
      name: "Rene",
      lastName: "Chirinos",
      profilePic:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    post: {
      comment: "Mi Corazón también es tuyo!!!!!!",
      image: "corazon.jpg",
      postDate: new Date(),
    },
  },
  {
    user: {
      _id: "asda76asd8043jf9adkasdi",
      name: "Rene",
      lastName: "Chirinos",
      profilePic:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    post: {
      comment:
        "Mi paisaje favorito soñado, alguien que le guste este sitio???...!!!!!!",
      image:
        "https://media.istockphoto.com/id/472831484/es/foto/gama-de-monta%C3%B1a-en-el-parque-nacional-de-komodo-en-indonesia.jpg?s=1024x1024&w=is&k=20&c=PXxU3Wn4aRN6IZjwhhlZptqcvy0c0fp6AqmsiVHCTTs=",
      postDate: new Date(),
    },
  },
];

export default function PostList({ userData }) {
  const { user } = useParams();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    if (user) {
      setPostList(posts.filter((item) => item.user._id === user));
    } else {
      setPostList(posts);
    }
  }, [user]);

  return (
    <>
      {postList?.map((item, i) => {
        return <Post key={i} data={item} userData={userData} />;
      })}
    </>
  );
}
