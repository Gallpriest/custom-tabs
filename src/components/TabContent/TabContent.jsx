import React from 'react';
import * as S from './TabContent.styled';

const TabContent = props => {
    const { content } = props;
    return (
        <S.Content>
            { content }
        </S.Content>
    )
};

export default TabContent;
