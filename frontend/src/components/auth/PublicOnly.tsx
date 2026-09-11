import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';

export interface PublicOnlyProps {
  redirectTo?: string;
  children?: React.ReactNode;
}

export function PublicOnly({ redirectTo, children }: PublicOnlyProps) {
  const { status } = useAuthStore();
  const navigate = useNavigate();
  const isAuthenticated = status === 'authenticated';
  const isLoading = status === 'loading';

  // Handle redirect when authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate(redirectTo || '/dashboard', { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, redirectTo]);

  // While loading, show children (or nothing)
  if (isLoading) {
    return children || null;
  }

  // If authenticated, show nothing (redirect happens via useEffect)
  if (isAuthenticated) {
    return null;
  }

  // If not authenticated, show children
  return children ?? null;
}