import React, { createContext, useContext, useState } from 'react';

const TabContext = createContext({
    theme: 'default',
    config: [],
    activeTabId: null,
    activeContent: {},
    toggleTab: () => {},
    switchTheme: () => {},
});

export const useTabContext = () => useContext(TabContext);

const getActiveTab = (tabs) => tabs.find(tab => tab.isActive).id;

const TabProvider = props => {
    const { config } = props;
    const [configuration, setConfig] = useState(config);
    const [activeContent, setActiveContent] = useState(() => config.find(item => item.isActive).content);
    const [theme, setTheme] = useState('default');

    const context = {
        theme,
        config,
        activeContent,
        activeTabId: getActiveTab(configuration),
        toggleTab: (ID) => setConfig(prevState => {
            const updatedTabsState = prevState.map(item => {
                item.id === ID ? item.isActive = true : item.isActive = false;
                return item; 
            });
            setActiveContent(updatedTabsState.find(item => item.isActive).content);
            return updatedTabsState;
        }),
        switchTheme: (isSwitched) => setTheme(isSwitched),
    }
    return (<TabContext.Provider value={context}>{ props.children }</TabContext.Provider>)
};

export default TabProvider;
