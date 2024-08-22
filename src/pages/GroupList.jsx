// src/components/GroupList.js
import React, { useEffect, useState } from 'react';
import { getAllGroups } from '../API/GroupApi';

const GroupList = ({ token }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const groupsData = await getAllGroups(token);
      setGroups(groupsData);
    };

    fetchGroups();
  }, [token]);

  return (
    <div>
      <h2>Group List</h2>
      {groups.map((group) => (
        <div key={group._id}>
          <h3>{group.name}</h3>
          <p>{group.description}</p>
          <p>Created by: {group.createdBy.name}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default GroupList;
