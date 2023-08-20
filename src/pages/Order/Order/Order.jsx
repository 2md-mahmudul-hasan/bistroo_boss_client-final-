import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import FoodCart from '../../../components/FoodCart';
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu()
  const offer = menu.filter(item => item.category === 'offered')
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
          <div className="grid grid-cols-3 gap-10">
            {
              salads.map(item => <FoodCart item={item} key={item._id}></FoodCart>)
            }
          </div>
        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-10">
          <div className="grid grid-cols-3 gap-10">
            {
              pizza.map(item => <FoodCart item={item} key={item._id}></FoodCart>)
            }
          </div>
        </TabPanel>

        <TabPanel className="grid grid-cols-3 gap-10">
          <div className="grid grid-cols-3 gap-10">
            {
              soups.map(item => <FoodCart item={item} key={item._id}></FoodCart>)
            }
          </div>
        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-10">
          <div className="grid grid-cols-3 gap-10">
            {
              desserts.map(item => <FoodCart item={item} key={item._id}></FoodCart>)
            }
          </div>
        </TabPanel>
        <TabPanel className="grid grid-cols-3 gap-10">
          <div className="grid grid-cols-3 gap-10">
            {
              salads.map(item => <FoodCart item={item} key={item._id}></FoodCart>)
            }
          </div>
        </TabPanel>
      </Tabs>

    </div>
  );
};

export default Order;