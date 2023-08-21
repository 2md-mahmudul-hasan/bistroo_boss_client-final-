import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import FoodCart from '../../../components/FoodCart';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu()

  const { category } = useParams()
  console.log(category)
  const drinks = menu.filter(item => item.category === 'drinks')
  const desserts = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salads = menu.filter(item => item.category === 'salad')
  const soups = menu.filter(item => item.category === 'soup')
  return (
    <div>
      <Cover img={orderImg} title={'Order now'}></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salads}></OrderTab>


        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-10">
          <OrderTab items={pizza}></OrderTab>

        </TabPanel>

        <TabPanel className="grid grid-cols-3 gap-10">
          <OrderTab items={soups}></OrderTab>

        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-10">
          <OrderTab items={desserts}></OrderTab>

        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-10">
          <OrderTab items={drinks}></OrderTab>

        </TabPanel>
      </Tabs>

    </div>
  );
};

export default Order;