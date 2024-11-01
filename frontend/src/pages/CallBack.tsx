import ***REMOVED*** getToken ***REMOVED*** from "@/api/userApi";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** useLocation, useNavigate ***REMOVED*** from "react-router-dom";

const CallBack = () => ***REMOVED***
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const userId = params.get('id');

  //== 토큰 정보 ==//
  useQuery(
    ['getToken', userId],
    () => getToken(userId),
    ***REMOVED***
      enabled: !!userId,
      onSuccess: () => ***REMOVED***
        navigate('/');
      ***REMOVED***,
    ***REMOVED***
  );

  return null;
***REMOVED***

export default CallBack;