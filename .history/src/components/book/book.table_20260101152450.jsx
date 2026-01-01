const BookTable = (props) => {
  // const [dataBooks, setDataBook] = useState([]);
  const [current] = useState[1];
  const [pageSize] = useState(5);
  // const [total, setTotal] = useState(0);
  useEffect(() => {
    loadBook();
  }, [current, pageSize]);

  const loadBook = async () => {
    const res = await fetchAllBookAPI(1, 5);
    // if (res.data) {
    //   setDataBook(res.data.result);
    //   setCurrent()
    // }
    console.log("check api book", res);
  };
  

  return <></>;
};

export default BookTable;
