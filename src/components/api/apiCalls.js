const APIURL = "http://localhost:4000/api";

// --------USER API CALLS------
// export const registerUser = async (userData) => {
//   const response = await fetch(`${APIURL}/users/register`, {
//     method: "POST",
//     // headers: code here,
//     body: JSON.stringify(userData),
//   });

//   if (response.ok) {
//     const result = await response.json();
//     return result;
//   } else {
//     const error = await response.json();
//     throw new Error(error.error);
//   }
// };

export const registerGuest = async (email) => {
  const response = await fetch(`${APIURL}/users/guest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

// --------PRODUCT API CALLS---------
export const getAllProducts = async () => {
  const response = await fetch(`${APIURL}/products`);

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

export const getProductById = async (productId) => {
  const response = await fetch(`${APIURL}/products/${productId}`);

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
  const response = await fetch(`${APIURL}/orders/`, {
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
  const response = await fetch(`${APIURL}/orders/checkout`, {
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
  const response = await fetch(`${APIURL}/orders/cartId/${userId}`);

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
  const response = await fetch(`${APIURL}/orderItems/${orderId}`);

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

export const getCartByUser = async (userId) => {
  const response = await fetch(`${APIURL}/orderItems/cart/${userId}`);

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};

export const createCartItem = async (orderItemObj) => {
  const response = await fetch(`${APIURL}/orderItems/create`, {
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
  const response = await fetch(`${APIURL}/orderItems/${orderItemsId}`, {
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
  const response = await fetch(`${APIURL}/orderItems/${orderItemId}`, {
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
  const response = await fetch(`${APIURL}/users/info`);

  if (response.ok) {
    const result = await response.json();

    return result;
  } else {
    const error = await response.json();
    throw new Error(error.error);
  }
};
