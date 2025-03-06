// // src/hooks/usePeopleAPI.ts
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { RandomUserResponse, User } from '@/types/person';

// export function usePeopleAPI() {
//   const [currentUser, setCurrentUser] = useState<User | null>(null);
//   const [userList, setUserList] = useState<User[]>([]);
//   // add error const
//   // and loading const

//   const fetchNewUser = async () => {
//     try {
//       const response = await axios.get<RandomUserResponse>('https://randomuser.me/api/');
//       const data = response.data;
//       if (data.results && data.results.length > 0) {
//         const newUser = data.results[0];
//         setCurrentUser(newUser);
//         setUserList((prev) => [...prev, newUser]);
//       }
//     } catch (error) {
//       console.error('Error fetching user:', error);
//     }
//   };

//   useEffect(() => {
//     fetchNewUser();
//   }, []);

//   return {
//     currentUser,
//     userList,
//     fetchNewUser,
//   };
// }

// src/hooks/usePeopleAPI.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RandomUserResponse, User } from '@/types/person';

export function usePeopleAPI() {
  const [currentUser, setCurrentUserState] = useState<User | null>(null);
  const [userList, setUserList] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchNewUser = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await axios.get<RandomUserResponse>('https://randomuser.me/api/');
      const data = response.data;
      if (data.results && data.results.length > 0) {
        const newUser = data.results[0];
        setCurrentUserState(newUser);
        setUserList((prev) => [...prev, newUser]);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      setError('Failed to fetch user data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const setCurrentUser = (user: User) => {
    setCurrentUserState(user);
  };

  useEffect(() => {
    fetchNewUser();
  }, []);

  return {
    currentUser,
    userList,
    fetchNewUser,
    setCurrentUser,
    error,
    isLoading
  };
}