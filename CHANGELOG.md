# Changelog

## [2.0.0] - 2024-08-07

### Added

### Changed

- Refactored the API service layer
- Updated dependencies to the latest versions

### Removed

- Incompatible [redoc](https://www.npmjs.com/package/redoc) library not supported in angular 18.
- Removed the [`or`](https://www.npmjs.com/package/or) doesn't have any purpose.

### Breaking Changes

- Manual migration required from Angular version 16 to 18 made the redoc library incompatible raised by vite logs when app is building.
