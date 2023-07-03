import { useContext } from 'react';
import ContextSearch from '../context/context-search';

const useSearch = () => {
  return useContext(ContextSearch);
};
export default useSearch;
