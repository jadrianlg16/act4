// // src/app/page.tsx

// 'use client'

// import React from 'react';
// import { usePeopleAPI } from '../hooks/usePeopleApi';
// import Sidebar from './components/sidebar';
// import Card from './components/card';

// const Page: React.FC = () => {
//   const { currentUser, userList, fetchNewUser } = usePeopleAPI();

//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <Sidebar userList={userList} />

//       {/* Main Content Area */}
//       <div className="flex-1 flex items-center justify-center p-4">
//         {currentUser ? (
//           <Card user={currentUser} onGenerateUser={fetchNewUser} />
//         ) : (
//           <p>Loading user...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Page;


// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import { usePeopleAPI } from '../hooks/usePeopleApi';
import Sidebar from './components/sidebar';
import Card from './components/card';

const Page: React.FC = () => {
  const { currentUser, userList, fetchNewUser, setCurrentUser } = usePeopleAPI();
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">

      {/* Sidebar (responsive) */}
      <div className={`
        md:relative fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out 
        ${showMobileSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <Sidebar 
          userList={userList} 
          onSelectUser={setCurrentUser}
        />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10">
        {currentUser ? (
          <Card user={currentUser} onGenerateUser={fetchNewUser} />
        ) : (
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <div className="animate-spin h-10 w-10 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Loading user profile...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
