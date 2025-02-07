# @hashicorp/react-search

## 6.2.0

### Minor Changes

- [#424](https://github.com/hashicorp/react-components/pull/424) [`02428a8`](https://github.com/hashicorp/react-components/commit/02428a811c9a2c508a90c9eedd71e89d94a0cf70) Thanks [@zchsh](https://github.com/zchsh)! - Add support for Algolia config, through an optional algoliaConfig prop on SearchProvider. This prop can be omitted, or provided with incomplete properties, and react-search will fall back to environment variables.

## 6.1.1

### Patch Changes

- [#388](https://github.com/hashicorp/react-components/pull/388) [`a906a8d`](https://github.com/hashicorp/react-components/commit/a906a8d0056bd85e2f875d397f104ea83cf66014) Thanks [@BRKalow](https://github.com/BRKalow)! - Adds styles for search hits and adds units to a variable so that it works in calc()

## 6.1.0

### Minor Changes

- [#386](https://github.com/hashicorp/react-components/pull/386) [`53ac9b9`](https://github.com/hashicorp/react-components/commit/53ac9b901b7413682c531ff9dcc45f7596ddf4c5) Thanks [@thiskevinwang](https://github.com/thiskevinwang)! - expose optional `transformObjectId` function

## 6.0.2

### Patch Changes

- [#377](https://github.com/hashicorp/react-components/pull/377) [`fe1fe69`](https://github.com/hashicorp/react-components/commit/fe1fe696e981bd93c5bcf34329eb81b571f798c9) Thanks [@BRKalow](https://github.com/BRKalow)! - Revert version of `unist-util-visit` so that the script can be run in a cjs node environment

## 6.0.1

### Patch Changes

- [#330](https://github.com/hashicorp/react-components/pull/330) [`44a0e60`](https://github.com/hashicorp/react-components/commit/44a0e60b577a36978275ef1b0efa0e351a9802c6) Thanks [@zchsh](https://github.com/zchsh)! - Removes package-lock.json

## 6.0.0

### Major Changes

- [#298](https://github.com/hashicorp/react-components/pull/298) [`4c3e3d1`](https://github.com/hashicorp/react-components/commit/4c3e3d1efdba091f1a38b69b209f581e814f0e57) Thanks [@zchsh](https://github.com/zchsh)! - Converts Search to CSS modules, and makes tweaks in consuming components to account for related changes.

  - 💥✨ BREAKING CHANGE: Refactored to CSS modules.
    - Consumers will need to remove any `@hashicorp/react-search/style.css` imports.
    - For `.hit-content`, consumers will need to import `@hashicorp/react-search/hit-content-styles.module.css`, and use `s.root` on their `renderHitContent` container.
