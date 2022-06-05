import { Link} from 'react-router-dom'
import Card from "../components/shared/Card"
function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p> This is a React App for giving Feedback  for a product or services</p>
            <p> Version: 1.0.1</p>
            <p>
                <Link to='/'> Back To Home </Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage