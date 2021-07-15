import img1 from '../../Assets/proj1.jpg';
import img2 from '../../Assets/proj2.jpg';
import img3 from '../../Assets/proj3.jpg';
import img4 from '../../Assets/proj4.jpg';
import '../ProjectsComponent/ProjectsComponent.css';

function Projects (){
    return (
        <div  id="projects">
            <h2 className="text-important">Projects</h2>
            <div className="projects-container">

                {/*Project Card*/}
                <div className="project-card">
                    <img src={img1} alt="project" />
                    <h3>Project 1</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                    aliquam.
                    </p>
                    <p><a href="github1">Github Link</a></p>
                </div>
                {/*Project Card */}
                <div className="project-card">
                    <img src={img2} alt="project" />
                    <h3>Project 2</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                        aliquam.
                    </p>
                    <p><a href="github2">Github Link</a></p>
                </div>
                {/*Project Card */}
                <div className="project-card">
                    <img src={img3} alt="project" />
                    <h3>Project 3</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                        aliquam.
                    </p>
                    <p><a href="github3">Github Link</a></p>
                </div>
                {/*Project Card */}
                <div className="project-card">
                    <img src={img4} alt="project" />
                    <h3>Project 4</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                        aliquam.
                    </p>
                    <p><a href="github4">Github Link</a></p>
                </div>
            </div>
        </div>
        
    )
}
export default Projects;