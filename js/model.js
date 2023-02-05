//import { async } from "regenerator-runtime";
//import { getJSON, sendJSON } from './helpers';
//import { AJAX } from "./helpers.js";

export const state = {
  form: {},
};

const createForm = function (data) {
  const { form } = data.data;
  return {
    id: form.id,
    name: form.name,
    phone: form.phone,
    email: form.email,
    color: form.color,
    black: form.black,
  };
};

export const uploadForm = async function (newForm) {
  try {
    const form = {
      name: newForm.name,
      phone: newForm.phone,
      email: newForm.email,
      black: +newForm.black,
      color: +newForm.color,
    };
  } catch (err) {
    throw err;
  }
};
