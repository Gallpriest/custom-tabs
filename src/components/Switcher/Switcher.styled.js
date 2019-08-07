import styled from 'styled-components';

export const Switcher = styled.label`
    display: inline-block;
    position: relative;
    cursor: pointer;
    user-select: none;

    input {
        position: absolute;
        appearance: none;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .switch {
        background-color: ${({ styles }) => styles.border};
        position: relative;
        width: 40px;
        height: 20px;
        border-radius: 50px;
        border: 1px solid ${({ styles }) => styles.border};
        transition: all 0.1s ease-in-out;

        &:before {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px
            height: 16px;
            width: 16px;
            border-radius: 50px;
            background-color: ${({ styles, toggled }) => toggled ? styles.hoverBackground : styles.background};
            transition: all 0.2s ease-in-out;
            transform: ${({ toggled }) => toggled ? 'translateX(20px)' : 'translateX(0px)'};

            &:hover {
                opacity: 0.8;
            }
        }
    }
`;