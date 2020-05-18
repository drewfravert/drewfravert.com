# Portfolio
[![Release Version](https://img.shields.io/github/v/release/drewfravert/drewfravert.com)](https://github.com/drewfravert/drewfravert.com/releases)
![dependency Status](https://img.shields.io/david/drewfravert/drewfravert.com)
![devDependency Status](https://img.shields.io/david/dev/drewfravert/drewfravert.com)
![Commit Activity](https://img.shields.io/github/commit-activity/m/drewfravert/drewfravert.com)

Personal portfolio site to host my biography, work, thoughts, resume, relevant social channels, etc. while simultaneously demonstrating various design and development knowledge.


## Quick Start
To run this project locally:

  * Clone this repo with `git clone git@github.com:drewfravert/drewfravert.com.git`
  * Install [mix](https://elixir-lang.org/getting-started/mix-otp/introduction-to-mix.html) dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install [node.js](https://nodejs.dev/) dependencies with `yarn install`
  * Generate a self-signed certificate with `mix phx.gen.cert`
  * Add `drewfravert.local` as an alias to `localhost` in your `/etc/hosts` file
  * Start [phoenix](https://hexdocs.pm/phoenix/overview.html) endpoint with `mix phx.server`

You can now visit [`https://drewfravert.local:4001`](https://drewfravert.local:4001) from your browser.


## Technologies
| Language                                                              | Version | Description                                                                                 |
| :-------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------ |
| [Elixir](https://elixir-lang.org/)                                    | 1.10.3  | A dynamic, functional language designed for building scalable and maintainable applications |
| [Phoenix](https://www.phoenixframework.org/)                          | 1.5.1   | A productive web framework that does not compromise speed or maintainability                |
|                                                                       |         |                                                                                             |
| [PostgreSQL](https://www.postgresql.org/)                             | 12.3.0  | A powerful, open source object-relational database system                                   |
| [Ecto](https://github.com/elixir-ecto/ecto)                           | 3.4.4   | A toolkit for data mapping and language integrated query                                    |
|                                                                       |         |                                                                                             |
| [GraphQL](https://graphql.org/)                                       | –       | A query language for your API                                                               |
| [Absinthe](https://absinthe-graphql.org/)                             | 1.5.1   | A GraphQL toolkit for Elixir                                                                |
|                                                                       |         |                                                                                             |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | –       | A lightweight, interpreted programming language with first-class functions                  |
| [Webpack](https://webpack.js.org/)                                    | 5.0.0   | A module bundler for JavaScript                                                             |
| [Vue](https://vuejs.org/)                                             | 3.0.0   | A progressive, incrementally-adoptable JavaScript framework for building UI on the web      |
| [lodash](https://lodash.com/)                                         | 4.17.15 | A modern JavaScript utility library delivering modularity, performance & extras             |
|                                                                       |         |                                                                                             |
| [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)               | –       | A stylesheet language used to describe the presentation of a document written in HTML       |
| [PostCSS](https://postcss.org/)                                       | 7.0.30  | A tool for transforming styles with JavaScript plugins                                      |
|                                                                       |         |                                                                                             |
| [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)             | –       | A standard markup language for the web                                                      |


## Questions
Questions? You can reach me at [drew@fravert.dev](mailto:drew@fravert.dev).


## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/drewfravert/drewfravert.com/releases).


## License
2020 &copy; [Drew Fravert](https://github.com/drewfravert/)
