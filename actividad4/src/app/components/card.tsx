// src/components/Card.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { User } from '@/types/person';
import HoverIcon from './hoverIcon';

interface CardProps {
  user: User;
  onGenerateUser: () => void;
}

const Card: React.FC<CardProps> = ({ user, onGenerateUser }) => {
  const [hoverLabel, setHoverLabel] = useState<string>('name');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Reset to name when user changes
  useEffect(() => {
    setHoverLabel('name');
  }, [user.login.uuid]);

  const getDisplayedInfo = () => {
    switch (hoverLabel) {
      case 'email':
        return user.email;
      case 'phone':
        return user.phone;
      case 'location':
        return `${user.location.street.number} ${user.location.street.name}, ${user.location.city}`;
      case 'username':
        return `@${user.login.username}`;
      case 'age':
        return `${user.dob.age} years old`;
      default:
        return `${user.name.first} ${user.name.last}`;
    }
  };

  const getInfoLabel = () => {
    switch (hoverLabel) {
      case 'email':
        return 'Email Address';
      case 'phone':
        return 'Phone Number';
      case 'location':
        return 'Current Location';
      case 'username':
        return 'Username';
      case 'age':
        return 'Age';
      default:
        return 'Full Name';
    }
  };

  const handleGenerateUser = () => {
    setIsLoading(true);
    onGenerateUser();
    // Simulating loading state
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <div className="max-w-md w-full bg-white border border-gray-200 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-6 transition-all duration-300 hover:shadow-xl">

      <div className="relative">
        <div className="absolute inset-0 rounded-full  "></div>
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="relative rounded-full w-40 h-40 object-cover border-4 border-white shadow-md"
        />
      </div>
      
      <div className="text-center w-full">
        <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">{getInfoLabel()}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1 break-words">
          {getDisplayedInfo()}
        </h2>
      </div>      
      <div className="flex justify-center flex-wrap gap-2">
        <HoverIcon
          label="name"
          icon={<span>👤</span>}
          onHover={setHoverLabel}
          active={hoverLabel === 'name'}
        />
        <HoverIcon
          label="email"
          icon={<span>📧</span>}
          onHover={setHoverLabel}
          active={hoverLabel === 'email'}
        />
        <HoverIcon
          label="phone"
          icon={<span>📞</span>}
          onHover={setHoverLabel}
          active={hoverLabel === 'phone'}
        />
        <HoverIcon
          label="location"
          icon={<span>📍</span>}
          onHover={setHoverLabel}
          active={hoverLabel === 'location'}
        />
        <HoverIcon
          label="username"
          icon={<span>🔑</span>}
          onHover={setHoverLabel}
          active={hoverLabel === 'username'}
        />
        <HoverIcon
          label="age"
          icon={<span>🎂</span>}
          onHover={setHoverLabel}
          active={hoverLabel === 'age'}
        />
      </div>
      
      <button
        className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300
        ${isLoading 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-purple-600 hover:shadow-lg'}`}
        onClick={handleGenerateUser}
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate New User'}
      </button>
      

    </div>
  );
};

export default Card;
