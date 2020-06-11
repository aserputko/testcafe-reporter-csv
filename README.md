# testcafe-reporter-csv
[![Build Status](https://travis-ci.org/JohnBerendsenQA/testcafe-reporter-csv.svg)](https://travis-ci.org/JohnBerendsenQA/testcafe-reporter-csv)

This is the **csv** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

<p align="center">
    <img src="https://raw.github.com/JohnBerendsenQA/testcafe-reporter-csv/master/media/preview.png" alt="preview" />
</p>

## Install

```
npm install testcafe-reporter-csv
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter csv
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('csv') // <-
    .run();
```

## Author
mail@johnberendsen.com (http://johnberendsen.com)
