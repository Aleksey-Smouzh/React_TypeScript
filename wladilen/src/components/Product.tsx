import React,{useState} from 'react'
import { IProduct } from '../models'
interface ProductProps {
    product: IProduct
}
export function Product({ product }: ProductProps) {
    
    const [details, setDetails] = useState(false)
//    тут пишем название классов которые будут менятся для кнопки
    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue'
    // после этого мы создаем масиив классов которые при клике необходимо изменять
    const btnClasses = ['py-2 px-4 border', btnBgClassName ]
    
    return (
        // тут показывает название продукта картинку
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <span>{product.price}$</span>
            {/* кнопка с двумя функциями спрятать и показать текст  + изменеие название */}


            <button
                // тут пишем имя переменной и пропускаем через метод join и соединяем через пробел (потому что моссив не может быть приведен к строчке. JavaScript метод join() позволяет преобразовать и объединить все элементы массива в одно строковое значение. По умолчанию, элементы массива будут разделены запятой, это поведение можно изменить передав в качестве параметра метода значение, которое будет использовано в качестве разделителя.)
                className={btnClasses.join('')}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide Details' : 'Show Details'}</button>
            
            {/* тут внизу показывате текст то что в скрывает кнопка */}

            {details && <div><p>{product.description}</p>
                <span style={{ fontWeight: "bold"}}>rating {product.rating.rate}</span>
            </div>}

        </div>
    )
}