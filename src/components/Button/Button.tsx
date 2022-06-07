import styled from "styled-components";
import type { FC } from "react";

type ButtonProps = {
    variant: "dark" | "light";
    text: string;
    className?: string;
    onClick: () => void;
};

const ButtonRoot = styled.button<Pick<ButtonProps, "variant">>`
    color: ${({ variant, theme }) =>
        variant === "light" ? theme.colors.black : theme.colors.white};
    background-color: ${({ variant, theme }) =>
        variant === "light" ? theme.colors.white : theme.colors.black};
    border: 2px solid ${({ theme }) => theme.colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 4.4rem;
    text-transform: uppercase;
    cursor: pointer;
    font-weigth: 500;
    font-size: 2.3rem;
    line-leight: 2.5rem;
    transition: 0.3s ease-out;

    &:hover {
        color: ${({ variant, theme }) =>
            variant === "light" ? theme.colors.white : theme.colors.black};
        background-color: ${({ variant, theme }) =>
            variant === "light" ? theme.colors.black : theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.black};
        transition: 0.3s ease-out;
    }
`;

export const Button: FC<ButtonProps> = ({
    text,
    variant,
    className,
    onClick,
}) => (
    <ButtonRoot className={className} variant={variant} onClick={onClick}>
        {text}
    </ButtonRoot>
);
