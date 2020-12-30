import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(localStorage.getItem('data'));
  //   const user = JSON.parse('user');
  //   console.log(user);

  return (
    <>
      <h1>Dashboard</h1>
      <h2>{`Welcome, ${user.name}`}</h2>
      <h3>Rated Movies</h3>
      <hr />
      <h3>Commented Movies</h3>
    </>
  );
};

export default Dashboard;
