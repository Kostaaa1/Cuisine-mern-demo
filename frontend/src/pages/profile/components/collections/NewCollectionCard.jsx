import { Add } from "@material-ui/icons";
import styled from "styled-components";

const NewCollectionCard = ({ onClick }) => {
    return (
        <Card onClick={onClick}>
            <div className="add">
                <Add />
            </div>
            <h3>New Collection</h3>
        </Card>
    );
};

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    font-size: 14px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    h3 {
        margin: -50px auto;

        &:hover {
            text-decoration: underline;
            text-decoration-color: var(--main-color);
            text-underline-offset: 5px;
            text-decoration-thickness: 10%;
        }
    }

    .add {
        width: 120px;
        height: 120px;
        border: 1px solid var(--red-color);
        border-radius: 50%;
        margin: 80px auto;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 2.8rem;
            color: var(--red-color);
        }
    }

    /* .collection__description {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100%;
        padding: 20px 20px 16px 20px;

        span {
            display: flex;
            align-items: center;
            color: #595959;
        }
        p {
            letter-spacing: 1.4px;
            font-size: 12px;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
                text-decoration-color: #ce4620;
                text-underline-offset: 5px;
                text-decoration-thickness: 10%;
            }
        }

        h3 {
            font-size: 18px;
            margin: 12px 0;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
                text-decoration-color: var(--main-color);
                text-underline-offset: 5px;
                text-decoration-thickness: 10%;
            }
        }
    } */
`;

export default NewCollectionCard;
