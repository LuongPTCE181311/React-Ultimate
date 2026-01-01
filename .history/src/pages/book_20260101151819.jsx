import { useEffect, useState } from "react";
// import BookTable from "../components/book/book.table";
import { fetchAllBookAPI } from "../services/apiservice";

const BookPage = () => {
  // const [dataBooks, setDataBook] = useState([]);
  // const [current, setCurrent] = useState[1];
  // const [pageSize, setPageSize] = useState(5);
  // const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log("render  000");
    loadBook();
  }, []);

  const loadBook = async () => {
    const res = await fetchAllBookAPI();
    // if (res.data) {
    //   setDataBook(res.data.result);
    //   setCurrent()
    // }
    console.log("check api book", res);
    
  };
  return (
    // <div style={{ padding: "20px" }}>
    //   {/* <UserForm loadUser={loadUser} /> */}
    //   <BookTable dataBooks={dataBooks} loadBook={loadBook} />
    // </div>
    <></>
  );
};

export default BookPage;
