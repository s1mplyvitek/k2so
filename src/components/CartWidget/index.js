const CartWidget = ({ cart, sum }) => {
    return (
        <div className='my-5 mx-auto container flex flex-row-reverse text-right'>
            <div>
                <div className='text-xl'>Shopping cart</div>
                <div>Total: {sum} rub</div>
                <div>Number of goods: {cart.length}</div>
            </div>
        </div>
    );
};

export default CartWidget;

