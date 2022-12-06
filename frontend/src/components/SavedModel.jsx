import { Check, Close } from "@material-ui/icons";
import styled from "styled-components";

const SavedModel = () => {
    return (
        <Model>
            <Section>
                <div className="close">
                    <Close />
                </div>
                <div className="saved">
                    <Check />
                    <h2>Saved!</h2>
                    <p>View All Saved Items</p>
                </div>
            </Section>
        </Model>
    );
};

const Model = styled.div`
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.03);
    z-index: 10000;
`;

const Section = styled.div`
    display: flex;
    justify-content: end;

    .close {
        position: absolute;
        svg {
            cursor: pointer;
            color: grey;
            font-size: 2.2rem;
        }
    }

    .saved {
        width: 350px;
        height: 620px;
        background-color: white;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        svg {
            background-color: green;
            border-radius: 50%;
            color: white;
            font-size: 2rem;
            transform: scale(2);
        }

        h2 {
            color: black;
            margin: 40px 20px 20px 20px;
        }
    }
`;

export default SavedModel;
