import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';


type PropsType = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageLimit: number;
  totalPages: number | '';
  lastPage: number;
}

const Pagination = ({page, setPage, pageLimit, totalPages, lastPage}: PropsType) => {
  const category = useSelector((state: RootState) => state.foods.category)
  
  const { pageId } = useParams()
  const [currentPageArr, setCurrentPageArr] = useState<number[]>([])
  const [totalPageArr, setTotalPageArr] = useState<number[][]>([])

  const slicePage = (totalPages: number, pageLimit: number) => {
    const totalPageArr = Array(totalPages)
      .fill(0)
      .map((_, i) => i)
    const slicedPageArr = Array(Math.ceil(totalPages / pageLimit))
      .fill(0)
      .map(() => totalPageArr.splice(0, pageLimit))
    return slicedPageArr
  }

  useEffect(() => {
    if (typeof totalPages === 'number') {
      const slicedPageArr = slicePage(totalPages, pageLimit)
      setTotalPageArr(slicedPageArr)
      setCurrentPageArr(slicedPageArr[0])
    }
  }, [totalPages])

  useEffect(() => {
    if (page % pageLimit > 0 && page % pageLimit < pageLimit) {
      setCurrentPageArr(totalPageArr[Math.floor(page / pageLimit)])
    }
    if (page % pageLimit === 0) {
      setCurrentPageArr(totalPageArr[Math.floor(page / pageLimit) - 1])
    }
  }, [page, currentPageArr, totalPageArr])
  
  return (
    <div className="pagination">
      <Link to={`/explore/${category}/${page - 1}`}>
        <button
          className="btn btn-circle"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >&lt;
        </button>
      </Link>

      <div className="btn-container">
        {
          currentPageArr?.map(item => 
            <Link
              to={`/explore/${ category }/${ item + 1 }`}
              key={ item + 1 }
              className={ Number(pageId) === (item + 1) ? "btn btn-clicked" : "btn" }
              onClick={ () => { setPage(item + 1) } }
              area-current={ page === item + 1 ? "page" : undefined }
            >{ item + 1 }
            </Link>
          )
        }
      </div>

      <Link to={`/explore/${category}/${page + 1}`}>
        <button
          className="btn btn-circle"
          onClick={() => setPage(page + 1)}
          disabled={page === lastPage}
        >&gt;
        </button>
      </Link>
    </div>
  )
}

export default Pagination