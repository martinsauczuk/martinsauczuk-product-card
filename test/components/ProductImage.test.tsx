import React from "react";
import ProductCard, { ProductImage } from "../../src/components";
import { product2 } from "../data/products";
import renderer from 'react-test-renderer';

describe('ProductImage', () => {

    test('should show the component with image', () => {
      const wrapper = renderer.create(
          <ProductImage img="https://hola.jpg" />
      )
      expect( wrapper.toJSON() ).toMatchSnapshot();
    });

  
    test('should show the componente with the image of the product', () => {
      
      const wrapper = renderer.create(
          <ProductCard product={ product2 } >
              {
                  () => <ProductImage />
              }
          </ProductCard>
      )
      expect( wrapper.toJSON() ).toMatchSnapshot();
  
    });
    
  })