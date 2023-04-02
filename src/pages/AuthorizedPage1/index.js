import React from 'react';
import { ROOT } from 'navigation/CONSTANTS';
import { Link } from 'react-router-dom';
import { useAuth } from 'navigation/Auth/ProvideAuth';

export default function AuthorizedPage1() {
  const { user } = useAuth();
  return (
    <div>
      <Link to={ROOT}>Home</Link>
      <h2>Welcome, {user.name}.</h2>
      <div>Authorized Page 1</div>
    </div>
  );
};
