import { BrowserRouter, Routes, Route, useLocation, useParams } from "react-router-dom"

// 컴포넌트 4개 페이지
// Main - www.hojun.com
// ProductDetails - www.hojun.com/product/1
// Cart - www.hojun.com/cart
// Buy - www.hojun.com/buy

function Index(){
  return <h2>Index 페이지</h2>
}

function ProductDetails(){
  const location = useLocation(); // props가 아니라 useLocation으로 받아와서 사용
  // const path = location.pathname.split('/')[2]
  const { id } = useParams()
  
  // 가져오기 전에 값 출력해보기
  const value = useParams()
  console.log(value)

  console.log(location)
  console.log(location.pathname.split('/'))
  
  return <h2>ProductDetails {id} 페이지</h2>
} // ProductDetails 100 페이지 출력 

function Cart(){
  return <h2>Cart 페이지</h2>
}

function Buy(){
  return <h2>Buy 페이지</h2>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}