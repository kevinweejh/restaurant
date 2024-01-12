# Restaurant Page

This project is a practical exploration of Webpack configuration and Tailwind CSS integration, building upon The Odin Project's Restaurant Page. The primary focus is on setting up and understanding the differences in Webpack configurations for development and production environments, as well as integrating Tailwind CSS for styling.

## Project Overview

### Purpose

This project is designed to familiarize myself with extended Webpack configuration and Tailwind CSS integration. It demonstrates how to handle different build requirements for development and production environments in Webpack and effectively configure Tailwind CSS in a web development project.

### Key Features

- Use of ES6 modules for JavaScript code organization.
- Extended Webpack configuration with separate setups for development and production.
- Integration of Tailwind CSS within the Webpack environment.

## Technical Details

### Webpack Configuration

#### webpack.common.js

- Defines the entry point and bundle output settings for the `/dist` directory, including `clean: true` for cleaning the directory on each build.
- Configuration of the HtmlWebpackPlugin for projects with more complex HTML requirements.
- Rules for image asset management.

#### webpack.dev.js

- Merges with `webpack.common.js`, adding development-specific settings like devServer configuration.
- CSS handling rules using `style-loader`, `css-loader`, and `postcss-loader`.

#### webpack.prod.js

- Merges with `webpack.common.js`, employing `MiniCssExtractPlugin` for CSS extraction and `CssMinimizerPlugin` for CSS compression.

### Optimizations

- Image optimization in both development and production setups.
- CSS file extraction and minification in production, using `MiniCssExtractPlugin` and `CssMinimizerPlugin`.
- Built-in JavaScript minification with `TerserWebpackPlugin`, default with Webpack 5+ out of the box when `mode: 'production'` is set. Note: No additional setup is required for basic usage.

### Tailwind CSS Integration

- Follows standard installation and setup procedures as per the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation/using-postcss).
- Tailwind classes can be added statically in HTML or dynamically in JavaScript files. They are scanned using Regex as specified in the Tailwind configuration.
- The `./style.css` file, containing Tailwind directives, should be imported only once in the entry point JavaScript file. Do not link this stylesheet directly in the HTML template or other modules.
- Caution: Avoid including any CSS output files in the `/src` directory targeted by the Tailwind `content` configuration to prevent an infinite rebuilding loop.

## Setup and Installation

### Prerequisites

- Node.js (specify the required version)

### Installation

```bash
npm install
```

### Running the Project

- **For development:**

  ```bash
  npm start
  ```

- **For production:**

  ```bash
  npm run build
  ```

## Usage and Examples

> (To be added later with screenshots and usage examples.)

## Contribution and Support

### Contributing

> (Guidelines for contributing, such as how to submit pull requests, coding standards, etc.)

### Support

For support or to report issues, contact me at [kevinweejh@gmail.com](mailto:kevinweejh@gmail.com) or [hello@codebykevin.dev](mailto:hello@codebykevin.dev).

## Acknowledgements and References

This project draws inspiration from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) and utilizes resources from [Tailwind CSS](https://tailwindcss.com/docs/installation) and [Webpack](https://webpack.js.org/guides/) documentation, along with third-party plugins like [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/), [css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/), and [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/).