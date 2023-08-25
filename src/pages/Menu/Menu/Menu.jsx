import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soapImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
  const [menu] = useMenu()
  const offer = menu.filter(item => item.category === 'offered')
  const dessert = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salads = menu.filter(item => item.category === 'salad')
  const soups = menu.filter(item => item.category === 'soup')
  return (
    <div>
      <Helmet>
        <title>bistroo-boos||menu</title>
      </Helmet>
      <Cover img={coverImg} title="Our menu"></Cover>
      <SectionTitle subheading="Don't miss" heading="To days offer"></SectionTitle>
      <MenuCategory items={offer}></MenuCategory>

      {/* desserts */}
      <MenuCategory title={"dessert"} coverImg={dessertImg} items={dessert}></MenuCategory>
      {/* pizza */}
      <MenuCategory title={"pizza"} coverImg={pizzaImg} items={pizza}></MenuCategory>
      <MenuCategory title={"salad"} coverImg={saladImg} items={salads}></MenuCategory>
      <MenuCategory title={"soup"} coverImg={soapImg} items={soups}></MenuCategory>
    </div>
  );
};

export default Menu;