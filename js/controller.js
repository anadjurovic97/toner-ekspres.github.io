import * as model from "./model.js";
import { MODAL_CLOSE_SEC } from "./config.js";
import form from "./form.js";

//import "core-js/stable"; // Pollyfiling everything else
//import "regenerator-runtime/runtime"; // Pollyfiling async/await
//import { async } from "regenerator-runtime";

const controlForm = async function (newForm) {
  try {
    // Show loading spinner
    form.renderSpinner();

    // Upload the new form data
    await model.uploadForm(newForm);
    console.log(model.state.recipe);

    // Render form
    recipeView.render(model.state.recipe);

    // Success message
    form.renderMessage();

    // Close form window
    setTimeout(function () {
      form.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error("💥", err);
    form.renderError(err.message);
  }
};

const init = function () {
  form.addHandlerUpload(controlForm);
};
init();
