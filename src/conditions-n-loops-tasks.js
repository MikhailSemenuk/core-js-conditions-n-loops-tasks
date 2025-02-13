/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxValue = Number.NEGATIVE_INFINITY;
  maxValue = a > maxValue ? a : maxValue;
  maxValue = b > maxValue ? b : maxValue;
  maxValue = c > maxValue ? c : maxValue;
  return maxValue;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const isExistTriangle = (s1, s2, s3) =>
    s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1;
  const isTriangleIsosceles = (s1, s2, s3) =>
    s1 === s2 || s2 === s3 || s1 === s3;
  return isExistTriangle(a, b, c) && isTriangleIsosceles(a, b, c);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanNumerals = '';
  let currentNum = num;
  while (currentNum > 0) {
    if (currentNum >= 10) {
      romanNumerals += 'X';
      currentNum -= 10;
    } else if (currentNum >= 9) {
      romanNumerals += 'IX';
      currentNum -= 9;
    } else if (currentNum >= 5) {
      romanNumerals += 'V';
      currentNum -= 5;
    } else if (currentNum >= 4) {
      romanNumerals += 'IV';
      currentNum -= 4;
    } else if (currentNum >= 1) {
      romanNumerals += 'I';
      currentNum -= 1;
    } else {
      return romanNumerals;
    }
  }
  return romanNumerals;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let answer = '';
  for (let index = 0; index < numberStr.length; index += 1) {
    switch (numberStr[index]) {
      case '0':
        answer += 'zero';
        break;
      case '1':
        answer += 'one';
        break;
      case '2':
        answer += 'two';
        break;
      case '3':
        answer += 'three';
        break;
      case '4':
        answer += 'four';
        break;
      case '5':
        answer += 'five';
        break;
      case '6':
        answer += 'six';
        break;
      case '7':
        answer += 'seven';
        break;
      case '8':
        answer += 'eight';
        break;
      case '9':
        answer += 'nine';
        break;
      case '-':
        answer += 'minus';
        break;
      case '.':
      case ',':
        answer += 'point';
        break;
      default:
        break;
    }
    if (index !== numberStr.length - 1) {
      answer += ' ';
    }
  }
  return answer;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let index = 0; index < Math.trunc(str.length / 2); index += 1) {
    const char1 = str[index];
    const char2 = str[str.length - 1 - index];

    if (char1 !== char2) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === letter) {
      return index;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  const digitChar = `${digit}`;
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === digitChar) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const sumArray = (array, indexStart, indexEnd) => {
    let sum = 0;
    for (let index = indexStart; index <= indexEnd; index += 1) {
      sum += array[index];
    }
    return sum;
  };

  for (let index = 0; index < arr.length; index += 1) {
    if (
      sumArray(arr, 0, index - 1) === sumArray(arr, index + 1, arr.length - 1)
    ) {
      return index;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const array2D = new Array(size);
  for (let index = 0; index < size; index += 1) {
    array2D[index] = new Array(size);
  }

  for (let indexY = 0; indexY < size; indexY += 1) {
    for (let indexX = 0; indexX < size; indexX += 1) {
      array2D[indexY][indexX] = 0;
    }
  }

  const inBorderArray = (arr, coordinate) => {
    if (
      coordinate.x < 0 ||
      coordinate.y < 0 ||
      coordinate.x >= arr.length ||
      coordinate.y >= arr.length
    ) {
      return false;
    }
    if (arr[coordinate.y][coordinate.x] !== 0) {
      return false;
    }
    return true;
  };

  let currentDirection = 0;
  const RouteArray = [
    ['x', '+'],
    ['y', '+'],
    ['x', '-'],
    ['y', '-'],
  ];
  const changeDirection = () => {
    if (currentDirection + 1 > RouteArray.length - 1) {
      currentDirection = 0;
    } else {
      currentDirection += 1;
    }
  };
  const getNewCoordinate = (currentCoordinate) => {
    const newCoordinate = { ...currentCoordinate };
    if (RouteArray[currentDirection][1] === '+') {
      newCoordinate[RouteArray[currentDirection][0]] += 1;
    } else {
      newCoordinate[RouteArray[currentDirection][0]] -= 1;
    }
    return newCoordinate;
  };

  let value = 1;
  let currentCoordinate = { x: 0, y: 0 };
  for (let index = 0; index < size * size; index += 1) {
    if (index !== 0) {
      const newCoordinate = getNewCoordinate(currentCoordinate);
      if (inBorderArray(array2D, newCoordinate)) {
        currentCoordinate = { ...newCoordinate };
      } else {
        changeDirection();
        currentCoordinate = getNewCoordinate(currentCoordinate);
      }
    }

    array2D[currentCoordinate.y][currentCoordinate.x] = value;
    value += 1;
  }
  return array2D;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const lintMatrix = matrix;

  const newMatrix = new Array(matrix.length);
  for (let index = 0; index < matrix.length; index += 1) {
    newMatrix[index] = new Array(matrix.length);
  }

  for (let index = 0; index < matrix.length; index += 1) {
    const slice = matrix[index];
    for (let indexR = 0; indexR < slice.length; indexR += 1) {
      newMatrix[indexR][matrix.length - 1 - index] = slice[indexR];
    }
  }

  for (let indexY = 0; indexY < matrix.length; indexY += 1) {
    for (let indexX = 0; indexX < matrix.length; indexX += 1) {
      lintMatrix[indexY][indexX] = newMatrix[indexY][indexX];
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const quickSort = (array) => {
    if (array.length <= 1) {
      return array;
    }
    const pivotIndex = 0;
    const pivot = array[pivotIndex];
    const getElementsMoreLessPivot = (arr2, indexPivot = 0) => {
      const pivot2 = arr2[indexPivot];
      const lessPivot = [];
      const morePivot = [];
      for (let index = 0; index < arr2.length; index += 1) {
        if (index !== indexPivot) {
          const element = arr2[index];
          if (element < pivot2) {
            lessPivot[lessPivot.length] = element;
          } else {
            morePivot[morePivot.length] = element;
          }
        }
      }
      return { lessPivot, morePivot };
    };

    const objectLessMore = getElementsMoreLessPivot(array, pivotIndex);

    return [
      ...quickSort(objectLessMore.lessPivot),
      pivot,
      ...quickSort(objectLessMore.morePivot),
    ];
  };

  const pointerArr = arr;
  const answer = quickSort(arr);
  for (let index = 0; index < arr.length; index += 1) {
    pointerArr[index] = answer[index];
  }
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const cashShuffle = new Map();
  const shuffleCharOnce = (str2) => {
    if (cashShuffle.has(str2)) {
      return cashShuffle.get(str2);
    }

    let strEven = '';
    let strOdd = '';
    for (let index = 0; index < str2.length; index += 1) {
      if (index % 2) {
        strOdd += str2[index];
      } else {
        strEven += str2[index];
      }
    }
    const answer = strEven + strOdd;
    cashShuffle.set(str2, answer);
    return answer;
  };
  let answer = str;
  const effectiveIterations = iterations;
  let repeatEffect = 0;
  for (let index = 0; index < effectiveIterations; index += 1) {
    answer = shuffleCharOnce(answer);
    if (index > 0 && str === answer) {
      repeatEffect = iterations % (index + 1);
      break;
    }
  }
  if (repeatEffect > 0) {
    answer = str;
    for (let index = 0; index < repeatEffect; index += 1) {
      answer = shuffleCharOnce(answer);
    }
  }

  return answer;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const findIndexMinElement = (arr, startPosition, elementMore) => {
    let minIndex = 0;
    let minElement = Number.MAX_SAFE_INTEGER;
    for (let index = startPosition; index < arr.length; index += 1) {
      if (arr[index] < minElement && arr[index] > elementMore) {
        minElement = arr[index];
        minIndex = index;
      }
    }
    return minIndex;
  };

  let array = Array.from(`${number}`).map(Number);
  for (let index = array.length; index > 0; index -= 1) {
    const currentDigit = array[index];
    const nextDigit = array[index - 1];
    if (currentDigit > nextDigit) {
      const newIndex = findIndexMinElement(array, index - 1, nextDigit);
      [array[newIndex], array[index - 1]] = [array[index - 1], array[newIndex]];
      const leftPart = [...array].splice(0, index);
      const rightPart = [...array].splice(index).sort();
      array = [...leftPart, ...rightPart];
      break;
    }
  }
  return Number(array.join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
