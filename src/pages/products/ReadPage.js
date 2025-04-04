import React from 'react';
import ReadComponent from "../../components/products/ReadComponent";
import {useParams} from "react-router-dom";

function ReadPage(props) {

    const {productId} = useParams()

    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Products Read Page
            </div>

            <ReadComponent productId={productId}></ReadComponent>

        </div>
    );
}

export default ReadPage;