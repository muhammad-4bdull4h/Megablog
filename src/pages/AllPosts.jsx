import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import PostCard from "../components/PostCard";
import Container from "../components/container/Container";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  service.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex-wrap flex">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4 ">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
