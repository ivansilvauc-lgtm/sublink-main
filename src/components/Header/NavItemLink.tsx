"use client"

import { memo } from "react"

interface INavItemLink {
    onClick: ()=>void,
    label: string,
    state: boolean,
    classNames?: string
}
const NavItemLink = memo(({onClick, label, state = false, classNames = ""} : INavItemLink) => {
    return (
        <li onClick={() => onClick()}>
            <p className={`antialiased text-gray-900 hover:text-gray-600 cursor-pointer ${classNames} ${state ? "text-primary hover:text-primary" : ""}`}>{label}</p>
        </li>
    )
}, (prevProps, nextProps) => (prevProps.state === nextProps.state));

NavItemLink.displayName = 'NavItemLink';

export default NavItemLink;