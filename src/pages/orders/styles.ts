import { styled } from "styled-components";

export const WrapperSearch = styled.div`
    position: relative;
    display: flex;
    margin-top: 2.5rem;
    
    input[type=text]{
        width: 100%;
    }

    svg{
        position: absolute;
        right: 1rem;
        top: .4rem;
    }
`;


export const WrapperList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 2.5rem;
    max-height: 200px;

    .box-image{
        border-radius: 24px;
        max-height: 200px;
        &::before{
            position: absolute;
            content: '';
            height: 100%;
            width: 100%;
            background: linear-gradient(152deg, #511E0E 18%, rgba(54, 54, 54, 0.00) 100%);
            border-radius: 24px;
        }
    }

    .infos{
        display: flex;
        flex-direction: column;
        width: 100%;
        position: absolute;
        margin-inline: auto;
        text-align: center;
        gap: 3rem;

        .date-value{
            display: flex;
            justify-content: space-between;
        }
    }
`