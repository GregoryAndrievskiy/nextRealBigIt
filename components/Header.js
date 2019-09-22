import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import NavButton from './NavButton';

const Wrapper = styled.div`
    height: 45px;
    display: flex;
    justify-content: center;
    background-color: rgb(37, 37, 38);
`;

export default function Header(props) {
    const { data } = props;

    const [active, setActive] = React.useState(null);

    return (
        <Wrapper>
            {data.map(item => (
                <Link
                    key={item.name}
                    activeClass="active"
                    className={item.name}
                    to={item.name}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={name => setActive(name)}

                    style={{
                        margin: '5px',
                    }}
                >
                    <NavButton isActive={active === item.name}>
                        {item.name}
                    </NavButton>
                </Link>
            ))}
        </Wrapper>
    );
};
