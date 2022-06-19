import { KUICKPAY_AMOUNT } from './constants';

/**
 * Takes a kuickpay formatted amount and converts it to a float as string
 * @param {string} amount - The amount to be converted.
 * @returns float as string
 */
export const convertKuickpayAmountToFloat = (amount: string): string => {
  return (parseInt(amount) / 100).toFixed(2);
};

/**
 * It converts a decimal amount to a Kuickpay formatted amount.
 * @param {string} amountToConvert - The amount to convert to Kuickpay format.
 * @param [signed=true] - boolean - whether or not the amount is signed.
 * @returns amount in kuickpay format
 */
export const convertDecimalToKuickpayFormat = (
  amountToConvert: string,
  signed = true,
) => {
  const amountAsFloat = parseFloat(
    parseFloat(amountToConvert).toFixed(2).replace('.', ''),
  );
  const amountLength = amountAsFloat.toString().length;
  const sign = amountAsFloat < 0 ? '-' : '+';
  if (signed) {
    const paddingToAdd = KUICKPAY_AMOUNT.PADDING_NUMBER.repeat(
      KUICKPAY_AMOUNT.PADDING_LENGTH_SIGNED - sign.length - amountLength,
    );
    return `${sign}${paddingToAdd}${amountAsFloat}`;
  }
  const paddingToAdd = KUICKPAY_AMOUNT.PADDING_NUMBER.repeat(
    KUICKPAY_AMOUNT.PADDING_LENGTH_UNSIGNED - amountLength,
  );
  return `${paddingToAdd}${amountAsFloat}`;
};
