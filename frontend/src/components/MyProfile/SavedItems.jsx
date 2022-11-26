import { Lock } from "@material-ui/icons";
import styled from "styled-components";

const SavedItems = () => {
    return (
        <Wrapper>
            <div className="savedItems">
                <div className="public__section">
                    <h1>Public Profile Settings</h1>
                    <input
                        type="submit"
                        value={"NEW COLLECTION +"}
                        className={`btn__save`}
                    />
                </div>
                <div className="section__info">
                    <h3>Create collections to organize your saved items</h3>
                    <span>
                        <Lock />
                        Others can see your saved items and any collection you
                        make public.
                    </span>
                    <div className="line__break"></div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.form`
    width: 100%;
    padding: 20px;

    .public__section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        h1 {
            font-weight: bold;
            font-size: 2.4rem;
        }

        .btn__save {
            padding: 20px 35px;
            font-weight: bold;
            color: white;
            cursor: pointer;
            display: block;
            border: none;
            border-radius: 5px;
            letter-spacing: 1.2px;
            background-color: #ce4620;
        }
    }

    .section__info {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;

        h3 {
            font-size: 18px;
            font-weight: 400;
            line-height: 25px;
            margin-bottom: 14px;
        }

        span {
            font-weight: 200;
            display: flex;
            align-items: center;
            font-size: 14px;

            svg {
                margin-right: 10px;
            }
        }
    }

    .line__break {
        width: 100%;
        height: 1px;
        margin: 40px 0;
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

export default SavedItems;
