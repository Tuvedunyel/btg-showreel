import { FC, useState } from 'react';
import FirstYear from "../Components/FirstYear/FirstYear";
import FirstYearDetail from "../Components/FirstYearDetail/FirstYearDetail";

const Historique: FC = (  ) => {
    const [ showDetail, setShowDetail ] = useState( false );

    return (
        <>
            { !showDetail ? <FirstYear setShowDetail={setShowDetail} /> : <FirstYearDetail /> }
        </>
    );
};

export default Historique;
