import {FooterStyle} from "..styles/FooterStyle";
import {Container} from "..styles/Container";

export default function Footer() {
    return (
        <FooterStyle>
            <Container>
                <H1>ECHO</H1>
                <p>Give us a yell!</p>
                <div>
                    <ul>
                        <li>Link 1</li>
                    </ul>
                    <ul>
                        <li>lLink 2</li>
                    </ul>
                    <ul>
                        <li>Link 3</li>
                    </ul>
                </div>
            </Container>
        </FooterStyle>
    );
};