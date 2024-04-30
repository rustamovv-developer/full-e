import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SellingProducts from "../../components/sellingProducts/SellingProducts";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Today from "../../components/today/Today";
import Category from "../../components/category/Category";
import Arrival from "../../components/arrival/Arrival";
import Bottom from "../../components/bottom/Bottom";

function Home() {
  return (
    <>
      <Header />
      <Today />
      <Category />
      <SellingProducts />
      <Categories />
      <Products />
      <Arrival />
      <Bottom />
    </>
  );
}

export default Home;
