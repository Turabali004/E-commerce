// src/components/UserData.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../Features/viewers/userDataSlice';

const UserData = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData.data);
  const status = useSelector((state) => state.userData.status);
  const error = useSelector((state) => state.userData.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <div className="user-info">
        <img src={user.picture.large} alt="User Avatar" className="rounded-full w-24 h-24" />
        <h2 className="text-xl font-bold">{`${user.name.first} ${user.name.last}`}</h2>
        <p>Email: {user.email}</p>
        <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
      </div>
    );
  } else if (status === 'failed') {
    content = <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User</h1>
      {content}
    </div>
  );
};

export default UserData;
