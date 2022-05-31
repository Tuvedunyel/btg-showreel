import { FC, useState } from 'react';
import FirstYear from "../Components/FirstYear/FirstYear";

const Historique: FC = (  ) => {
    const [ showDetail, setShowDetail ] = useState( false );

    return (
        <>
            { !showDetail ? <FirstYear setShowDetail={setShowDetail} /> : <h1>Show Detail</h1> }
        </>
    );
};

export default Historique;
