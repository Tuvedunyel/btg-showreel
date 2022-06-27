import { FC } from 'react';
import moon from '../../img/moon.png';

const NewMembers: FC = () => {
    return (
        <div>
            <section className="moon" title="Arrivée d'Anaïs">
                <img src={ moon } alt="Illustration d'une lune"/>
            </section>
            <section className='title__years'></section>
        </div>
    );
};

export default NewMembers;
