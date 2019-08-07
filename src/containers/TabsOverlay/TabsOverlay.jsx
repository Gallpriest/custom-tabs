import React from 'react';
import * as S from './TabsOverlay.styled';
import Tab from '../../components/Tab';
import TabContent from '../../components/TabContent';
import Switcher from '../../components/Switcher';
import { useTabContext } from '../../context/TabProvider';

const TabsOverlay = () => {
    const { config, activeContent } = useTabContext();
    const TABS = config.map(({ id, name, isActive }) => (
        <Tab 
            id={id}
            isActive={isActive}
            name={name} 
            key={id} 
        />)
    );
    const CONTENT = <TabContent content={activeContent} />

    return (
        <S.Overlay>
            <Switcher />
            <div className="tab-list">
                { TABS }
            </div>
            <div className="tab-content">
                { CONTENT }
            </div>
        </S.Overlay>
    )
};

export default TabsOverlay;