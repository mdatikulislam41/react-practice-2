import axios from "axios";
import React, { use } from "react";
const promise = axios.get("https://api.github.com/users");

const Call = () => {
  const postData = use(promise);
  console.log(postData.data);

  return (
    <div>
      <button>Call Post</button>
    </div>
  );
};

export default Call;
