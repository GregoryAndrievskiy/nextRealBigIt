import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const BlockWrapper = styled(Element)`
    width: 100%;
    height: 200px;
    background-color: green;
`;

const BlockGrid = styled.div`
    max-width: 960px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
        background-color: blue;
    }
`;

export default function ContentBlock(props) {
    const { children, item: { name } } = props;

    return (
        <BlockWrapper name={name} className="element">
            <BlockGrid>
                <span>{children}</span>
            </BlockGrid>
        </BlockWrapper>
    );
};