import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncMeRequest } from '../actions/actions';

export const useData = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.me.data);
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    if(token) {
      dispatch(asyncMeRequest())
    }
  }, [token])

  return [data];
}

