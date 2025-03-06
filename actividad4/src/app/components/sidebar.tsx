// src/components/Sidebar.tsx

'use client';
import React from 'react';
import { User } from '@/types/person';

interface SidebarProps {
  userList: User[];
  onSelectUser: (user: User) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ userList}) => {
  return (
    <div className="w-72 bg-white border-r border-gray-200 p-5 overflow-y-auto shadow-sm h-screen">
      <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
         Generated Users
      </h2>
      
      {userList.length === 0 ? (
        <div className="text-gray-500 text-center py-4">
          No users generated yet
        </div>
      ) : (
        <ul className="space-y-2">
          {userList.map((user, index) => {
            return (
              <li 
                key={user.login.uuid || index} 
                className={`flex items-center p-2 rounded-lg cursor-pointer transition-all
                 `}
              >
                <img
                  src={user.picture.thumbnail}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="rounded-full w-10 h-10 border-2 border-white shadow-sm"
                />
                <div className="ml-3">
                  <span className="font-medium text-gray-800">
                    {user.name.first} {user.name.last}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      

    </div>
  );
};

export default Sidebar;
