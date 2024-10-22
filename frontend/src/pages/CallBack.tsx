import ***REMOVED*** useEffect ***REMOVED*** from "react";
import ***REMOVED*** useLocation, useNavigate ***REMOVED*** from "react-router-dom";
import ***REMOVED*** getToken ***REMOVED*** from "../apis/userApi";

const CallBack = () => ***REMOVED***
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const userId = params.get('userId');

  useEffect(() => ***REMOVED***
    const updateToken = async () => ***REMOVED***
      if (userId != undefined) ***REMOVED***
        await getToken(userId);
        navigate('/');
      ***REMOVED***;
    ***REMOVED***;
    updateToken();
  ***REMOVED***, [userId]);

  return null;
***REMOVED***

export default CallBack;