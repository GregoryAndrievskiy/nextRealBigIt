import React from 'react';
import { Link } from 'react-scroll';

export default function Header(props) {
    const { data } = props;

    return (
        <div>
            {data.map(item => (
                <Link
                    key={item.name}
                    activeClass="active"
                    className={item.name}
                    to={item.name}
                    spy={true}
                    smooth={true}
                    duration={500}

                    style={{
                        margin: '5px',
                    }}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
};
