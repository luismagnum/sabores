import React, { useState } from 'react';
import logo from '../image/logo.svg';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [showError, setShowError] = useState(false); // Estado para mostrar mensaje de error

  const products = [
    { id: 1, name: 'Empanadas', price: 14000 },
    { id: 2, name: 'Empanadasx6', price: 7000 },
    { id: 3, name: 'Tequeños', price: 10000 },
    { id: 4, name: 'Tequeñosx6', price: 5000 },
    { id: 5, name: 'Combo Tropical', price: 13000 },
    { id: 6, name: 'Combo Mini', price: 10000 },
  ];

  // Función para añadir productos al carrito
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Si es un nuevo producto, agrégalo con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Función para actualizar la cantidad de productos
  const updateQuantity = (productId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Función para eliminar un producto del carrito si la cantidad es 0
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Calcular el total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Enviar el pedido por WhatsApp
  const sendOrder = () => {
    if (cart.length === 0) {
      // Si el carrito está vacío, mostrar mensaje de error
      setShowError(true);
      setTimeout(() => setShowError(false), 2000); // Ocultar el mensaje después de 2 segundos
      return;
    }

    const orderText = cart
      .map(
        (product) => `${product.quantity}x ${product.name} - $${product.price * product.quantity}`
      )
      .join('\n');
    const total = calculateTotal();
    const whatsappMessage = `Pedido:\n${orderText}\nTotal: $${total}`;

    const url = `https://wa.me/542984417477?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-center items-center text-center mx-auto mb-6">
                <span>
                    <img src={logo} alt='' width={50}/>
                </span>
      <h1 className="text-2xl font-bold mb-4 text-center m-4">Sabores de Venezuela</h1>
      </div>
      <h2 className="text-xl font-bold mb-6 text-center mt-2">Calcular tu pedido</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg text-center">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-700 w-full"
              onClick={() => addToCart(product)}
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>

      <div className="border-t-2 pt-4">
        <h2 className="text-xl font-bold md:ml-4 mb-2">Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 md:ml-4">El carrito está vacío</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:ml-4 md:text-left">
                  {item.name} - ${item.price} x {item.quantity}
                </div>
                <div className="flex items-center mt-2 md:mr-4 md:mt-0">
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded"
                    onClick={() =>
                      item.quantity > 1
                        ? updateQuantity(item.id, item.quantity - 1)
                        : removeFromCart(item.id)
                    }
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-green-500 text-white rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <p className="text-lg font-bold text-center md:text-right">Total: ${calculateTotal()}</p>

          <div className="flex justify-center md:justify-end">
            <button
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 w-full md:w-auto"
              onClick={sendOrder}
            >
              Enviar Pedido por WhatsApp
            </button>
          </div>

          {/* Mostrar mensaje de error si el carrito está vacío */}
          {showError && (
            <div className="text-red-500 text-center font-bold mt-4">
              No puedes enviar un pedido con el carrito vacío.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

