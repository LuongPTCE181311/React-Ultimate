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
      <Booktable dataUsers={dataUsers} loadUser={loadUser} />
    </div>
  );
};

export default BookPage;
