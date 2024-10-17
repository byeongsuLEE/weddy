import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";

const Main = () => ***REMOVED***
  const navigate = useNavigate();

  const goTest = () => ***REMOVED***
    navigate("/test");
  ***REMOVED***

  return (
    <>
    <div>Main Page</div>
    <button onClick=***REMOVED***goTest***REMOVED***>test 이동</button>
    </>
  )
***REMOVED***
export default Main;