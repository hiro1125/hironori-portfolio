/* eslint-disable jsx-a11y/anchor-is-valid */
import { navData, productData } from '../contents';
import '../styles/topProduct.css';

const TopProduct = () => {
  const redirectToMeApp = () => {
    window.open('https://hiro1125.github.io/Me-National-Exam-Preparation-App/');
  };
  return (
    <>
      <div className='area topProductArea'>
        <div className='title'>
          <section id='topProduct'>{navData[3].listName}</section>
          {productData.map((item, key) => {
            return (
              <li className='topProductList' key={key}>
                <img
                  className='ProductImg'
                  src={item.ProductImg}
                  alt={item.ProductName}
                  onClick={redirectToMeApp}
                />
                <p className='ProductName'>{item.ProductName}</p>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopProduct;
