# Sort a delimited list

This plugin adds the "Sort delimited list" command.

The command will sort a comma or semicolon or another punctation mark delimited list within a selection.

### Examples:

* **Comma:** "a, c, b" will become "a, b, c"
* **Semicolon:** "a; c; b" will become "a; b; c"
* **Numbers:** "3; 2; 10; 40; 6; 4; 30; 33; 1" will become "1; 2; 3; 4; 6; 10; 30; 33; 40"

It also supports to order both alphabetically and numberically, with accented, non-accented and uppercase:

`3, 2, 10, 40, 6, 4, 30, 33, 1, Gustavo, julho, Klaus, keyboard, último, árbol, uma, água, Argentina, Ángelo, argelino, unido` will become `1, 2, 3, 4, 6, 10, 30, 33, 40, Gustavo, julho, Klaus, keyboard, último, árbol, uma, água, Argentina, Ángelo, argelino, unido`.

Preview:

![preview](https://media.giphy.com/media/lAuvwiWMz8wNZouF0O/giphy.gif)


## Changelog

## 2.0.2 - 2021-04-29
- Added extension icon
- Extension renamed

## 2.0.1 - 2019-05-12
- Unified scripts
- Supported unified natural sort

## 2.0.0 - 2019-05-11
- Fixed and support for alphabetical order of accented, non-accented and uppercase letters
- Support for numerical order: 0, 1, 2, 11, 20, 22, 30, 33, 310
- Added support for semicolon, very used in the `.desktop` files of Linux apps

## 1.0.1
Improved description

## 1.0.0
Initial release

# License

This extension is under MIT. The codes of natural sort (numbers, letters, accented letters and non-Latin letters), added by [Gustavo Costa](https://github.com/gusbemacbe) to the extension, are authored by [Georg Barikin](https://github.com/gebrkn). 
