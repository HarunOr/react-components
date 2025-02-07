# @hashicorp/react-subnav

## 9.2.0

### Minor Changes

- [#426](https://github.com/hashicorp/react-components/pull/426) [`7a04f76`](https://github.com/hashicorp/react-components/commit/7a04f76a3ac20bc65ead0f8e4915d0ad18dfc94b) Thanks [@dstaley](https://github.com/dstaley)! - Automatically dismiss open navigation dropdown menus when the user clicks on an anchor element.

## 9.1.4

### Patch Changes

- [#417](https://github.com/hashicorp/react-components/pull/417) [`123c23b`](https://github.com/hashicorp/react-components/commit/123c23b46757c0b2fb0de8bf0d022081ed346ccf) Thanks [@thiskevinwang](https://github.com/thiskevinwang)! - adjust `scroll-margin-top` style

## 9.1.3

### Patch Changes

- [#406](https://github.com/hashicorp/react-components/pull/406) [`605ae1a`](https://github.com/hashicorp/react-components/commit/605ae1a3179855cf861b1bd86c7b7c9414761d3f) Thanks [@zchsh](https://github.com/zchsh)! - Hide in print media.

## 9.1.2

### Patch Changes

- [#397](https://github.com/hashicorp/react-components/pull/397) [`edcaf4f`](https://github.com/hashicorp/react-components/commit/edcaf4f3bf7df33932efae3b7885c908a541ce1a) Thanks [@zchsh](https://github.com/zchsh)! - Bump button dependency. Explicit changset added to enable canary pre-release.

- Updated dependencies [[`edcaf4f`](https://github.com/hashicorp/react-components/commit/edcaf4f3bf7df33932efae3b7885c908a541ce1a)]:
  - @hashicorp/react-button@6.0.3

## 9.1.1

### Patch Changes

- [#391](https://github.com/hashicorp/react-components/pull/391) [`f0b43a7`](https://github.com/hashicorp/react-components/commit/f0b43a7910f8a76e102afb18b38e22b19348d2cb) Thanks [@jescalan](https://github.com/jescalan)! - Add permalink spacing when subnav is in sticky mode so headlines do not disappear underneath it

## 9.1.0

### Minor Changes

- [#381](https://github.com/hashicorp/react-components/pull/381) [`ba93441`](https://github.com/hashicorp/react-components/commit/ba934415dd7d2ad56360c769f609c5ab9057ddd1) Thanks [@zchsh](https://github.com/zchsh)! - Add support for dark theme, via new theme prop.

## 9.0.1

### Patch Changes

- [#330](https://github.com/hashicorp/react-components/pull/330) [`44a0e60`](https://github.com/hashicorp/react-components/commit/44a0e60b577a36978275ef1b0efa0e351a9802c6) Thanks [@zchsh](https://github.com/zchsh)! - Removes package-lock.json

## 9.0.0

### Major Changes

- [#311](https://github.com/hashicorp/react-components/pull/311) [`2e43e7c`](https://github.com/hashicorp/react-components/commit/2e43e7c716b8889f942e8dfcd1b2e553a72d0fa6) Thanks [@zchsh](https://github.com/zchsh)! - - 💥✨ BREAKING CHANGE: Converts to CSS modules.
  - Consumers will need to remove any `@hashicorp/react-subnav/style.css` imports.
  - To support overrides in projects, consumers can use the `className` prop.
    - For example, consumers can pass `className="g-subnav` to retain existing overrides.

## 8.4.3

### Patch Changes

- Updated dependencies [[`b0fd753`](https://github.com/hashicorp/react-components/commit/b0fd753d7f9e5c4649424139712d4d2c5ec5ffd9)]:
  - @hashicorp/react-button@6.0.0
