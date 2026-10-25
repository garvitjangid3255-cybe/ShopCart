import { useEffect, useState } from 'react';
import API from '../services/api.js';

function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await API.get('/fetch');
                setUser(response.data.user);
            } catch (error) {
                setError(
                    error.response?.data?.message || 'Profile load nahi ho payi.'
                );
            }
        };

        fetchProfile();
    }, []);

    if (error) {
        return <p className="p-6 text-red-600">{error}</p>;
    }

    if (!user) {
        return <p className="p-6">Profile loading...</p>;
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
            <h1 className="text-2xl font-bold mb-4">My Profile</h1>

            <p className="mb-2">
                <strong>Username:</strong> {user.username}
            </p>

            <p>
                <strong>Email:</strong> {user.email}
            </p>
        </div>
    );
}

export default Profile;
