const BASE_URL = "http://localhost:4000/api";

// --------USER API CALLS------
export const signupUser = async (username, password) => {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    // headers: code here,
    body: JSON.stringify({
      
        username: username,
        password: password,
      }),
  });
  //cart 

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

// export const registerGuest = async (email) => {
//   const response = await fetch(`${BASE_URL}/users/guest`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email: email }),
//   });

//   if (response.ok) {
//     const result = await response.json();
//     return result;
//   } else {
//     const error = await response.json();
//     throw new Error(error.error);
//   }
// };

// --------PRODUCT API CALLS---------
export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

export const getProductById = async (productId) => {
  const response = await fetch(`${BASE_URL}/products/${productId}`);

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

//-----------ORDERS API CALLS---------------
export const createOrder = async (orderData) => {
  const response = await fetch(`${BASE_URL}/orders/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

export const checkoutCart = async (orderId) => {
  const response = await fetch(`${BASE_URL}/orders/checkout`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId,
    }),
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

export const getCartIdByUserId = async (userId) => {
  const response = await fetch(`${BASE_URL}/orders/cartId/${userId}`);

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

// ----------ORDER ITEMS API CALLS-------------
export const getAllOrderItems = async (orderId) => {
  const response = await fetch(`${BASE_URL}/orderItems/${orderId}`);

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

export const getCartByUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/orderItems/cart/${userId}`);

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

export const createCartItem = async (orderItemObj) => {
  const response = await fetch(`${BASE_URL}/orderItems/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderItemObj),
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

export const updateCartItem = async (orderItemsId, quantity) => {
  const response = await fetch(`${BASE_URL}/orderItems/${orderItemsId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity: quantity }),
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

export const deleteCartItem = async (orderItemId) => {
  const response = await fetch(`${BASE_URL}/orderItems/${orderItemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

//---------ADMIN API CALLS----------
export const fetchAllUserInfo = async () => {
  const response = await fetch(`${BASE_URL}/users/info`);

  if (response.ok) {
    const result = await response.json();

    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};
