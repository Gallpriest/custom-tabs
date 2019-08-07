import React, { useState } from 'react';
import * as S from './Switcher.styled';
import { SETTINGS } from '../../consts/';
import { useTabContext } from '../../context/TabProvider';

const Switcher = props => {
    const { switchTheme, theme } = useTabContext();
    const [toggled, setToggle] = useState(false);
    const handleTheme = event => {
        const { checked } = event.target;
        switchTheme(checked ? 'dark' : 'default');
        setToggle(checked ? true : false);
    };
    const styles = SETTINGS[theme];

    return (
        <S.Switcher 
            styles={styles}
            toggled={toggled}
        >
            <div className="switch"></div>
            <input 
                onChange={handleTheme} 
                defaultValue={toggled} 
                type="checkbox"
            />
        </S.Switcher>

    )
};

export default Switcher;
