'use-client'
import { useContext } from 'react';

import navmobile from '../contexts/navmobile';

interface NavContextData {
  click?: boolean;
  handleClick?(): void;
}

function useNavmobile(): NavContextData {
  const context = useContext(navmobile);

  if (!context) {
    throw new Error('useNavmobile must be used within a NavProvider!');
  }

  return context;
}

export default useNavmobile;