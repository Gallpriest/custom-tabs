import React from 'react';
import * as S from './TabsOverlay.styled';
import Tab from '../../components/Tab';
import { useTabContext } from '../../context/TabProvider';

const TabsOverlay = () => {
    const { switchTheme, config } = useTabContext();
    const handleTheme = event => switchTheme(event.target.checked ? 'dark' : 'default');

    const TABS = config.map(({ id, name, isActive }) => (
        <Tab 
            id={id}
            isActive={isActive}
            name={name} 
            key={id} 
        />)
    );

    return (
        <S.Overlay>
            Test theme change
            <input type="checkbox" onChange={handleTheme}/>
            <div className="tab-list">
                { TABS }
            </div>
        </S.Overlay>
    )
};

export default TabsOverlay;