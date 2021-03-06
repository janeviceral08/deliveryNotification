const mongoose = require('mongoose');
var Int32 = require('mongoose-int32');

const Schema = mongoose.Schema;

const CheckoutSchema = new Schema({

 
    control_num:{ type: String } ,//
      check_in_date:{ type: String } ,//
      check_out_date:{ type: String } ,//
      check_out_id: { type: String },//
      discount_less: { type: String },//
      extension_total_amount: { type: String },//
      overall_total: { type: Int32},//
      stay_total: { type: String },//
      subtotal: { type: String },//
      tax_val: { type: String },//
      _partition: { type: String },
      address: { type: String },
      chatroom: { type: String },
      check_out: { type: Int32},
      check_in: { type: Int32},
      check_out_w_ext: { type: String },
      company: { type: String },
      contact: { type: String },
      customer: { type: String },
      discount: { type: String },
      discount_code: { type: String },
      discount_value: { type: String },
      email: { type: String },
      extension: { type: String },
      extension_amount: { type: String },
      extension_mode: { type: String },
      extension_person: { type: String },
      extension_price: { type: String },
      extension_rate: { type: String },
      extension_value: { type: String },
      extra_person: { type: String },
      extra_amount: { type: String },
      hour_duration: { type: String },
      hour_key: { type: String },
      hour_price: { type: String },
      hour_rate: { type: String },
      nationality: { type: String },
      no_person: { type: Int32},
      no_person_discount: { type: String },
      note: { type: String },
      number_of_days: { type: String },
      number_of_hours: { type: String },
      payment: { type: Int32},
      payment_method: { type: String },
      penalty: { type: String },
      penalty_description: { type: String },
      penalty_val: { type: String },
      price: { type: String },
      room_no: { type: String },
      room_no_id: { type: String },
      room_type: { type: String },
      room_type_id: { type: String },
      status: { type: String },
      tax: { type: String },
      total_addtional: { type: Int32},
      updated_at: { type: String },
      res_code: { type: String },
      checkin_stat: { type: String },
      Change_room: { type: String },
      refund: { type: String },
      room_change: { type: String },

}, {
    collection: 'Checkout'
  });

const Checkout = mongoose.model('Checkout',CheckoutSchema);

module.exports = Checkout;