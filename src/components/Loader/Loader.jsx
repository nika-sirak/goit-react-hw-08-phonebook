import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css';

function Loader() {
  return (
    <div className={s.loaderContainer}>
      <ThreeDots color="#2f65a0" heigth="50" width="50" />
    </div>
  );
}

export default Loader;
