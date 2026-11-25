import { formatCurrency } from "../utils/money.js";

function test(name, expected, actual) {
  let passed = false;
  if (expected === actual) {
    passed = true;
  }
  console.log(`[test] ${name}: expected=${expected}, actual=${actual}, passed=${passed}`)
}

function testFormatCUrrency() {
  let expected = 1.00.toFixed(2);
  let actual = formatCurrency(100);
  test("testFormatCUrrency", expected, actual);

  expected = 1.25.toFixed(2);
  actual = formatCurrency(125);
  test("testFormatCUrrency", expected, actual);

  expected = 0.00.toFixed(2);
  actual = formatCurrency(0);
  test("testFormatCUrrency", expected, actual);
}

testFormatCUrrency();
