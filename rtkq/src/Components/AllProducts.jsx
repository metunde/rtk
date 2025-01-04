import { useGetAllProductQuery } from '../app/service/dummyData'

const AllProducts = () => {
const {data} = useGetAllProductQuery();
console.log(data)

  return (

    <>{data?.products.map((p) =>(
      <h1 key={p.id}>
        {p.title}
      </h1>
     ) )

    }
   
    </>
  )
}

export default AllProducts