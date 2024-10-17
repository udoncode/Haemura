import { useNavigate } from 'react-router'
import { FaRegSadTear } from "react-icons/fa"


const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="notFound">
        <h1>4<FaRegSadTear />4</h1>
        <h3>없는 페이지입니다&nbsp;<span>:(</span></h3>
        <button onClick={ () => navigate('/')}>돌아가기</button>
      </div>
    </div>
  )
}

export default NotFound