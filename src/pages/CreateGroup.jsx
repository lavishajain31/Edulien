// src/components/CreateGroup.js
import React, { useState } from 'react';
import { createGroup } from '../API/groupAPI';

const CreateGroup = ({ token }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState([]);

  const handleCreateGroup = async () => {
    const groupData = { name, description, members };
    const response = await createGroup(groupData, token);
    console.log(response);
    // Handle the response, e.g., show a success message or update the UI
  };

  return (
    <div>
      <h2>Create a New Group</h2>
      <input
        type="text"
        placeholder="Group Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      {/* Add inputs for selecting members */}
      <button onClick={handleCreateGroup}>Create Group</button>
    </div>
  );
};

export default CreateGroup;
