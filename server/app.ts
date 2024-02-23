// const express = require("express");
import express, { Request, Response } from 'express';
const test_case = require("../tests/test");

const app = express();
const port = 3000;

app.use(express.json());

app.post('/run-test', async (req, res) => {
  // console.log('y');
  try {
    await test_case();
    res.status(200).send('Test case executed successfully');
  } catch (err) {
    console.log('Error executing test case: ', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
