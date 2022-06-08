import styled from "styled-components";
import type { FC } from "react";

import { H2 } from "../../components/TypoGraphy";

const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    font-size: 1.6rem;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.colors.font};
`;

type DetailsProps = {
    heading: string;
    items: string[];
};

export const Details: FC<DetailsProps> = ({ heading, items }) => (
    <div>
        <H2 text={heading} />
        <List>
            {items.map((item: string) => (
                <li key={`k__${item}`}>{item}</li>
            ))}
        </List>
    </div>
);
