import { Lock } from "@material-ui/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../../common/Button";
import SectionInfo from "../../../../common/SectionInfo";
import FavoriteCollection from "./FavoriteCollection";
import NewCollectionModal from "./NewCollectionModal";
import NewCollectionCard from "./NewCollectionCard";

const SavedItems = () => {
    const [showCollectionModal, setShowCollectionModal] = useState(false);

    return (
        <Collections>
            <div className="saved__items">
                <div className="public__section">
                    <h1>Saved Items & Collections</h1>
                    <Button
                        onClick={() => setShowCollectionModal(true)}
                        value={"NEW COLLECTION +"}
                    />
                </div>
                <SectionInfo
                    value={"Create collections to organize your saved items"}
                    icon={<Lock />}
                    text={
                        "Others can see your saved items and any collection you make public."
                    }
                />
                <div className="line__break"></div>
                <div>
                    <h3>Collections</h3>
                    <div className="collection__control">
                        <FavoriteCollection />
                        <NewCollectionCard
                            onClick={() => setShowCollectionModal(true)}
                        />
                    </div>
                </div>
            </div>
            {showCollectionModal && (
                <NewCollectionModal
                    showModal={() =>
                        setShowCollectionModal(!showCollectionModal)
                    }
                />
            )}
        </Collections>
    );
};

const Collections = styled.div`
    width: 100%;
    padding: 20px;

    .saved__items {
        h3 {
            margin-bottom: 20px;
        }

        .collection__control {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            row-gap: 25px;
        }
    }

    .public__section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        h1 {
            font-weight: bold;
            font-size: 2.4rem;
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
