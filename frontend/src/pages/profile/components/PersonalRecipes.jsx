import styled from "styled-components";
import { SupervisorAccount } from "@material-ui/icons";
import Button from "../../../common/Button";

const ChangeProfile = () => {
    return (
        <Wrapper>
            <h1>Personal Recipes</h1>
            <div className="section__info">
                <h3>Recipes you have created on Culinary.</h3>
                <span>
                    <SupervisorAccount />
                    Other users will see the recipes you've made public.
                </span>
                <div className="line__break"></div>
            </div>
            <div className="recipe__add">
                <h2>You haven't created any recipes yet.</h2>
                <p>To add a recipe click the button bellow</p>
                <Button value={"ADD RECIPE +"} />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 20px;

    .recipe__add {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h2 {
            color: #595959;
        }

        p {
            margin: 20px 0 30px 0;
        }
    }

    h1 {
        font-weight: bold;
        margin-bottom: 30px;
        font-size: 2.4rem;
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

export default ChangeProfile;
