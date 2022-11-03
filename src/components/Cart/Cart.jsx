const Cart = ({ toggled, cartProducts, setCartProducts }) => {
  return (
    <div
      className={`productcont fixed top-0 z-10 mt-24 h-5/6 w-96 rounded-l-3xl p-2 transition-all ${
        toggled ? 'right-0' : '-right-96'
      }`}
    >
      <div className='flex h-full flex-col justify-center gap-4 p-4'>
        <div className='flex h-full flex-col gap-4'>
          <div className='flex flex-row items-center justify-between'>
            <span className='text-2xl font-bold'>
              Cart {cartProducts ? `(${cartProducts.length})` : '(0)'}
            </span>
            {/* <div className="flex items-center justify-center rounded-lg bg-orange-600 px-2 ">
            <span
              className="cursor-pointer text-2xl font-semibold"
              onClick={() => {
                setCartToggled(false);
              }}
            >
              X
            </span>
          </div> */}
          </div>
          <div className='h-0.5 w-full bg-orange-600' />
          <div className='cartproducts flex h-3/4 flex-col gap-4 overflow-auto pr-4'>
            {cartProducts.map((product) => {
              const quantityHandler = (type) => {
                if (type === 'add') {
                  setCartProducts((prev) => {
                    return prev.map((item) => {
                      if (item.id === product.id) {
                        return {
                          ...item,
                          quantity: item.quantity + 1
                        }
                      }
                      return item
                    })
                  })
                } else if (type === 'remove') {
                  setCartProducts((prev) => {
                    return prev.map((item) => {
                      if (item.id === product.id) {
                        if (item.quantity > 1) {
                          return {
                            ...item,
                            quantity: item.quantity - 1
                          }
                        }
                      }
                      return item
                    })
                  })
                }
              }
              return (
                <div
                  key={product.id}
                  className='flex w-full flex-row justify-between'
                >
                  <div className='flex flex-row gap-4'>
                    <img
                      src={product.img}
                      alt=''
                      className='h-24 w-24'
                    />
                    <div className='flex flex-col gap-2'>
                      <span className='text-xl font-medium'>
                        {product.name}
                      </span>
                      <div className='flex flex-row items-center gap-4'>
                        <span className='text-lg font-medium'>
                          ${product.price}
                        </span>
                        {/* quantity selector, two orange-600 arrows to select the quantity */}
                        <div className='flex flex-row items-center justify-center gap-2 rounded-lg border-2 border-orange-600 px-2 '>
                          <button
                            className='cursor-pointer text-lg font-semibold text-orange-600 '
                            onClick={() => quantityHandler('remove')}
                          >
                            -
                          </button>
                          <span className='w-4 text-center text-lg font-semibold'>
                            {product.quantity}
                          </span>
                          <button
                            className='cursor-pointer text-lg font-semibold text-orange-600'
                            onClick={() => quantityHandler('add')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className='flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 px-2 font-bold '
                    onClick={() => {
                      setCartProducts((prev) => {
                        return prev.filter(
                          (item) => item.id !== product.id
                        )
                      })
                    }}
                  >
                    X
                  </button>
                </div>
              )
            })}
          </div>
          <div className='h-0.5 w-full bg-orange-600' />
          <div className='flex w-full flex-row items-center justify-between'>
            <div className='flex flex-row gap-2'>
              <span className='text-3xl font-semibold'>Total</span>
              <span className='text-3xl font-semibold'>
                $
                {cartProducts &&
                  cartProducts.reduce((acc, curr) => {
                    return acc + curr.price * curr.quantity
                  }, 0)}
              </span>
            </div>
            <button className='flex items-center justify-center rounded-lg bg-orange-600 p-2 text-xl font-bold'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
