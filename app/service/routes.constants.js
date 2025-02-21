export const AUTH_ROUTES = {
  // AUTH
  LOGIN: "/user/login",
  SIGN_UP:"/user",
  GET_LOGGED_IN_VENDOR: "/vendor/me",
  CHANGE_PASSWORD:"/vendor/change-password",
  FORGOT_PASSWORD:"/vendor/forgot-password",
  SEND_OTP:"/auth/verify/otp",
  RESET_PASSWORD: "/reset-password",
  UPDATE_IMAGE:(vendorId)=>`/vendor/update/${vendorId}?image`,


  //MARKET ORDERS
  GET_MARKET_ORDERS:(status)=>`/service-request/?requestStatus=${status}`,

  //SERVICE-REQUEST
  GET_ALL_REQUEST:"/service-request",
  ACCEPT_REQUEST:"/response",

  //ORDERS
  GET_ASSIGNED_ORDERS:(vendorId)=>`/service-request?acceptedResponse.vendor=${vendorId}`,
  GET_ACCEPTED_ORDERS: (vendorId, response)=> `/service-request?assignedVendor=${vendorId}&vendorResponse=${response}`
                              









  // GET_LOGGED_IN_ADMIN: "/admin/me",
  // UPDATE_ADMIN_DETAILS: (id) => `/admin/update/${id}`,
  // UPDATE_PASSWORD: "/admin/password",
  // SEND_CODE: "/user/details",
  // USER_LOGIN: "/user/login",

  // //EVENTS
  // GET_EVENTS: "/event",
  // POST_EVENTS: "/event",
  // GET_EVENT_BY_ID: (id) => `/event?uniqueId=${id}`,
  // DELETE_EVENT_BY_ID: (id) => `/event/${id}`,
  // UPDATE_EVENT_BY_ID: (id) => `/event/${id}`,

  // // GUESTS
  // GET_GUEST: (id) => `/user?guestTo=${id}`,
  // GET_GROUP: "/group",
  // POST_GROUP: "/group",
  // POST_GUEST: "/guest",

  // // ASO EBI
  // CREATE_ASOEBI: "/aso-ebi",
  // GET_ASOEBI_DETAILS: (id) => `/aso-ebi?eventId=${id}`,
  // POST_ASOEBI_ORDER: "/order",
  // GET_ASO_EBI_ORDERS: (id) => `/order?eventId=${id}`,
  // DELETE_ASO_EBI: (id) => `/aso-ebi/${id}`,
  // //VENDOR
  // GET_SELECTED_VENDORS: (id) => `/vendor?userId=${id}`,

  // // BIKES
  // BIKE: "/bike",
  // UPDATE_AND_DELETE_BIKE: (id) => `/bike/${id}`,

  // // CUSTOMERS
  // CREATE_CUSTOMER: "/customer/create-customer",
  // GET_ALL_CUSTOMER: "/customer/get-customers",
  // GET_CUSTOMER_BY_ID: (id) => `/customer/get-customers/?_id=${id}`,
  // DELETE_CUSTOMER: (id) => `/customer/delete-customer/${id}`,

  // //MERCHANT
  // MERCHANTS: "/merchant",
  // GET_SINGLE_MERCHANT: (merchantId) => `/merchant?_id=${merchantId}`,
  // DELETE_MERCHANT: (merchantId) => `/merchant/${merchantId}`,

  // // OPERATORS
  // CREATE_OPERATOR: "/enterprise",
  // GET_ALL_OPERATORS: "/enterprise?sort=desc",
  // DELETE_OPERATOR: (operatorId) => `/enterprise/${operatorId}`,

  // // REQUESTS
  // CREATE_REQUEST: "/request",
  // REQUESTS: "/request?sort=desc",
  // GET_REQUEST: (requestId) => `/request?_id=${requestId}`,
  // UPDATE_AND_DELETE_REQUESTS: (id) => `/request/${id}`,
  // SEARCH_REQUEST: (startDate, endDate) =>
  //   `/request/search?startDate=${startDate}&endDate=${endDate}`,
  // ASSIGN_REQUEST: (requestId) => `/request/assign/${requestId}`,

  // // RIDERS/DRIVERS

  // RIDERS: "/rider",
  // GET_PENAIZED: "/performancescorecard/",

  // GET_SINGLE_RIDER: (riderId) => `/rider?_id=${riderId}`,
  // DELTE_AND_UPDATE_RIDER: (id) => `/rider/${id}`,
  // REWARD_RIDER: "/performancescorecard",

  // // SUBSCRIPTION
  // SUBSCRIPTION: "/subscription",
  // UPDATE_AND_DELETE_SUBSCRIPTION: (id) => `/subscription/${id}`,
  // GET_ALL_SUBSCRIBERS: "/subscriber",

  // // TRANSACTIONS
  // CONFIRM_CUSTOMERS_PAYMENT: "/transaction/external",

  // // TRIPS
  // TRIPS: "/trips",
  // GET_TRIP: (tripId) => `/trips?_id=${tripId}`,
  // UPDATE_TRIP: (id) => `/trips/update/${id}`,

  // //PROFILE
  // UPDATE_IMAGE:(id)=>`/vendor/update/${id}?image`,
};
