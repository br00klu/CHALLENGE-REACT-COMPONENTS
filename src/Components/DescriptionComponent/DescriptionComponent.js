import pic from '../../Assets/John-Doe.jpg';
import './DescriptionComponent.css';

function Description () {
    const first='JOHN';
    const last='DOE';
    return (
        <div id='descrp-container'>
            <h1> HELLO, MY NAME IS <span className="rotate text-important">{first} {last}</span>,<br/> AND I MAKE HORRIBLE WEBSITES.</h1>
            <img id='avatar' src={pic} alt='author pic'/>
        
        </div>
    )
}
export default Description;