# Portfolio
[![Release Version](https://img.shields.io/github/v/release/drewfravert/fravert.dev)](https://github.com/drewfravert/fravert.dev/releases)
![dependency Status](https://img.shields.io/david/drewfravert/fravert.dev)
![devDependency Status](https://img.shields.io/david/dev/drewfravert/fravert.dev)
![Commit Activity](https://img.shields.io/github/commit-activity/m/drewfravert/fravert.dev)

Personal portfolio site to host my biography, thoughts, résumé and relevant social channels while simultaneously demonstrating various development knowledge via an over-engineered application to display the aforementioned information.


## Quick Start
To run this project locally:

  * Clone this repo with `git clone git@github.com:drewfravert/fravert.dev.git`
  * Install [mix](https://elixir-lang.org/getting-started/mix-otp/introduction-to-mix.html) dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install [node.js](https://nodejs.dev/) dependencies with `yarn install`
  * Generate a self-signed certificate with `mix phx.gen.cert`
  * Add `fravert.local` as an alias to `localhost` in your `/etc/hosts` file
  * Start [phoenix](https://hexdocs.pm/phoenix/overview.html) endpoint with `mix phx.server`

You can now visit [`https://fravert.local:4001`](https://fravert.local:4001) from your browser.


## Technologies
| Language                                                              | Version | Description                                                                                 |
| :-------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------ |
| [Elixir](https://elixir-lang.org/)                                    | 1.10.2  | A dynamic, functional language designed for building scalable and maintainable applications |
| [Phoenix](https://www.phoenixframework.org/)                          | 1.4.16  | A productive web framework that does not compromise speed or maintainability                |
|                                                                       |         |                                                                                             |
| [PostgreSQL](https://www.postgresql.org/)                             | 12.2.0  | A powerful, open source object-relational database system                                   |
| [Ecto](https://github.com/elixir-ecto/ecto)                           | 3.4.0   | A toolkit for data mapping and language integrated query                                    |
|                                                                       |         |                                                                                             |
| [GraphQL](https://graphql.org/)                                       | –       | A query language for your API                                                               |
| [Absinthe](https://absinthe-graphql.org/)                             | 1.5.0   | A GraphQL toolkit for Elixir                                                                |
|                                                                       |         |                                                                                             |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | ES2020  | A lightweight, interpreted programming language with first-class functions                  |
| [Webpack](https://webpack.js.org/)                                    | 5.0.0   | A module bundler for JavaScript                                                             |
| [Vue](https://vuejs.org/)                                             | 3.0.0   | A progressive, incrementally-adoptable JavaScript framework for building UI on the web      |
| [Vue Apollo](https://vue-apollo.netlify.com/)                         | 3.0.3   | An Apollo/GraphQL integration for VueJS                                                     |
| [lodash](https://lodash.com/)                                         | 4.17.15 | A modern JavaScript utility library delivering modularity, performance & extras             |
|                                                                       |         |                                                                                             |
| [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)               | –       | A stylesheet language used to describe the presentation of a document written in HTML       |
| [PostCSS](https://postcss.org/)                                       | 7.0.27  | A tool for transforming styles with JavaScript plugins                                      |
|                                                                       |         |                                                                                             |
| [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)             | –       | A standard markup language for the web                                                      |


## Questions
Questions? You can reach me at [drew@fravert.dev](mailto:drew@fravert.dev).


## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/drewfravert/fravert.dev/releases).


## License
2020 &copy; [Drew Fravert](https://github.com/drewfravert/)
