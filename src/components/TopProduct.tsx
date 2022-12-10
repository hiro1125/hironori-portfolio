/* eslint-disable jsx-a11y/anchor-is-valid */
import { navData, ProductData } from '../contents';
import '../styles/topProduct.css';

const TopProduct = () => {
  const redirectToMeApp = () => {
    window.open('https://hiro1125.github.io/Me-National-Exam-Preparation-App/');
  };
  return (
    <>
      <div className='title'>
        {navData[3].listName}
        <div className='area'>
          <div className='area skillArea'>
            {ProductData.map((item, key) => {
              return (
                <li className='skillItem' key={key}>
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
      </div>
    </>
  );
};

export default TopProduct;
