import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPencil} from '@fortawesome/free-solid-svg-icons';
function Note(props){
    let {nt} = props;
    let date, time;
    function extractDateAndTime(dateStr){
        const objDate = new Date(dateStr);
        date = objDate.toISOString().split('T')[0];
        time = objDate.getHours() + ":" + objDate.getMinutes();
    }
    extractDateAndTime(nt.createdAt)

    return (
        <div className="note">
            <div className="header">
                <h3 className="title" title={nt.title}>{nt.title}</h3>
                <div>
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
            </div>
            <p className="body">{nt.content}</p>
            <div className="footer">
                <FontAwesomeIcon icon={faTrash} className='icon' title='Delete'/>
                <FontAwesomeIcon icon={faPencil} className='icon' title='Edit'/>
            </div>
        </div>
    )
}
export default Note;