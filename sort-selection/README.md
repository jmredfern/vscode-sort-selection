# Sort Selection

This plugin adds the "Sort selection" and "Sort selection with semicolon" commands.

The command will sort a comma or semicolon delimited list within a selection.

### Examplea:

* **Comma:** "a, c, b" will become "a, b, c"
* **Semicolon:** "a; c; b" will become "a; b; c"
* **Numbers:** "3; 2; 10; 40; 6; 4; 30; 33; 1" will become "1; 2; 3; 4; 6; 10; 30; 33; 40"

It also supports to order both alphabetically and numberically, with accented, non-accented and uppercase:

"3; 2; 10; 40; 6; 4; 30; 33; 1; Gustavo, julho, Klaus, keyboard, último, árbol, uma, água, Argentina, Ángelo, argelino, unido" will become "1; 2; 3; 4; 6; 10; 30; 33; 40; Gustavo, julho, Klaus, keyboard, último, árbol, uma, água, Argentina, Ángelo, argelino, unido".

## Changelog

## 2.0.0 - 2019-05-11
- Fixed and Support for alphabetical order of accented, non-accented and uppercase letters;
- Support for numerical order: 0, 1, 2, 310, 11, 20, 22, 30, 33;
- Added support for semicolon, very used in the `.desktop` files of Linux apps.

### 1.0.1
Improved description

### 1.0.0
Initial release
