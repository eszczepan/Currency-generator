import { convert } from "./lib.js";
import { formatCurrency } from "./utils.js";
import { fromSelect, toSelect, fromAmount, toAmount } from "./elements.js";

export async function handleInput() {
  const rawAmount = await convert(
    fromAmount.value,
    fromSelect.value,
    toSelect.value
  );

  toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}
