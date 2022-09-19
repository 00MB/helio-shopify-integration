const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  order_id: 0,
  admin_graphql_api_id: "",
  app_id: 0,
  browser_ip: 0,
  buyer_accepts_marketing: false,
  cancel_reason: "",
  cancelled_at: "",
  cart_token: "",
  checkout_id: 0,
  checkout_token: "",
  client_details: "",
  closed_at: "",
  confirmed: false,
  contact_email: "",
  created_at: "",
  currency: "",
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
      currency_code: "",
    },
  },
  current_total_duties_set: "",
  current_total_price: "",
  current_total_price_set: {
    shop_money: {
      amount: "",
      currency_code: "",
    },
    presentment_money: {
      amount: "",
      currency_code: "",
    },
  },
  current_total_tax: "",
  current_total_tax_set: {
    shop_money: {
      amount: "",
      currency_code: "",
    },
    presentment_money: {
      amount: "",
      currency_code: "",
    },
  },
  customer_locale: "",
  device_id: 0,
  discount_codes: [],
  email: "",
  estimated_taxes: false,
  financial_status: "",
  fulfillment_status: "",
  gateway: "",
  landing_site: "",
  landing_site_ref: "",
  location_id: 0,
  name: "",
  note: "",
  note_attributes: [],
  number: 0,
  order_number: 0,
  order_status_url: "",
  original_total_duties_set: "",
  payment_gateway_names: [],
  phone: "",
  presentment_currency: "",
  processed_at: "",
  processing_method: "",
  reference: "",
  referring_site: "",
  source_identifier: "",
  source_name: "",
  source_url: "",
  subtotal_price: "",
  subtotal_price_set: {
    shop_money: {
      amount: "",
      currency_code: "",
    },
    presentment_money: {
      amount: "",
      currency_code: "",
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
      currency_code: "",
    },
    presentment_money: {
      amount: "",
      currency_code: "",
    },
  },
  total_line_items_price: "",
  total_line_items_price_set: {
    shop_money: {
      amount: "",
      currency_code: "",
    },
    presentment_money: {
      amount: "",
      currency_code: "",
    },
  },
  total_outstanding: "",
  total_price: "",
  total_price_set: {
    shop_money: {
      amount: "",
      currency_code: "",
    },
    presentment_money: {
      amount: "",
      currency_code: "",
    },
  },
  total_price_: "",
  total_shipping_price_set: {
    shop_money: {
      amount: "",
      currency_code: "",
    },
    presentment_money: {
      amount: "",
      currency_code: "",
    },
  },
  total_tax: "",
  total_tax_set: {
    shop_money: {
      amount: "",
      currency_code: "",
    },
    presentment_money: {
      amount: "",
      currency_code: "",
    },
  },
  total_tip_received: "",
  total_weight: 0,
  updated_at: "",
  user_id: 0,
  billing_address: "",
  customer: "",
  discount_applications: [],
  fulfillments: [],
  line_items: [
    {
      id: 0,
      admin_graphql_api_id: "",
      fulfillable_quantity: 0,
      fulfillment_service: "",
      fulfillment_status: "",
      gift_card: false,
      grams: 0,
      name: "",
      price: "",
      price_set: {
        shop_money: {
          amount: "",
          currency_code: "",
        },
        presentment_money: {
          amount: "",
          currency_code: "",
        },
      },
      product_exists: false,
      product_id: 0,
      properties: [],
      quantity: 0,
      requires_shipping: false,
      sku: "",
      taxable: false,
      title: "",
      total_discount: "",
      total_discount_set: {
        shop_money: {
          amount: "",
          currency_code: "",
        },
        presentment_money: {
          amount: "",
          currency_code: "",
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
  payment_details: "",
  refunds: [],
  shipping_address: "",
  shipping_lines: [],
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
