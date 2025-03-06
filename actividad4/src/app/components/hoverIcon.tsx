// // src/components/hoverIcon.tsx

// 'use client';
// import React from 'react';

// interface HoverIconProps {
//   label: string;               // e.g. "email", "location", etc.
//   icon: React.ReactNode;       // Some icon (FontAwesome, etc.) or text
//   onHover: (label: string) => void;
// }

// const HoverIcon: React.FC<HoverIconProps> = ({ label, icon, onHover }) => {
//   return (
//     <div
//       className="cursor-pointer p-2"
//       onMouseEnter={() => onHover(label)}
//     >
//       {icon}
//     </div>
//   );
// };

// export default HoverIcon;

// src/components/HoverIcon.tsx
'use client';
import React from 'react';

interface HoverIconProps {
  label: string;
  icon: React.ReactNode;
  onHover: (label: string) => void;
  active: boolean; // Added active state to highlight the current selection
}

const HoverIcon: React.FC<HoverIconProps> = ({ label, icon, onHover, active }) => {
  return (
    <div
      className={`cursor-pointer p-3 rounded-full transition-all duration-200 
      ${active ? 'bg-indigo-100 text-indigo-600 scale-110' : 'hover:bg-gray-100'}`}
      onMouseEnter={() => onHover(label)}
      onClick={() => onHover(label)} // Add click for mobile users
      aria-label={`Show ${label} information`}
    >
      <div className="text-xl">{icon}</div>
    </div>
  );
};

export default HoverIcon;