import ***REMOVED*** getToken, getUserInfo ***REMOVED*** from "@/api/userApi";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** useLocation, useNavigate ***REMOVED*** from "react-router-dom";

const CallBack = () => ***REMOVED***
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const userId = params.get('id');

  const [ userInfoEnabled, setUserInfoEnabled ] = useState(false);
  
  //== 토큰 정보 ==//
  useQuery(
    ['getToken', userId],
    () => getToken(userId ?? undefined),
    ***REMOVED***
      enabled: !!userId,
      onSuccess: () => ***REMOVED***
        setUserInfoEnabled(true);
      ***REMOVED***
    ***REMOVED***
  );

  //== 회원 정보 ==//
  const ***REMOVED*** data: userInfo ***REMOVED*** = useQuery('getUserInfo', getUserInfo, ***REMOVED***
    enabled: userInfoEnabled,
  ***REMOVED***);

  useEffect(() => ***REMOVED***
    if (userInfo?.dateofWedding) ***REMOVED***
      navigate('/');
    ***REMOVED*** else ***REMOVED***
      navigate('/userInfo');
    ***REMOVED***
  ***REMOVED***, [userInfo]);

  return null;
***REMOVED***

export default CallBack;