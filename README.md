# Writer's Block

![License Badge](https://img.shields.io/badge/license-MIT-blue)

## Description

This application is a one-stop location for students to organize, outline, and research topics for a paper they are writing. Students can store multiple different projects in their profile and can update them as necessary. The app will create an outline for them as they save their ideas, will provide search options for scholarly articles to further research, and will also help create and format Works Cited into multiple citation formats. After that is done, the app will generate a Works Cited page for the student to copy/paste into their document, ready to go for submission.

Here is a screenshot of the app:

![Writer's Block Screenshot]()

Here is a link to the Heroku deployment: [Writers's Block Heroku Link]()

## Table of Contents

-- [Installation](#installation)

-- [Usage](#usage)

-- [License](#license)

-- [Contributing](#contributing)

-- [Tests](#tests)

-- [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

    npm i

Additionally, mySQL is required as a separate install. To set up database and seed it, run the following command in your mySQL shell:

    source db/schema.sql

Exit the mySQL shell and enter the following command in your terminal to seed the database:

    node seeds/index.js

## Usage

Run the application with the following command:

    node server.js

and open by navigating to the Heroku link listed above.

Once the server is up, the user can create an account and log in to the site. Once done, the user can begin posting. Posts can be edited and deleted by the poster and other posts from the dashboard can be commented. The user cannot begin posting without having logged in first.

## License

This project is protected under the [MIT](https://choosealicense.com/licenses/mit/) license. (2021) (Jaraad Hines, Phil Bohn, Isaac Long, Mark Cirineo)

## Contributing

N/A

## Tests

N/A

## Questions

If there any questions regarding this project, we can be contacted in the following places:

GitHub: [Jaraad Hines](https://github.com/jhines19) --- [Phil Bohn](https://github.com/lamperouge1218) --- [Isaac Long](https://github.com/isaaclong26) --- [Mark Cirineo](https://github.com/MarkCirineo)
