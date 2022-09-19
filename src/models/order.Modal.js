const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  id: null,
  admin_graphql_api_id: "",
  app_id: null,
  browser_ip: null,
  buyer_accepts_marketing: false,
  cancel_reason: null,
  cancelled_at: null,
  cart_token: null,
  checkout_id: null,
  checkout_token: null,
  client_details: null,
  closed_at: null,
  confirmed: true,
  contact_email: null,
  created_at: "",
  currency: "USD",
  current_subtotal_price: "",
  current_subtotal_price_set: {
    shop_money: {
      amount: "",
      currency_code: "",
    },
    presentment_money: {
      amount: "",
      currency_code: "",
    },
  },
  current_total_discounts: "",
  current_total_discounts_set: {
    shop_money: {
      amount: "",
      currency_code: "",
    },
    presentment_money: {
      amount: "",
      currency_code: "USD",
    },
  },
  current_total_duties_set: null,
  current_total_price: "",
  current_total_price_set: {
    shop_money: {
      amount: "",
      currency_code: "USD",
    },
    presentment_money: {
      amount: "",
      currency_code: "USD",
    },
  },
  current_total_tax: "",
  current_total_tax_set: {
    shop_money: {
      amount: "",
      currency_code: "USD",
    },
    presentment_money: {
      amount: "",
      currency_code: "USD",
    },
  },
  customer_locale: null,
  device_id: null,
  discount_codes: [],
  email: "",
  estimated_taxes: false,
  financial_status: "",
  fulfillment_status: null,
  gateway: "",
  landing_site: null,
  landing_site_ref: null,
  location_id: null,
  name: "",
  note: null,
  note_attributes: [],
  number: 0,
  order_number: 0,
  order_status_url: "",
  original_total_duties_set: null,
  payment_gateway_names: [],
  phone: null,
  presentment_currency: "USD",
  processed_at: "",
  processing_method: "",
  reference: null,
  referring_site: null,
  source_identifier: null,
  source_name: "",
  source_url: null,
  subtotal_price: "",
  subtotal_price_set: {
    shop_money: {
      amount: "",
      currency_code: "USD",
    },
    presentment_money: {
      amount: "",
      currency_code: "USD",
    },
  },
  tags: "",
  tax_lines: [],
  taxes_included: false,
  test: false,
  token: "",
  total_discounts: "",
  total_discounts_set: {
    shop_money: {
      amount: "",
      currency_code: "USD",
    },
    presentment_money: {
      amount: "",
      currency_code: "USD",
    },
  },
  total_line_items_price: "",
  total_line_items_price_set: {
    shop_money: {
      amount: "",
      currency_code: "USD",
    },
    presentment_money: {
      amount: "",
      currency_code: "USD",
    },
  },
  total_outstanding: "",
  total_price: "",
  total_price_set: {
    shop_money: {
      amount: "",
      currency_code: "USD",
    },
    presentment_money: {
      amount: "",
      currency_code: "USD",
    },
  },
  total_price_usd: "",
  total_shipping_price_set: {
    shop_money: {
      amount: "",
      currency_code: "USD",
    },
    presentment_money: {
      amount: "",
      currency_code: "USD",
    },
  },
  total_tax: "",
  total_tax_set: {
    shop_money: {
      amount: "",
      currency_code: "USD",
    },
    presentment_money: {
      amount: "",
      currency_code: "USD",
    },
  },
  total_tip_received: "",
  total_weight: 0,
  updated_at: "",
  user_id: null,
  billing_address: null,
  customer: null,
  discount_applications: [],
  fulfillments: [],
  line_items: [
    {
      id: 0,
      admin_graphql_api_id: "",
      fulfillable_quantity: 1,
      fulfillment_service: "",
      fulfillment_status: null,
      gift_card: false,
      grams: 0,
      name: "",
      price: "",
      price_set: {
        shop_money: {
          amount: "",
          currency_code: "USD",
        },
        presentment_money: {
          amount: "",
          currency_code: "USD",
        },
      },
      product_exists: true,
      product_id: 0,
      properties: [],
      quantity: 0,
      requires_shipping: true,
      sku: "",
      taxable: true,
      title: "",
      total_discount: "",
      total_discount_set: {
        shop_money: {
          amount: "",
          currency_code: "USD",
        },
        presentment_money: {
          amount: "",
          currency_code: "USD",
        },
      },
      variant_id: 0,
      variant_inventory_management: "",
      variant_title: "",
      vendor: "",
      tax_lines: [],
      duties: [],
      discount_allocations: [],
    },
  ],
  payment_details: null,
  refunds: [],
  shipping_address: null,
  shipping_lines: [],
});

const Order = mongoose.model("error", orderSchema);

module.exports = Order;
