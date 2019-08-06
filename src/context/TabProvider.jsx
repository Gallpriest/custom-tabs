import React, { createContext, useContext, useState } from 'react';

const TabContext = createContext({
    theme: 'default',
    config: [],
    toggleTab: () => {},
    switchTheme: () => {},
});

export const useTabContext = () => useContext(TabContext);

const TabProvider = props => {
    const { config } = props;
    const [tabs, setTabs] = useState(config);
    const [theme, setTheme] = useState('default');

    const context = {
        theme,
        config,
        toggleTab: (ID) => setTabs(prevState => 
            [].concat(prevState.map(item => {
                item.id === ID ? item.isActive = true : item.isActive = false;
                return item; 
        }))),
        switchTheme: (isSwitched) => setTheme(isSwitched),
    }
    return (<TabContext.Provider value={context}>{ props.children }</TabContext.Provider>)
};

export default TabProvider;
