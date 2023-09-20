/* eslint-disable jsx-a11y/anchor-is-valid */
import { navData, productData } from '../contents';
import '../styles/topProduct.css';

const TopProduct = () => {
  return (
    <>
      <div className='area topProductArea'>
        <div className='title'>
          <section id='topProduct'>{navData[3].listName}</section>
          <div className='topProductMain'>
            {productData.map((item, key) => {
              return (
                <li className='topProductList' key={key}>
                  <a
                    className='ProductImg'
                    href={item.productLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      className='ProductImg'
                      src={item.productImg}
                      alt={item.productName}
                    />
                  </a>
                  <p className='ProductName'>{item.productName}</p>
                </li>
              );
            })}
            <div className='EmptyBox'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProduct;
