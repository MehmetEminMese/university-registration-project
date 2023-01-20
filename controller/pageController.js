const db = require("../data/db");
const express = require("express");



const getIndexPage = (req, res) => {  
    res.render('index', {
      link: 'index',
    });
  };
module.exports={
    getIndexPage
}