import React from 'react';
import * as S from './App.styled';
import { TAB_NAMES } from './Mock';
import TabProvider from '../../context/TabProvider';
import TabsOverlay from '../TabsOverlay';

const App = () => {
  return (
    <S.App>
      <TabProvider>
        <TabsOverlay 
          tabsNames={TAB_NAMES} 
        />
      </TabProvider>
    </S.App>
  );
};
export default App;
