import React from "react";
import "./StoryRow.css";
import Story from "./Story";

function StoryRow() {
  return (
    <div className="StoryRow">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/c/ce/MS_Dhoni_in_2011.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/c/ce/MS_Dhoni_in_2011.jpg"
        title="Dharmil"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg"
        title="Malav"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/f/f7/Rohit_Sharma_November_2016_%28cropped%29.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/f/f7/Rohit_Sharma_November_2016_%28cropped%29.jpg"
        title="Dhruvang"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/3/3f/SHIKHAR_DHAWAN_%2816005494418%29.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/3/3f/SHIKHAR_DHAWAN_%2816005494418%29.jpg"
        title="Parshwa"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/2/29/Ravi_Shastri.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/2/29/Ravi_Shastri.jpg"
        title="Ishan"
      />
    </div>
  );
}

export default StoryRow;
