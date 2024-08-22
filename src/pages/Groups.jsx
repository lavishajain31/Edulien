import React, { useEffect, useState } from 'react';
import { getAllGroups } from '../API/GroupApi';

const Groups = ({ token }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const data = await getAllGroups(token);
        setGroups(data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, [token]);

  const handleJoinGroup = async (groupId) => {
    try {
      // Implement join group functionality here
      console.log(`Joining group ${groupId}`);
      // Example API call to join the group
      // await joinGroup(groupId, token);
    } catch (error) {
      console.error('Error joining group:', error);
    }
  };

  return (
    <div className="p-4  min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Groups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {groups.map((group) => (
          <div
            key={group._id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{group.name}</h2>
            <p className="text-gray-600 mb-4">{group.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Members: {group.members.length}</span>
              <a
                href={`/groups/${group._id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>
            <button
              onClick={() => handleJoinGroup(group._id)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
