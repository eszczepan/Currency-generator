import currencies from "./js/currencies.js";
import { generateOptions } from "./js/utils.js";
import { handleInput } from "./js/handlers.js";
import { fromSelect, toSelect, form } from "./js/elements.js";

const optionsHTML = generateOptions(currencies);
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener("input", handleInput);
