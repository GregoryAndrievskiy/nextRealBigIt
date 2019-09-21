import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Header from './Header';

export default function Layout(props) {
    const { children, data } = props;

    return (
        <>
            <Header data={data} />
            {children}
            <a onClick={() => scroll.scrollToTop()}>To the top!</a>
        </>
    )
}
