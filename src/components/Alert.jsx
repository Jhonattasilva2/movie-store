import styled from 'styled-components'
import { MdDone } from 'react-icons/md'

export default function Alert() {
    return (
        <AlertDiv>
            <Done />
            <Span>Filme adicionado ao carrinho!</Span>
        </AlertDiv>
    )
}

const AlertDiv = styled.div`
    position: fixed;
    right: 5px;
    top: 48px;
    min-width: 400px;
    min-height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.5rem;
    background-color: #f4f2f2;
    animation: appear 0.8s linear;
    z-index: 1;

    @keyframes appear {
        from {
            transform: translateX(400px);
        }

        to {
            transform: translate(0px);
        }
    }

    @media (max-width: 380px) {
        min-width: 290px;
    }
`

const Done = styled(MdDone)`
    font-size: 1.5rem;
    color: #228b22;
`

const Span = styled.span`
    font-weight: bold;
`
