import {CardStyle} from "..styles/CardStyle";

const Card = ({card}) => {
        return (
            <CardStyle>
                <div>
                    <H1>{card.title}</H1>
                    <p>{card.body}</p>
                </div>
            </CardStyle>
        );
};

export default Card;