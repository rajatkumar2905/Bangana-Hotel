import mongoose from "mongoose";

const schema = new mongoose.Schema({
 shippingInfo:  {
 hNo: {
 type: String,
 required: true,
 },
 vilage: {
 type: String,
 required: true,
 },
 tehsil: {
 type: String,
 required: true,
 },
 pinCode: {
 type: Number,
 required: true,
 },
 phone: {
 type: Number,
 required: true,
 },
},
 orderItems:{
    PIZZA : {
        price: {
            type: Number,
            required: true,

        },
        quantity:{
            type:Number,
            required:true,
        },
    },
    MILKSHAKE : {
        price: {
            type: Number,
            required: true,

        },
        quantity:{
            type:Number,
            required:true,
        },
    },
    OREOSHAKE : {
        price: {
            type: Number,
            required: true,

        },
        quantity:{
            type:Number,
            required:true,
        },
    },
 },
 user:{
    type: mongoose.Schema.ObjectId,
    ref:"User",
    required: true,
 },

 paymentMethod:{
    type:"string",
    enum:["COD","TAKE AWAY","VISIT TO HOTEL"],
    default:"COD",
    
 },

//  paymentInfo:{
//     type: mongoose.Schema.ObjectId,
//     ref:"Payment",
//     required: true,
//  },
 paidAt: Date,

 itemsPrice:{
    type:Number,
    default: 0,
 },
 taxPrice:{
    type:Number,
    default: 0,
 },
 shippingCharges:{
    type:Number,
    default: 0,
 },
 totalAmnout:{
    type:Number,
    default: 0,
 },

 orderStatus: {
   type: String,
   enum: ["Preparing", "Shipped", "Delivered"],
   default: "Preparing",
 },
 
 deliverdAT: Date,
 createdAt: {
    type:Date,
    default:Date.now,
 },
  });


 export const Order = mongoose.model("Order", schema)
