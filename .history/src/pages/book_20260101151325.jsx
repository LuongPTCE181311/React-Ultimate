import { useEffect, useState } from "react";
import BookTable from "../components/book/book.table";
import { fetchAllBookAPI } from "../services/apiservice";

const BookPage = () => {
  const [dataBooks, setDataBook] = useState([]);

  useEffect(() => {
    console.log("render  000");
    loadBook();
  }, []);

  const loadBook = async () => {
    const res = await fetchAllBookAPI();
    if (res.data) {
      setDataBook(res.data);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      {/* <UserForm loadUser={loadUser} /> */}
      <BookTable dataBooks={dataBooks} loadBook={loadBook} />
    </div>
  );
};

export default BookPage;
