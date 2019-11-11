import Layout from "../components/MyLayout.js";
import Head from "next/head";
import React, { useState } from "react";
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';



//Render Content
const Content = (products) => {
  //console.log(products.products);
  //get data //Array.isArray() trả về true or false, Kiểm tra xem đối tượng truyền vào có phải array không.
  let newProducts = Array.isArray(products.products) ? products.products : [];
  //console.log(newProducts);
  //Sử dụng hàm map để in sản phẩm
  const listProducts = newProducts.map(product => {
    return (
      //Phải set keys. Đọc docs phần Lists and Keys
      <div className="col-md-4 col-lg-3 col-sm-6" key={product.id}>
        <div className="card">
          <div className="hover_area">
            <Link href="/shop/[id]" as={`/shop/${product.id}`}>
              <img
                className="card-img-top"
                src={product.imageProduct}
                alt="Card image cap"
              />
            </Link>
            {/* <div className="hover_card">
              <a href="cart.html">
                <i className="fas fa-cart-plus" />
              </a>
              <a href="cart.html">
                <i className="fas fa-expand" />
              </a>
              <a href="cart.html">
                <i className="fas fa-heart" />
              </a>
            </div> */}
          </div>
          <div className="card-body">
            <div className="text-center">
              {/* // Trong đó: href là path trong folder, as là URL */}
              <Link href="/shop/[id]" as={`/shop/${product.id}`}>
                <p>{product.id}</p>
              </Link>
              <Link href="/shop/[id]" as={`/shop/${product.id}`}>
                <p>{product.nameProduct}</p>
              </Link>
            </div>
            <p className="card-text tag text-center">
              <small className="text-muted">{product.typeProduct}</small>
            </p>
            <hr />
            <p />
            <p className="card-text price text-center">{product.priceProduct}</p>
          </div>
        </div>
      </div>
    )
  });
  //Sử dụng thư viện router để ??? Cái này ko liên quan nhưng kệ
  // const router = useRouter();


  return (
    <div>
      {/*section1*/}
      <section className="section_1 container-fluid">
        <div className="set_food">
          <div className="row set_food_area">
            <div className="col-6 image_set"> </div>
            <div className="col-6 set_content">
              <div className="text_content">
                <p className="set_price text-center">199.000 vnd</p>
                <hr />
                <p className="set_name text-center">COMBO TÌNH YÊU</p>
                <p className="sub_set text-center">
                  2 bánh mỳ, 2 set trái cây 4 mùa, 2 trà trái cây
                </p>
                <div className="text-center btn_detail">
                  <button className="btn" type="button">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_2 container-fluid">
        <div className="top_section_2">
          <div className="row top_area">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                id="dropdownMenuButton"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tất cả các món
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Món tráng miệng
                </a>
                <a className="dropdown-item" href="#">
                  Món chính
                </a>
              </div>
            </div>
            <div className="search ml-auto">
              <input
                className="form-control"
                id="myInput"
                type="text"
                placeholder="Tìm kiếm.."
              />
            </div>
          </div>
        </div>
        <div className="card_main">
          <div className="card-deck row">{listProducts}</div>
          <div className="pagination_area">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};



const Page = props => (
  <Layout>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        media="screen"
        href="css/shop.css"
      />
    </Head>
    <Content products={props.products} />
  </Layout>
);

//Connect data
Page.getInitialProps = async function () {
  const res = await fetch(
    'https://yummy123.herokuapp.com/products'
  );

  const data = await res.json();
  //console.log(data);
  return {
    products: data
  };
};

export default Page;
