import './courses.css'
import { useEffect, useState } from "react"
import axios from "axios"

const baseURL = "https://inspirante.herokuapp.com/api/trainings/"
function Courses() {

    const [courses, setCourse] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const Fetch = async () => {
            await axios.get(baseURL).then((response) => {
                setCourse(response.data)
            })
            setLoading(false);
        }
        Fetch();

    }, [])

    return (
        <section className="courses" >


            {loading ? <>
                <div className="Loading"><h1 >Loading</h1>
                    <div class="spinner">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
                </div>
                <div className="grid-wrapper">
                    {[1, 1, 1].map(() => <div class="card is-loading grid-card">
                        <div class="loading-image"></div>
                        <div class="content">
                            <h2 className="load-h2"></h2>
                            <p className="load-p"></p>
                        </div>
                    </div>)}
                </div>
            </> :
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
