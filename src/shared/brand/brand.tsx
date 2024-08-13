import { Image } from 'react-bootstrap';
import clsx from 'clsx';
import s from './brand.module.css';

const Brand = () => {
  return (
    <div className="d-flex align-items-center">
      <Image
        src="/eways.png"
        rounded
        className={clsx(s.brand__image, 'me-2')}
      />
      Eways
    </div>
  );
};

export default Brand;
