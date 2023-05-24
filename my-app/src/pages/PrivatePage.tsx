import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

const PrivatePage: React.FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    // Redirecionar para página de login
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Página Privada</h1>
      <p>Bem-vindo, {user.email}!</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default PrivatePage;
