import './courses.css'
import background from '../../Assets/images/engineers.jpg'
import { useEffect, useState } from "react"
import axios from "axios"

const baseURL = "https://inspirante.herokuapp.com/api/trainings/"
function Courses() {

    const [courses, setCourse] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        axios.get(baseURL).then((response) => {
            setCourse(response.data)
        })
        setLoading(false);
    }, [])

    return (
        <section className="courses" >
            {loading ? <div>loading</div> :
                <div className="grid-wrapper">
                    {courses.map((course) =>
                        <Card title={course.course_name} price={course.price} image={course.thumbnail_url} />
                    )}
                </div>
            }
        </section>
    )
}

function Card({ image, title, price }) {
    return <div className="grid-card">
        <div className="industry-status">
            <a>INDUSTRY</a>
            <a>STATUS</a>
        </div>
        <div className="course-card" >
            <img src={image} />
            <div>
                <div className="course-details">
                    <p>{title}</p>
                    <a className="btn btn-gray">PRE-BOOK</a>
                </div>
                <h4>PRICE:{price}</h4>
            </div>
        </div>
    </div>

}

export default Courses
