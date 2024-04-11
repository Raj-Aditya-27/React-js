import React, { useEffect, useState } from 'react'

function Github() {
    const [followers,setFollowers]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res=>res.json())
        .then(data=>{
            setFollowers(data);
        })
    })
  return (
    <div>Github: {followers.followers}</div>
  )
}

export default Github