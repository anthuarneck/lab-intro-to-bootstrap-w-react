import React from "react";


const PostTable = ({postData}) => {

    function postCount(postData){
    const countByPost = postData.reduce((countMap, post) => {
        const location = post.location;
        countMap[location] = (countMap[location] || 0) + 1;
        return countMap
    }, {})
    return countByPost
    }

    const countByPost = postCount(postData)


  return (
    <div>
        <h2>Posts by <span style={{ color: "gold"}}>location</span></h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th scope="col">Posts</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(countByPost).map((location) => {
            return (
              <tr key={location}>
                <td>{location}</td>
                <td>{countByPost[location]}</td> 
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
