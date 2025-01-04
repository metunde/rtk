import { useGetProductByIdQuery } from "../app/service/dummyData";

const GetOneProduct =()=> {

    const res = useGetProductByIdQuery(3);
    console.log(res)

}

export default GetOneProduct