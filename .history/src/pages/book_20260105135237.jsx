import { useEffect, useState } from "react";
import BookTable from "../components/book/book.table";
import { fetchAllBookAPI } from "../services/apiservice";
import BookModal from "../components/book/create.book.modal";

const BookPage = () => {
  const [dataBooks, setDataBook] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadBook();
  }, [current, pageSize]);

  const loadBook = async () => {
    const res = await fetchAllBookAPI(current, pageSize);
    if (res.data) {
      setDataBook(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
    console.log("check api book", res);
  };
  return (
    <div style={{ padding: "20px" }}>
      <BookModal loadBook={loadBook}/>
      {/* <BookTable
        current={current}
        pageSize={pageSize}
        dataBooks={dataBooks}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
        loadBook={loadBook}
      /> */}
      <BookTable
        current={current}
        pageSize={pageSize}
        dataBooks={dataBooks}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
        loadBook={loadBook}
      />
    </div>
  );
};

export default BookPage;
