import { formatCurrency } from "../utils/money.js";

function equal(name, expected, actual) {
  let passed = false;
  if (expected === actual) {
    passed = true;
  }
  console.log(`[test] ${name}: expected=${expected}, actual=${actual}, passed=${passed}`)
}

function testFormatCUrrency() {
  let expected = 1.00.toFixed(2);
  let actual = formatCurrency(100);
  equal("testFormatCUrrency", expected, actual);

  expected = 1.25.toFixed(2);
  actual = formatCurrency(125);
  equal("testFormatCUrrency", expected, actual);

  expected = 0.00.toFixed(2);
  actual = formatCurrency(0);
  equal("testFormatCUrrency", expected, actual);

  expected = 20.01.toFixed(2);
  actual = formatCurrency(2000.5);
  equal("testFormatCUrrency", expected, actual);

  expected = 20.00.toFixed(2);
  actual = formatCurrency(2000.4);
  equal("testFormatCUrrency", expected, actual);

  expected = 200059878.35.toFixed(2);
  actual = formatCurrency(20005987834.534394834);
  equal("testFormatCUrrency", expected, actual);
}

testFormatCUrrency();
