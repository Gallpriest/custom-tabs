import styled from 'styled-components';

export const Overlay = styled.div`
    margin-bottom: 1.5rem;
    max-width: 600px;
    width: 100%;

    .tab-list {
        div:not(:first-child) {
            margin-left: -1px;
        }
    }
`;