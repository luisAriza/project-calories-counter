const compose =
  (...functions) =>
  (data) =>
    functions.reduceRight((value, func) => func(value), data);

//ID's de los inputs
let description = $("#description");
let calories = $("#calories");
let carbs = $("#carbs");
let protein = $("#protein");

//Comprobar si hay contenido en el input para eliminar la clase "is-invalid"
description.keypress(() => {
  description.removeClass("is-invalid");
});
calories.keypress(() => {
  calories.removeClass("is-invalid");
});
carbs.keypress(() => {
  carbs.removeClass("is-invalid");
});
protein.keypress(() => {
  protein.removeClass("is-invalid");
});

//Validar si el input esta vació para agregar la clase "is-invalid"
const validateInputs = () => {
  description.val() ? "" : description.addClass("is-invalid");
  calories.val() ? "" : calories.addClass("is-invalid");
  carbs.val() ? "" : carbs.addClass("is-invalid");
  protein.val() ? "" : protein.addClass("is-invalid");

  if (description.val() && calories.val() && carbs.val() && protein.val()) {
    console.log("Ok");
  }
};
