import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the specific group by ID
    const fetchGroup = async () => {
      try {
        const response = await axios.get(`/api/groups/${id}`);
        setGroup(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching group:', error);
        setLoading(false);
      }
    };

    fetchGroup();
  }, [id]);

  return (
    <div className="min-h-screen bg-light-gray text-gray-800 font-poppins p-8">
      {loading ? (
        <p>Loading group details...</p>
      ) : group ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{group.name}</h2>
          <p className="text-gray-700 mb-4">{group.description}</p>
          <p className="text-gray-600 mb-4">{group.members.length} members</p>
        </div>
      ) : (
        <p>Group not found</p>
      )}
    </div>
  );
};

export default GroupDetails;
