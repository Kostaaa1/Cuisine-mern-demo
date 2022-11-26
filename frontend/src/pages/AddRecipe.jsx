import styled from "styled-components";

const AddRecipe = () => {
    return (
        <Wrapper>
            <form className="form" action="">
                <div>
                    <label>Add recipe name:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Add recipe name:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Add recipe name:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Add recipe name:</label>
                    <input type="text" />
                </div>
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 60vh;
    margin-top: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    .form {
        display: flex;
    }
`;

export default AddRecipe;
