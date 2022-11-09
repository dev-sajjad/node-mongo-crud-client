import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);
    
    const handleDelete = (user) => {
        const agree = window.confirm(`Are you sure want to delete user: ${user.name}`)
        if (agree) {
            //  console.log('want to delete id:', user._id)
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {                    // received data: acknowledged: true, deletedCount: 1
                    if (data.deletedCount > 0) { 
                        alert('User delete successfully')
                        const remainingUser = users.filter(usr => usr._id !== user._id)     // after delete remaining user
                        setDisplayUsers(remainingUser);
                    }
            })
        }
    }

  return (
    <div>
      <h3>Users: {displayUsers.length}</h3>
      <div>
        {displayUsers.map((user) => (
          <p key={user._id}>
                {user.name} {user.email}{" "}
                <Link to={`/update/${user._id}`}>
                    <button>Update</button>
                </Link>
            <button onClick={() => handleDelete(user)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
