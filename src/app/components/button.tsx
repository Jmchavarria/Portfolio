"use client";

import { ReactElement } from "react";

interface ButtonProps {
    icon?: ReactElement;
    text?: string;
    className: string;
    href?: string;
    target?: string
    onclick?: (() => Promise<void>) | undefined
    title?: string
}

export const Button: React.FC<ButtonProps> = ({
    icon,
    text,
    className,
    href,
    target,
    onclick,
    title,

}) => {

    return (
        <a
            title={title}
            onClick={onclick}
            target={target}
            href={href}
            className={`
        ${icon && text ? "cursor-pointer flex gap-2 items-center sm:justify-start" : ""}
        ${className}
      `}
        >
            {icon}
            {text}
        </a>
    );
};
