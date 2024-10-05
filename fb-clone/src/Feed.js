import React from "react";
import "./Feed.css";
import StoryRow from "./StoryRow";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryRow />
      <MessageSender />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/c/ce/MS_Dhoni_in_2011.jpg"
        message="working"
        timestamp="Now"
        username="Dharmil"
        image="https://upload.wikimedia.org/wikipedia/commons/c/ce/MS_Dhoni_in_2011.jpg"
      />

      <Post/>
      <Post />
    </div>
  );
}

export default Feed;
