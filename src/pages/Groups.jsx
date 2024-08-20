import React, { useState, useEffect } from 'react';
import GroupCard from './GroupCard';
import axios from 'axios';

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all groups from the server
    const fetchGroups = async () => {
      try {
        const response = await axios.get('/api/groups');
        setGroups(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching groups:', error);
        setLoading(false);
      }
    };
    
    fetchGroups();
  }, []);

  // Filter groups based on search term
  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-light-gray text-gray-800 font-poppins">
      {/* Header */}
      <header className="bg-dark-blue text-white p-6 text-center shadow-md">
        <h1 className="text-4xl font-bold">Student Groups & Clubs</h1>
        <input
          type="text"
          placeholder="Search for groups..."
          className="mt-4 p-2 rounded-md w-2/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      {/* Groups Section */}
      {loading ? (
        <div className="text-center mt-8">
          <p>Loading groups...</p>
        </div>
      ) : (
        <section className="p-8 flex flex-wrap justify-center gap-8 w-full max-w-7xl mx-auto">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))
          ) : (
            <p>No groups found</p>
          )}
        </section>
      )}
    </div>
  );
};

export default Groups;
