import BookTable from "../components/book/book.table";

const BookPage = () => {
  const [dataBooks, setDataBook] = useState([]);

  useEffect(() => {
    console.log("render  000");
    loadUBook();
  }, []);

  const loadBook = async () => {
    const res = await fetchAllBookAPI();
    setDataBook(res.data);
  };
  return (
    <div style={{ padding: "20px" }}>
      {/* <UserForm loadUser={loadUser} /> */}
      <BookTable dataBooks={dataBooks} loadBook={loadBook} />
    </div>
  );
};

export default BookPage;
