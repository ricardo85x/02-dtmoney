import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransitionModal: () =>  void;
}

export function Header( {onOpenNewTransitionModal} : HeaderProps ) {

 

    return (
        <Container>
            <Content>

                <img src={logoImg} alt="" className="src"/>
                <button type="button" onClick={onOpenNewTransitionModal}>
                    New Transaction
                </button>

           

            </Content>
            
        </Container>
    )
}