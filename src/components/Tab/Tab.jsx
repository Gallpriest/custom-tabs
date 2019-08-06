import React from 'react';
import * as S from './Tab.styled';
import { SETTINGS } from '../../consts/';
import { useTabContext } from '../../context/TabProvider';

const Tab = props => {
    const { name, number } = props;
    const { theme, setActive } = useTabContext();
    const handleClick = () => setActive(number);
    const styles = SETTINGS[theme];

    return (
        <S.Tab styles={styles}>
            { name }
        </S.Tab>
    );
};

export default Tab;