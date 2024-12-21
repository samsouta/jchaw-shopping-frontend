import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const [hideNav, setHideNav] = useState<boolean>(false);
  const location = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    if (location.pathname === `/setting` || location.pathname === `/login` || location.pathname === `/resgiter` || location.pathname === `/checkout` || location.pathname === `/`) {
      nav('/home')
       setHideNav(false)
    } else {
      setHideNav(true)
    }
  }, [location])

  return (
    <div>
      {
        hideNav && children
      }
    </div>
  )
};

export default RouteGuard;
