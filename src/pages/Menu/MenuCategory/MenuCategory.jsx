
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className='grid grid-cols-2 gap-2 p-5'>
        {
          items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
        }

      </div>

      <div className='text-center'>
        <Link className='d-block' to={`/order/${title}`}> <button className='btn bg-slate-500 b-0 w-[200px] border-b-4 my-2 btn-outline'>Order now </button></Link>
      </div>

    </div>
  );
};

export default MenuCategory;