import React from 'react';
import * as S from './App.styled';
import { TAB_CONFIG } from './Mock';
import TabProvider from '../../context/TabProvider';
import TabsOverlay from '../TabsOverlay';

/**
 * 
 */
const App = () => {
  return (
    <S.App>
      <TabProvider config={TAB_CONFIG} >
        <TabsOverlay />
      </TabProvider>
    </S.App>
  );
};
export default App;
