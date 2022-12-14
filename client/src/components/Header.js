import React from 'react'

/* assets */
import { HeaderContainer, HeaderWrap } from '../assets/HeaderStyle.js';

function Header() {
    return (
        <HeaderContainer>
            <HeaderWrap>
                <a href='/'>
                    <span>BLOG</span>
                </a>
            </HeaderWrap>
        </HeaderContainer>
    )
}

export default Header