import React from 'react';
import * as S from './Tab.styled';
import { SETTINGS } from '../../consts/';
import { useTabContext } from '../../context/TabProvider';

const Tab = React.memo((props) => {
    const { name, id, isActive } = props;
    const { theme, toggleTab } = useTabContext();
    const handleClick = () => toggleTab(id);
    const styles = SETTINGS[theme];

    return (
        <S.Tab
            id={id}
            active={isActive}
            styles={styles} 
            onClick={handleClick}
        >
            { name }
        </S.Tab>
    );
});

export default Tab;