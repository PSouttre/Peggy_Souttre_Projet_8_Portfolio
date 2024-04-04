import './Project.scss'
import MainLayout from "../../layout/MainLayout"


import { useData } from '../../provider/DataProvider'

import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'

const Project = () => {

const {data} = useData();

return (
    <MainLayout>

<div className='container'>
{!data
    ? <p>Loading...</p> 
    : data.map((logement) => {
        return (
            <Link className="container__link" to={`/housing/${logement.id}`} key={logement.id}>
                <Card logement={logement} />
            </Link>
        )
    })
}
</div>
</MainLayout>
)
}

export default Project; 