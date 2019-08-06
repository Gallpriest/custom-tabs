import React from 'react';
import * as S from './TabsOverlay.styled';
import Tab from '../../components/Tab';
import { useTabContext } from '../../context/TabProvider';

const TabsOverlay = props => {
    const { tabsNames } = props;
    const { switchTheme } = useTabContext();
    const handleTheme = event => switchTheme(event.target.checked ? 'dark' : 'default');

    const TABS = tabsNames.map((name, ix) => <Tab name={name} number={ix} key={ix} />)

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