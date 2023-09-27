import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import Button from "./Button"
import Notes from './Notes';
function Content(){
    return(
        <div className="content">
            <div className="container">
                <Button>
                    <FontAwesomeIcon icon={faPen} className='penIcon'/>
                    New Note
                </Button>
                <Notes/>
            </div>
        </div>
    )
}
export default Content;