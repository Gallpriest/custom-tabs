import React, { createContext, useContext, useState } from 'react';

const TabContext = createContext({
    theme: 'default',
    active: 1,
    tabQuantity: null,
    toggleTab: () => {},
    switchTheme: () => {},
});

export const useTabContext = () => useContext(TabContext);

const TabProvider = props => {
    const { tabQuantity } = props;
    const [active, setActive] = useState(1);
    const [theme, setTheme] = useState('default');

    const context = {
        theme,
        active,
        tabQuantity: tabQuantity ? tabQuantity : 3,
        toggleTab: (isActive) => setActive(isActive),
        switchTheme: (isSwitched) => setTheme(isSwitched),
    }
    return (<TabContext.Provider value={context}>{ props.children }</TabContext.Provider>)
};

export default TabProvider;
