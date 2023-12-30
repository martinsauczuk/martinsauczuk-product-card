# martinsauczuk-product-card

Testing product card npm deploy

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'martinsauczuk-product-card';
```


```
 <ProductCard
    product={ product }
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
    >
    {
        ({reset, count, maxCount, increaseBy, isMaxCountReached }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
        )
    }
    </ProductCard>
```

### Martin Sauczuk
## Argentina 2023