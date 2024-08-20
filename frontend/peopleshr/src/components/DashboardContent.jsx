// import React from 'react';
// import './DashboardContent.css'; // Import the new component
// import User1 from '../assets/User1.jpg'; 
// import User2 from '../assets/User2.jpg'; 
// import User3 from '../assets/User3.jpg'; 
// import User4 from '../assets/User4.webp'; 
// import LeaveBalancePieChart from './LeaveBalancePieChart';

// const DashboardContent = () => {
//   // Dummy data for illustration
//   const announcements = [
//     'New company policies have been updated.',
//     'Office will be closed on the upcoming holiday.',
//   ];

//   const events = [
//     'Team Building Workshop - Aug 25, 2024',
//     'Annual Company Meeting - Sept 15, 2024',
//   ];

//   const employeeOfTheMonth = 'Jane Smith';

//   const anniversaries = [
//     'John Doe - 5 years on Aug 20, 2024',
//     'Jane Smith - 3 years on Sept 1, 2024',
//   ];

//   const birthdays = [
//     'Bob Johnson - Aug 22, 2024',
//     'Susan Lee - Aug 30, 2024',
//   ];

//   return (
//     <div className="dashboard-content">
//       {/* Team Section */}
//       <div className="team-section">
//         <h2>Current Team: FASTEN</h2>
//         <div className="team-members">
//           <div className="team-member">
//             <img src={User1} alt="Peoples HR Logo" className="logo" width={150} height={150}/>
//             <p>John Doe</p>
//           </div>
//           <div className="team-member">
//             <img src={User2} alt="Peoples HR Logo" className="logo" width={150} height={150}/>
//             <p>Jane Smith</p>
//           </div>
//           <div className="team-member">
//             <img src={User3} alt="Peoples HR Logo" className="logo" width={150} height={150}/>
//             <p>Nayomi young</p>
//           </div>
//           <div className="team-member">
//             <img src={User4} alt="Peoples HR Logo" className="logo" width={150} height={150}/>
//             <p>Christopher Hendry</p>
//           </div>
//         </div>
//       </div>

//       {/* Middle Section */}
//       <div className="middle-section">
//         <div className="left-column">
//           <div className="widget">
//             <h3>Company Announcements</h3>
//             {announcements.map((announcement, index) => (
//               <p key={index}>{announcement}</p>
//             ))}
//           </div>

//           <div className="widget">
//             <h3>Upcoming Events</h3>
//             {events.map((event, index) => (
//               <p key={index}>{event}</p>
//             ))}
//           </div>

//           <div className="widget">
//             <h3>Employee of the Month</h3>
//             <p>Congratulations to {employeeOfTheMonth} for outstanding performance!</p>
//           </div>
//         </div>

//         <div className="right-column">
//           <div className="widget">
//             <h3>Work Anniversaries</h3>
//             {anniversaries.map((anniversary, index) => (
//               <p key={index}>{anniversary}</p>
//             ))}
//           </div>

//           <div className="widget">
//             <h3>Birthdays</h3>
//             {birthdays.map((birthday, index) => (
//               <p key={index}>{birthday}</p>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section: Leave Balance */}
//       <div className="bottom-section">
//         <h3>Leave Balance</h3>
//         <div className="pie-charts">
//           <div className="pie-chart">
//             <LeaveBalancePieChart />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardContent;

import React from 'react';
import './DashboardContent.css'; // Import the new component
import User1 from '../assets/User1.jpg'; 
import User2 from '../assets/User2.jpg'; 
import User3 from '../assets/User3.jpg'; 
import User4 from '../assets/User4.webp'; 
import LeaveBalancePieChart from './LeaveBalancePieChart';

const DashboardContent = () => {
  // Dummy data for illustration
  const announcements = [
    'New company policies have been updated.',
    'Office will be closed on the upcoming holiday.',
  ];

  const events = [
    'Team Building Workshop - Aug 25, 2024',
    'Annual Company Meeting - Sept 15, 2024',
  ];

  const employeeOfTheMonth = 'Jane Smith';

  const anniversaries = [
    'John Doe - 5 years on Aug 20, 2024',
    'Jane Smith - 3 years on Sept 1, 2024',
  ];

  const birthdays = [
    'Bob Johnson - Aug 22, 2024',
    'Susan Lee - Aug 30, 2024',
  ];

  const leaveData = {
    medicalLeave: 10,
    annualLeave: 15,
    casualLeave: 5,
  };

  return (
    <div className="dashboard-content">
      {/* Team Section */}
      <div className="team-section">
        <h2>Current Team: FASTEN</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={User1} alt="John Doe" className="logo" width={150} height={150}/>
            <p>John Doe</p>
          </div>
          <div className="team-member">
            <img src={User2} alt="Jane Smith" className="logo" width={150} height={150}/>
            <p>Jane Smith</p>
          </div>
          <div className="team-member">
            <img src={User3} alt="Nayomi Young" className="logo" width={150} height={150}/>
            <p>Nayomi Young</p>
          </div>
          <div className="team-member">
            <img src={User4} alt="Christopher Hendry" className="logo" width={150} height={150}/>
            <p>Christopher Hendry</p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="leave-balance-section">
        <h3>Leave Balance Overview</h3>
        <div className="leave-summary">
          <p><strong>Medical Leave:</strong> {leaveData.medicalLeave} days remaining</p>
          <p><strong>Annual Leave:</strong> {leaveData.annualLeave} days remaining</p>
          <p><strong>Casual Leave:</strong> {leaveData.casualLeave} days remaining</p>
        </div>
        <div className="pie-charts">
          <div className="pie-chart">
            <LeaveBalancePieChart data={[leaveData.medicalLeave, leaveData.annualLeave, leaveData.casualLeave]} />
          </div>
        </div>
      </div>


      {/* Bottom Section: Leave Balance */}
      <div className="middle-section">
        <div className="left-column">
          <div className="widget">
            <h3>Company Announcements</h3>
            {announcements.map((announcement, index) => (
              <p key={index}>{announcement}</p>
            ))}
          </div>

          <div className="widget">
            <h3>Upcoming Events</h3>
            {events.map((event, index) => (
              <p key={index}>{event}</p>
            ))}
          </div>

          <div className="widget">
            <h3>Employee of the Month</h3>
            <p>Congratulations to {employeeOfTheMonth} for outstanding performance!</p>
          </div>
        </div>

        <div className="right-column">
          <div className="widget">
            <h3>Work Anniversaries</h3>
            {anniversaries.map((anniversary, index) => (
              <p key={index}>{anniversary}</p>
            ))}
          </div>

          <div className="widget">
            <h3>Birthdays</h3>
            {birthdays.map((birthday, index) => (
              <p key={index}>{birthday}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

