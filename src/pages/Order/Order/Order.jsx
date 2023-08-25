
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
const Order = () => {
  const { category } = useParams()




  const [menu] = useMenu()


  const drinks = menu.filter(item => item.category === 'drinks')
  const dessert = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salad = menu.filter(item => item.category === 'salad')
  const soup = menu.filter(item => item.category === 'soup')
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
  const initailIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initailIndex);

  console.log(tabIndex)
  console.log(initailIndex)
  console.log(category)
  return (
    <div>
      <Helmet>
        <title> Bistroo boss || order   </title>
      </Helmet>
      <Cover img={orderImg} title={'Order now'}></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>


        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-10">
          <OrderTab items={pizza}></OrderTab>

        </TabPanel>

        <TabPanel className="grid grid-cols-3 gap-10">
          <OrderTab items={soup}></OrderTab>

        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-10">
          <OrderTab items={dessert}></OrderTab>

        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-10">
          <OrderTab items={drinks}></OrderTab>

        </TabPanel>
      </Tabs>

    </div>
  );
};

export default Order;