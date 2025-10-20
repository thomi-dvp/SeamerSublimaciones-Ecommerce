import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const IVA_RATE = 0.21; // 21% IVA
const IMPUESTO_EXTRA = 0.05; // 5% impuesto extra ejemplo

const initialState = {
	items: [], // {id, name, price, quantity, image}
};

function cartReducer(state, action) {
	switch (action.type) {
		case 'ADD_ITEM': {
			const existing = state.items.find(item => item.id === action.payload.id);
			if (existing) {
				return {
					...state,
					items: state.items.map(item =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			}
			return {
				...state,
				items: [...state.items, { ...action.payload, quantity: 1 }],
			};
		}
		case 'REMOVE_ITEM': {
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload),
			};
		}
		case 'DECREASE_ITEM': {
			return {
				...state,
				items: state.items
					.map(item =>
						item.id === action.payload && item.quantity > 1
							? { ...item, quantity: item.quantity - 1 }
							: item
					)
					.filter(item => item.quantity > 0),
			};
		}
		case 'CLEAR_CART':
			return initialState;
		default:
			return state;
	}
}

export function CartProvider({ children }) {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
	const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
	const decreaseItem = (id) => dispatch({ type: 'DECREASE_ITEM', payload: id });
	const clearCart = () => dispatch({ type: 'CLEAR_CART' });

	const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const iva = subtotal * IVA_RATE;
	const impuestoExtra = subtotal * IMPUESTO_EXTRA;
	const total = subtotal + iva + impuestoExtra;

	return (
		<CartContext.Provider
			value={{
				items: state.items,
				addItem,
				removeItem,
				decreaseItem,
				clearCart,
				subtotal,
				iva,
				impuestoExtra,
				total,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
