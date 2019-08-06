import styled from 'styled-components';

export const Tab = styled.div`
    cursor: pointer;
    position: relative;
    user-select: none;
    min-height: 1.1875rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    line-height: 1;
    padding: 0.6rem 1rem;
    color: ${({ styles, active }) => active ? styles.hoverColor : styles.color};
    border: 1px solid ${({ styles, active }) => active ? styles.hoverBorder : styles.border};
    background-color: ${({ styles, active }) => active ? styles.hoverBackground : styles.background};
    transition: all 0.1s ease-in-out;

    &:hover {
        color: ${({ styles }) => styles.hoverColor};
        border: 1px solid ${({ styles }) => styles.hoverBorder};
        background-color: ${({ styles }) => styles.hoverBackground};
    }
`
