import Benefits from '@/components/ui/benefits/benefits';
import Slider from '@/components/ui/slider/slider';
import SectionLayout from '@/components/layouts/sectionLayout/sectionLayout';
import ItemFlexLayout from '@/components/layouts/itemFlexLayout/itemFlexLayout';
import ProductCard from '@/components/productCard/productCard';
import BlogItem from '@/components/ui/blogItem/blogItem';
import ItemSlider from '@/components/ui/itemSlider/itemSlider';

const Home = () => {
   return (
      <>
         <Slider />
         <SectionLayout title={'Хиты продаж'}>
            <ItemFlexLayout>
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </ItemFlexLayout>
         </SectionLayout>
         <SectionLayout title='Почему покупают у нас'>
            <Benefits />
         </SectionLayout>
         <SectionLayout title={'Электросамокаты'}>
            <ItemFlexLayout>
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </ItemFlexLayout>
         </SectionLayout>
         <SectionLayout title={'Самокаты'}>
            <ItemFlexLayout>
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </ItemFlexLayout>
         </SectionLayout>
         <SectionLayout title={'Полезные статьи'}>
            <ItemSlider />
         </SectionLayout>
         <SectionLayout title={'Экипировка'}>
            <ItemFlexLayout>
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </ItemFlexLayout>
         </SectionLayout>
      </>
   );
}

export default Home;