import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNoteSticky} from '@fortawesome/free-solid-svg-icons';
function Intro(){
    return(
        <div className="intro">
            <div className="container">
                <div>
                    <FontAwesomeIcon icon={faNoteSticky} size='4x' className='noteIcon'/>
                    <h1>Your Notes</h1>
                </div>
                <p>This is the best place to keep your notes in it <span>&#128521;</span></p>
            </div>
        </div>
    )
}
export default Intro;