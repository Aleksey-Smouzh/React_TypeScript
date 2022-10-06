import { Product } from './components/Product'
import { useProducts } from './hooks/products';
import {Loader} from './components/loader'
import { ErrorMessage } from './components/ErrorMessage'
function App() {

  const { loading, error, products } = useProducts()


  return (
    //ниже метод загрузги данных статических  которые находяться локально

    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader/>}
      {error && <ErrorMessage error={error} />}
      {/* с помощю метода map мы получаем продукт который он перебирает JavaScript метод map() позволяет вызвать переданную функцию один раз для каждого элемента массива, формируя новый массив из результатов вызова этой функции. */}
      {products.map(product => <Product product={product} key={product.id} />)}

      {/* это способ без метода 'map' */}
      {/* <Product product={products[0]} />
      <Product product={products[1]} />
      <Product product={products[2]} /> */}
    </div>
  );
}

export default App;
