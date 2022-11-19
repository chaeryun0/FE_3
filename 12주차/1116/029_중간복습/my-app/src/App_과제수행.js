import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import shoppingCart from './assets/icon-shopping-cart-white.svg'
import like from './assets/icon-heart.svg'
import likeOn from './assets/icon-heart-on.svg'
// npx create-react-app my-app --template basic-react
// cd my-app
// npm install styled-components styled-reset

const GlobalStyle = createGlobalStyle`
  /* reset코드 + 커스텀reset코드 + 유틸리티코드 */
  /* 한 줄 말줄임, 두 줄 말줄임... */
  ${reset}
  
  span {
    color: red;
    font-size: 12px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
  }
`

const ContainerMain = styled.main`
  display:flex;
  justify-content: center;
  margin-top: 160px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`

const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
`

const ProductName = styled.strong`
  font-size: 18px;
`

const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 24px;
`

const IconShoppingCart = styled.a`
  background: #6327FE url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: sticky;
  top: 60px;
`
const BtnLike = styled.span`
  width: 22px;
  height: 22px;
  border: none;
  background: 
    ${(props) => props.on === true ? 
      url(${like}) : 
      url(${likeOn})
    }
    no-repeat center / contain;
`

const ContainerSpaceBetween = styled.div`
  display:flex;
  justify-content: space-between;
`

// 과제입니다.
// .like-btn.on {
//   background: url(../assets/icon-heart-on.svg) no-repeat center / contain;
// }

async function requests(){
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const data = await response.json()
  return data
}

function ProductList(){
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  if (dataLoadSwitch){ // 데이터 로드가 되서 true면 실행시킴 
    requests().then(productData => {
      setProductListData(productData) // 데이터를 넣어서
      setDataLoadSwitch(false) // false로 변경
    }) // 데이터가 변경이 되었으므로 ProductList() 다시 실행시킴
  } // 다시 실행시켰을 때 dataLoadSwitch는 false이므로 재렌더링을 하지 않고 뒤로 넘어감
  // 다시 렌더링할 일이 없기 때문에 결국 if문은 한번만 실행되고, 다시 실행될 일이 없기 때문에 리소스가 절약됨


  // 무한반복
  // requests().then(productData => setProductListData(productData))
  // console.log(productListData)
  
  // const productListData = requests()
  // console.log(productListData) // 위와 같이 실행하면 promise이다.
  
  // 이제 데이터를 반환해야 하는데 데이터는 productListData에 있음
  return (
    <ContainerProductList>
      {productListData.map(item => 
        <ProductListItem 
          key={item.id} 
          productName={item.productName}
          price={item.price}
          thumbnailImg={item.thumbnailImg}
        />
      )}
    </ContainerProductList>
  )
}

function ProductListItem({productName, price, thumbnailImg}){
  const [clickHeart, setClickHeart] = useState(false);

  const handleToggle = () => {
    setClickHeart(!clickHeart);
  };

  return (
    <ItemProductList>
      <ImgProduct 
        src={"http://test.api.weniv.co.kr/" + thumbnailImg} 
        alt={productName}
      />
      <ContainerSpaceBetween>
        <ProductName>{productName}</ProductName>
        {/* <BtnLike></BtnLike> */}
        <BtnLike on={clickHeart} onClick={handleToggle}></BtnLike>
      </ContainerSpaceBetween>
      <ProductPrice>{price}</ProductPrice>
    </ItemProductList>
  )
}

function ShoppingCart(){
  return <IconShoppingCart href="#"></IconShoppingCart>
}

function App() {
  return (
    <ContainerMain>
      <GlobalStyle/>
      <ProductList/>
      <ShoppingCart/>
    </ContainerMain>
  );
}
export default App;