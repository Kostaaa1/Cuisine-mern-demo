import styled from "styled-components";
import { Lock } from "@material-ui/icons";
import Button from "../../../common/Button";

const ChangeProfile = () => {
    return (
        <Wrapper>
            <h1>Change Password</h1>
            <div className="section__info">
                <h3>
                    The information on this page will be displayed on your
                    public profile, which is visible to other users.
                </h3>
                <span>
                    <Lock />
                    The information on this page will be displayed publicly and
                    will be visible to others
                </span>
                <div className="line__break"></div>
            </div>
            <Button value={"RESET PASSWORD"} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 20px;

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
