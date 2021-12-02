import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from "../actions/actions";

export const useToken = () => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if(window.__token__ !== 'undefined') {
      dispatch(getToken(window.__token__))
    }
  }, [])

  return [token];
}